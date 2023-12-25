import styled from "styled-components";
import { TabItemType } from "../../constants/main";
import Excel from "./Excel";
import AddCenter from "./AddCenter";

interface SectionProps {
    clickItemInfo: TabItemType;
}

const Section = ({ clickItemInfo }: SectionProps) => {
    return (
        <Container>
            <Title>{clickItemInfo.title}</Title>
            <p>
                {clickItemInfo.title !== "동행정 PIN번호 관리"
                    ? "*셀을 클릭하여 데이터를 바로 수정할 수 있습니다.\n*빈칸이 생기면 다른 탭으로 이동했다 다시 이동하시면 됩니다."
                    : "*동행정 센터를 추가할 수 있습니다."}
            </p>
            {clickItemInfo.title !== "동행정 PIN번호 관리" ? (
                <Excel />
            ) : (
                <AddCenter />
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin-top: 36px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    > p {
        color: ${({ theme }) => theme.colors.red};
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        white-space: pre-wrap;
    }
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
`;

export default Section;
