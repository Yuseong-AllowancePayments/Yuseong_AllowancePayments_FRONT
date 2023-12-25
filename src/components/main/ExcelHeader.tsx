import styled from "styled-components";
import ExcelTab from "./ExcelTab";
import { useRef, useState } from "react";
import { useExportExcel, useSaveExcel } from "../../utils/api/Allowance";
import { useExcelTypeState } from "../../store/questionState";

interface propsType {
    refetch: () => void;
}

const ExcelHeader = ({ refetch }: propsType) => {
    const [file, setFile] = useState<File | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    const { excelType } = useExcelTypeState();

    const { mutate } = useSaveExcel(excelType, file!, refetch);
    const { mutate: downloadExcel } = useExportExcel(excelType);

    return (
        <Container>
            <ExcelTab />
            <ButtonBox>
                <ExcelUploadButton
                    onClick={() => {
                        ref.current!.click();
                    }}
                >
                    엑셀파일 업로드
                </ExcelUploadButton>
                <input
                    style={{ display: "none" }}
                    type="file"
                    ref={ref}
                    accept=".xlsx"
                    onChange={(e) => {
                        setFile(e.target.files ? e.target.files[0] : null);
                        setTimeout(() => mutate());
                    }}
                />
                <ExcelOutputButton onClick={() => downloadExcel()}>
                    엑셀파일 다운로드
                </ExcelOutputButton>
            </ButtonBox>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 36px;
`;

const ButtonBox = styled.div`
    display: flex;
    gap: 16px;
`;

const ExcelUploadButton = styled.button`
    width: 133px;
    height: 40px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 21px;
    font-size: 16px;
    border: none;
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray700};
    cursor: pointer;
`;

const ExcelOutputButton = styled.button`
    width: 133px;
    height: 40px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 21px;
    font-size: 16px;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
`;

export default ExcelHeader;
