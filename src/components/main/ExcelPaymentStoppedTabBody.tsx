import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { paymentStoppedTabType } from "../../models/response";
import ExcelValue from "./ExcelValue";
import { debounce } from "lodash";
import { useEditExcelStopped } from "../../utils/api/Allowance";
import { regex } from "../../utils/functions/regex";

const ExcelPaymentStoppedTabBody = ({
    data,
    refetch,
}: {
    data: paymentStoppedTabType;
    refetch: () => void;
}) => {
    const { form, setForm, handleChange } = useForm({
        accountHolder: "",
        address: "",
        bankAccountNumber: "",
        bankName: "",
        depositType: "",
        hangJungDong: "",
        name: "",
        note: "",
        residentRegistrationNumber: "",
        serialNumber: "",
        stoppedDate: "",
        stoppedReason: "",
        transferAddress: "",
        veteransNumber: "",
        id: 0,
    });

    const {
        accountHolder,
        address,
        bankAccountNumber,
        bankName,
        depositType,
        hangJungDong,
        name,
        note,
        residentRegistrationNumber,
        serialNumber,
        stoppedDate,
        stoppedReason,
        transferAddress,
        veteransNumber,
    } = form;

    useEffect(() => {
        setForm(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { id, ...rest } = form;
    const { mutate } = useEditExcelStopped({
        id: data.id,
        excelLine: rest,
        refetch,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const editExcelForm = useCallback(
        debounce(() => {
            mutate();
        }, 500),
        []
    );

    return (
        <tr>
            <ExcelValue
                name="serialNumber"
                value={serialNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.serialNumber.test(serialNumber)}
            />
            <ExcelValue
                name="hangJungDong"
                value={hangJungDong}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.hangjungdong.test(hangJungDong)}
            />
            <ExcelValue
                name="veteransNumber"
                value={veteransNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.veteransNumber.test(veteransNumber)}
            />
            <ExcelValue
                name="name"
                value={name}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.name.test(name)}
            />
            <ExcelValue
                name="residentRegistrationNumber"
                value={residentRegistrationNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={
                    !regex.residentRegistrationNumber.test(
                        residentRegistrationNumber
                    )
                }
            />
            <ExcelValue
                name="address"
                value={address}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!address}
            />
            <ExcelValue
                name="depositType"
                value={depositType}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.depositType.test(depositType)}
            />
            <ExcelValue
                name="bankName"
                value={bankName}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.bankName.test(bankName)}
            />
            <ExcelValue
                name="accountHolder"
                value={accountHolder}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.name.test(accountHolder)}
            />
            <ExcelValue
                name="bankAccountNumber"
                value={bankAccountNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={
                    !regex
                        .newBankAccountNumber(bankName.split(":")[0])
                        .test(bankAccountNumber) &&
                    !regex
                        .oldBankAccountNumber(bankName.split(":")[0])
                        .test(bankAccountNumber)
                }
            />
            <ExcelValue
                name="stoppedReason"
                value={stoppedReason}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!stoppedReason}
            />
            <ExcelValue
                name="stoppedDate"
                value={stoppedDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(stoppedDate)}
            />
            <ExcelValue
                name="note"
                value={note}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="transferAddress"
                value={transferAddress}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!transferAddress && stoppedReason === '전출'}
            />
        </tr>
    );
};

export default ExcelPaymentStoppedTabBody;
