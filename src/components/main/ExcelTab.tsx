import styled from "styled-components";
import { ExcelTabItemInfo } from "../../constants/main";
import { useExcelTabTypeState } from "../../store/questionState";
import { excelTabTypes } from "../../utils/functions/Translation";

const ExcelTab = () => {
    const { excelTab, setExcelTab } = useExcelTabTypeState();
    return (
        <Container>
            {ExcelTabItemInfo.map((item, idx) => (
                <Button
                    $is_click={excelTab === excelTabTypes[item]}
                    onClick={() => setExcelTab(excelTabTypes[item])}
                    key={idx}
                >
                    {item}
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
    gap: 3vw;
`;

const Button = styled.button<{ $is_click: boolean }>`
    padding-top: ${({ $is_click }) => $is_click && "2px"};
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
