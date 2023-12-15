import styled from "styled-components";
import ExcelTab from "./ExcelTab";
import { ExcelTabItemType } from "../../constants/main";
import { useRef } from "react";

interface ExcelHeaderProps {
  clickItemInfo: ExcelTabItemType;
  setClickItemInfo: React.Dispatch<React.SetStateAction<ExcelTabItemType>>;
}

const ExcelHeader = ({ clickItemInfo, setClickItemInfo }: ExcelHeaderProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <ExcelTab
        clickItemInfo={clickItemInfo}
        setClickItemInfo={setClickItemInfo}
      />
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
          onChange={() => ""}
        />
        <ExcelOutputButton>엑셀파일 다운로드</ExcelOutputButton>
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
