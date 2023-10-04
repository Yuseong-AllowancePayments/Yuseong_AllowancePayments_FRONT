import styled from "styled-components";
import { TabItemType } from "../../constants/main";
import Excel from "./Excel";

interface SectionProps {
  clickItemInfo: TabItemType;
}

const Section = ({ clickItemInfo }: SectionProps) => {
  return (
    <Container>
      <Title>{clickItemInfo.title}</Title>
      <p>*셀을 클릭하여 데이터를 바로 수정할 수 있습니다.</p>
      <Excel />
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
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
`;

export default Section;
