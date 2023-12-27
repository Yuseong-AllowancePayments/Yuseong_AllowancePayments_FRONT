import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ExcelValue from "./ExcelValue";
import { debounce } from "lodash";
import { newComerTabType } from "../../models/response";
import { useEditExcelNewcomer } from "../../utils/api/Allowance";
import { regex } from "../../utils/functions/regex";

const NewComerHonorableAllowanceTabBody = ({
    data,
    refetch,
}: {
    data: newComerTabType;
    refetch: () => void;
}) => {
    const { form, setForm, handleChange } = useForm({
        accountHolder: "",
        applicantAddressDetail: "",
        applicantBirthday: "",
        applicantGender: "",
        applicantID: "",
        applicantName: "",
        applicantPhoneNumber: "",
        applicantPostalCode: "",
        applicationDate: "",
        applicationReason: "",
        bankAccountNumber: "",
        bankName: "",
        bereavedFamily: "",
        familyRelation: "",
        hangJungDong: "",
        note: "",
        serialNumber: "",
        transferDate: "",
        veteransNumber: "",
        veteransType: "",
        id: 0,
    });

    const {
        accountHolder,
        applicantAddressDetail,
        applicantBirthday,
        applicantGender,
        applicantID,
        applicantName,
        applicantPhoneNumber,
        applicantPostalCode,
        applicationDate,
        applicationReason,
        bankAccountNumber,
        bankName,
        bereavedFamily,
        familyRelation,
        hangJungDong,
        note,
        serialNumber,
        transferDate,
        veteransNumber,
        veteransType,
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
            applicantBirthday: data.applicantBirthday!,
            applicantGender: data.applicantGender!,
            applicantID: data.applicantID,
            applicantName: data.applicantName,
            applicantPhoneNumber: data.applicantPhoneNumber,
            applicantPostalCode: data.applicantPostalCode,
            applicationDate: data.applicationDate,
            applicationReason: data.applicationReason,
            bankAccountNumber: data.bankAccountNumber,
            bankName: data.bankName,
            bereavedFamily: data.bereavedFamily!,
            familyRelation: data.familyRelation!,
            hangJungDong: data.hangJungDong,
            note: data.note,
            serialNumber: data.serialNumber,
            transferDate: data.transferDate,
            veteransNumber: data.veteransNumber!,
            veteransType: data.veteransType!,
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
                name="veteransNumber"
                value={veteransNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.hangjungdong.test(hangJungDong)}
            />
            <ExcelValue
                name="veteransType"
                value={veteransType}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!veteransType}
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
                name="applicantBirthday"
                value={applicantBirthday}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(applicantBirthday)}
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
                name="applicantGender"
                value={applicantGender}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!applicantGender}
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
                name="applicantPhoneNumber"
                value={applicantPhoneNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.phoneNumber.test(applicantPhoneNumber)}
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
                name="transferDate"
                value={transferDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!regex.date.test(transferDate)}
            />
            <ExcelValue
                name="familyRelation"
                value={familyRelation}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!familyRelation}
            />
            <ExcelValue
                name="bereavedFamily"
                value={bereavedFamily}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
                error={!bereavedFamily}
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

export default NewComerHonorableAllowanceTabBody;
