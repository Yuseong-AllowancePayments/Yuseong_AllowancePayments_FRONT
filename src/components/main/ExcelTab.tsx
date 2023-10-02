import styled from "styled-components";
import { ExcelTabItemInfo, ExcelTabItemType } from "../../constants/main";

interface ExcelTabProps {
  clickItemInfo: ExcelTabItemType;
  setClickItemInfo: React.Dispatch<React.SetStateAction<ExcelTabItemType>>;
}

const ExcelTab = ({ clickItemInfo, setClickItemInfo }: ExcelTabProps) => {
  return (
    <Container>
      {ExcelTabItemInfo.map((item, idx) => (
        <Button
          $is_click={clickItemInfo.tabItem === item.tabItem}
          onClick={() => setClickItemInfo(item)}
          key={idx}
        >
          {item.tabItem}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  display: flex;
  gap: 30px;
`;

const Button = styled.button<{ $is_click: boolean }>`
  height: inherit;
  border: none;
  background: none;
  font-size: 20px;
  line-height: 28px;
  color: ${({ $is_click, theme }) =>
    $is_click ? theme.colors.primary : theme.colors.gray900};
  border-bottom: ${({ $is_click, theme }) =>
    $is_click ? `2px solid ${theme.colors.primary}` : "none"};
`;

export default ExcelTab;
