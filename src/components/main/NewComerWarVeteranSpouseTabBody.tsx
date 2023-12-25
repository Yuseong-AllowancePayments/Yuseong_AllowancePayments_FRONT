import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ExcelValue from "./ExcelValue";
import { newComerTabType } from "../../models/response";
import { debounce } from "lodash";
import { useEditExcelNewcomer } from "../../utils/api/Allowance";

// 전입일 < 신청일
const NewComerWarVeteranSpouseTabBody = ({
    data,
}: {
    data: newComerTabType;
}) => {
    const { form, setForm, handleChange } = useForm({
        accountHolder: "",
        applicantAddressDetail: "",
        applicantID: "",
        applicantName: "",
        applicantPhoneNumber: "",
        applicantPostalCode: "",
        applicationDate: "",
        applicationReason: "",
        bankAccountNumber: "",
        bankName: "",
        hangJungDong: "",
        nationalMeritDateOfDeath: "",
        nationalMeritID: "",
        nationalMeritName: "",
        note: "",
        serialNumber: "",
        transferDate: "",
        veteransNumber: "",
        warType: "",
        id: 0,
    });

    const {
        accountHolder,
        applicantAddressDetail,
        applicantID,
        applicantName,
        applicantPhoneNumber,
        applicantPostalCode,
        applicationDate,
        applicationReason,
        bankAccountNumber,
        bankName,
        hangJungDong,
        nationalMeritDateOfDeath,
        nationalMeritID,
        nationalMeritName,
        note,
        serialNumber,
        transferDate,
        veteransNumber,
        warType,
    } = form;

    const { id, ...rest } = form;
    const { mutate } = useEditExcelNewcomer({
        id: data.id,
        excelLine: rest as any,
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
            applicantID: data.applicantID,
            applicantName: data.applicantName,
            applicantPhoneNumber: data.applicantPhoneNumber,
            applicantPostalCode: data.applicantPostalCode,
            applicationDate: data.applicationDate,
            applicationReason: data.applicationReason,
            bankAccountNumber: data.bankAccountNumber,
            bankName: data.bankName,
            hangJungDong: data.hangJungDong,
            nationalMeritDateOfDeath: data.nationalMeritDateOfDeath!,
            nationalMeritID: data.nationalMeritID!,
            nationalMeritName: data.nationalMeritName!,
            note: data.note,
            serialNumber: data.serialNumber,
            transferDate: data.transferDate,
            veteransNumber: data.veteransNumber!,
            warType: data.warType!,
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
            />
            <ExcelValue
                name="veteransNumber"
                value={veteransNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicantName"
                value={applicantName}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicantID"
                value={applicantID}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicantPhoneNumber"
                value={applicantPhoneNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicantPostalCode"
                value={applicantPostalCode}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicantAddressDetail"
                value={applicantAddressDetail}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="hangJungDong"
                value={hangJungDong}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="nationalMeritName"
                value={nationalMeritName}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="nationalMeritID"
                value={nationalMeritID}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="nationalMeritDateOfDeath"
                value={nationalMeritDateOfDeath}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="warType"
                value={warType}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="bankName"
                value={bankName}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="accountHolder"
                value={accountHolder}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="bankAccountNumber"
                value={bankAccountNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="transferDate"
                value={transferDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicationDate"
                value={applicationDate}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="applicationReason"
                value={applicationReason}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
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

export default NewComerWarVeteranSpouseTabBody;
