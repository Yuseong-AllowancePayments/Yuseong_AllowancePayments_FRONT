import styled from "styled-components";

const NoData = () => {
  return (
    <Container>
      <Text>
        <h3>업로드된 엑셀 파일이 없습니다.</h3>
        <p>엑셀 파일을 업로드 해주세요.</p>
      </Text>
      <UploadButton>엑셀 파일 업로드</UploadButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 64px;
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

const UploadButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  width: 137px;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
`;

export default NoData;
