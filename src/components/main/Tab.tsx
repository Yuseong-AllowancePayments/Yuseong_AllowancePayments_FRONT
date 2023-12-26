import styled from "styled-components";
import { TabItemType, TabItemInfo } from "../../constants/main";
import {
    useExcelTabTypeState,
    useExcelTypeState,
} from "../../store/questionState";
import { excelTypes } from "../../utils/functions/Translation";

interface TabProps {
    clickItemInfo: TabItemType;
    setClickItemInfo: React.Dispatch<React.SetStateAction<TabItemType>>;
}

const Tab = ({ clickItemInfo, setClickItemInfo }: TabProps) => {
    const { setExcelType } = useExcelTypeState();
    const { resetExcelTab } = useExcelTabTypeState();
    return (
        <Container>
            {TabItemInfo.map((item, idx) => (
                <Button
                    $isClick={clickItemInfo.tabItem === item.tabItem}
                    onClick={() => {
                        setClickItemInfo(item);
                        setExcelType(excelTypes[item.tabItem]);
                        resetExcelTab();
                    }}
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
    gap: 3vw;
`;

const Button = styled.button<{ $isClick: boolean }>`
    padding-top: ${({ $isClick }) => $isClick && "2px"};
    height: inherit;
    border: none;
    background: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: ${({ $isClick, theme }) =>
        $isClick ? theme.colors.primary : theme.colors.gray900};
    border-bottom: ${({ $isClick, theme }) =>
        $isClick ? `2px solid ${theme.colors.primary}` : "none"};
    cursor: pointer;
`;

export default Tab;
