import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { paymentTargetTabType } from "../../models/response";
import ExcelValue from "./ExcelValue";
import { useEditExcelTarget } from "../../utils/api/Allowance";
import { debounce } from "lodash";

const ExcelPaymentTargetTabBody = ({ data }: { data: paymentTargetTabType }) => {
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
    const { mutate } = useEditExcelTarget({ id: data.id, excelLine: rest });

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
                name="veteransNumber"
                value={veteransNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="name"
                value={name}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="residentRegistrationNumber"
                value={residentRegistrationNumber}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="address"
                value={address}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="depositType"
                value={depositType}
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
                name="sibi"
                value={sibi}
                handleChange={(e) => {
                    handleChange(e);
                    editExcelForm();
                }}
            />
            <ExcelValue
                name="gubi"
                value={gubi}
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

export default ExcelPaymentTargetTabBody;
