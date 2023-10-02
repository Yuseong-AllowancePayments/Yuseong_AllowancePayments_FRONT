import styled from "styled-components";
import { tabItem } from "../../constants/main";

interface TabProps {
  clickItem: string;
  setClickItem: React.Dispatch<React.SetStateAction<string>>;
}

const Tab = ({ clickItem, setClickItem }: TabProps) => {
  return (
    <Container>
      {tabItem.map((item, idx) => (
        <Button
          $is_click={clickItem === item}
          onClick={() => setClickItem(item)}
          key={idx}
        >
          {item}
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
  color: ${({ $is_click, theme }) =>
    $is_click ? theme.colors.primary : theme.colors.gray900};
  border-bottom: ${({ $is_click, theme }) =>
    $is_click ? `2px solid ${theme.colors.primary}` : "none"};
`;

export default Tab;
