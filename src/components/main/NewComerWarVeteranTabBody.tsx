import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ExcelValue from "./ExcelValue";
import { newComerTabType } from "../../models/response";
import { useEditExcelNewcomer } from "../../utils/api/Allowance";
import { debounce } from "lodash";
import { regex } from "../../utils/functions/regex";

const NewComerWarVeteranTabBody = ({
    data,
    refetch,
}: {
    data: newComerTabType;
    refetch: () => void;
}) => {
    const { form, setForm, handleChange } = useForm({
        id: 0,
        serialNumber: "",
        warRegistrationNumber: "",
        applicantName: "",
        applicantID: "",
        applicantBirthday: "",
        applicantPostalCode: "",
        applicantAddressDetail: "",
        applicantPhoneNumber: "",
        hangJungDong: "",
        bankName: "",
        bankAccountNumber: "",
        accountHolder: "",
        transferDate: "",
        applicationDate: "",
        applicationReason: "",
        note: "",
    });

    const {
        accountHolder,
        applicantAddressDetail,
        applicantBirthday,
        applicantID,
        applicantName,
        applicantPhoneNumber,
        applicantPostalCode,
        applicationDate,
        applicationReason,
        bankAccountNumber,
        bankName,
        hangJungDong,
        note,
        serialNumber,
        transferDate,
        warRegistrationNumber,
    } = form;

    const { id, ...rest } = form;
    const { mutate } = useEditExcelNewcomer({
        id: data.id,
        excelLine: rest as any,
        refetch,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const editExcelForm = useCallback(
        debounce(() => {
            mutate();
        }, 500),
        []
    );

    useEffect(() => {
        setForm({
            accountHolder: data.accountHolder,
            applicantAddressDetail: data.applicantAddressDetail,
            applicantBirthday: data.applicantBirthday || "",
            applicantID: data.applicantID,
            applicantName: data.applicantName,
            applicantPhoneNumber: data.applicantPhoneNumber,
            applicantPostalCode: data.applicantPostalCode,
            applicationDate: data.applicationDate,
            applicationReason: data.applicationReason,
            bankAccountNumber: data.bankAccountNumber,
            bankName: data.bankName,
            hangJungDong: data.hangJungDong,
            note: data.note,
            serialNumber: data.serialNumber,
            transferDate: data.transferDate,
            warRegistrationNumber: data.warRegistrationNumber,
            id: data.id,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                name="warRegistrationNumber"
                value={warRegistrationNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.veteransNumber.test(warRegistrationNumber)}
            />
            <ExcelValue
                name="applicantName"
                value={applicantName}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.name.test(applicantName)}
            />
            <ExcelValue
                name="applicantID"
                value={applicantID}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.residentRegistrationNumber.test(applicantID)}
            />
            <ExcelValue
                name="applicantBirthday"
                value={applicantBirthday}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(applicantBirthday)}
            />
            <ExcelValue
                name="applicantPostalCode"
                value={applicantPostalCode}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.postalCode.test(applicantPostalCode)}
            />
            <ExcelValue
                name="applicantAddressDetail"
                value={applicantAddressDetail}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!applicantAddressDetail}
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
                name="applicantPhoneNumber"
                value={applicantPhoneNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.phoneNumber.test(applicantPhoneNumber)}
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
                name="accountHolder"
                value={accountHolder}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.name.test(accountHolder)}
            />
            <ExcelValue
                name="transferDate"
                value={transferDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(transferDate)}
            />
            <ExcelValue
                name="applicationDate"
                value={applicationDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(applicationDate)}
            />
            <ExcelValue
                name="applicationReason"
                value={applicationReason}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!applicationReason}
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

export default NewComerWarVeteranTabBody;
