import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { paymentTargetTabType } from "../../models/response";
import ExcelValue from "./ExcelValue";
import { useEditExcelTarget } from "../../utils/api/Allowance";
import { debounce } from "lodash";
import { regex } from "../../utils/functions/regex";

const ExcelPaymentTargetTabBody = ({
    data,
    refetch,
}: {
    data: paymentTargetTabType;
    refetch: () => void;
}) => {
    const { form, setForm, handleChange } = useForm({
        accountHolder: "",
        address: "",
        bankAccountNumber: "",
        bankName: "",
        depositType: "",
        gubi: 0,
        hangJungDong: "",
        name: "",
        note: "",
        residentRegistrationNumber: "",
        serialNumber: "",
        sibi: 0,
        veteransNumber: "",
        id: 0,
    });

    const {
        accountHolder,
        address,
        bankAccountNumber,
        bankName,
        depositType,
        gubi,
        hangJungDong,
        name,
        note,
        residentRegistrationNumber,
        serialNumber,
        sibi,
        veteransNumber,
    } = form;

    const { id, ...rest } = form;
    const { mutate } = useEditExcelTarget({
        id: data.id,
        excelLine: rest,
        refetch,
    });

    useEffect(() => {
        setForm(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                name="sibi"
                value={sibi}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!sibi}
            />
            <ExcelValue
                name="gubi"
                value={gubi}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!gubi}
            />
            <ExcelValue
                name="note"
                value={note}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
        </tr>
    );
};

export default ExcelPaymentTargetTabBody;
