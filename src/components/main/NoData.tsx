import styled from "styled-components";

const NoData = () => {
  return (
    <Container>
      <Text>
        <h3>업로드된 엑셀 파일이 없습니다.</h3>
        <p>엑셀 파일을 업로드 해주세요.</p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  > h3 {
    color: ${({ theme }) => theme.colors.gray900};
    font-weight: 600;
    line-height: 34px;
    font-size: 24px;
  }

  > p {
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 26px;
    font-size: 16px;
  }
`;

export default NoData;
