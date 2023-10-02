import styled from "styled-components";
import { TabItemType, TabItemInfo } from "../../constants/main";

interface TabProps {
  clickItemInfo: TabItemType;
  setClickItemInfo: React.Dispatch<React.SetStateAction<TabItemType>>;
}

const Tab = ({ clickItemInfo, setClickItemInfo }: TabProps) => {
  return (
    <Container>
      {TabItemInfo.map((item, idx) => (
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
  display: flex;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  gap: 48px;
`;

const Button = styled.button<{ $is_click: boolean }>`
  height: inherit;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ $is_click, theme }) =>
    $is_click ? theme.colors.primary : theme.colors.gray900};
  border-bottom: ${({ $is_click, theme }) =>
    $is_click ? `2px solid ${theme.colors.primary}` : "none"};
`;

export default Tab;
