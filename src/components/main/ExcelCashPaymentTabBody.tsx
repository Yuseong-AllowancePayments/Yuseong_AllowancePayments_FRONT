import { useEffect, useCallback } from "react";
import { useForm } from "../../hooks/useForm";
import { cashPaymentTabType } from "../../models/response";
import ExcelValue from "./ExcelValue";
import { useEditExcelCash } from "../../utils/api/Allowance";
import { debounce } from "lodash";

const ExcelCashPaymentTabBody = ({ data }: { data: cashPaymentTabType }) => {
    const { form, setForm, handleChange } = useForm({
        address: "",
        depositType: "",
        gubi: 0,
        hangJungDong: "",
        name: "",
        note: "",
        residentRegistrationNumber: "",
        serialNumber: "",
        sibi: 0,
        id: 0,
        veteransNumber: "",
    });

    const {
        address,
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

    useEffect(() => {
        setForm(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { id, ...rest } = form;
    const { mutate } = useEditExcelCash({ id: data.id, excelLine: rest });

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

export default ExcelCashPaymentTabBody;
