import styled from "styled-components";
import ExcelTab from "./ExcelTab";
import { ExcelTabItemType } from "../../constants/main";

interface ExcelHeaderProps {
  clickItemInfo: ExcelTabItemType;
  setClickItemInfo: React.Dispatch<React.SetStateAction<ExcelTabItemType>>;
}

const ExcelHeader = ({ clickItemInfo, setClickItemInfo }: ExcelHeaderProps) => {
  return (
    <Container>
      <ExcelTab
        clickItemInfo={clickItemInfo}
        setClickItemInfo={setClickItemInfo}
      />
      <ButtonBox>
        <ExcelUploadButton>엑셀파일 업로드</ExcelUploadButton>
        <ExcelOutputButton>엑셀파일 출력</ExcelOutputButton>
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
  width: 9vw;
  min-width: 114px;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 21px;
  font-size: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray700};
`;

const ExcelOutputButton = styled.button`
  width: 9vw;
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 21px;
  font-size: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.WHITE};
`;

export default ExcelHeader;
