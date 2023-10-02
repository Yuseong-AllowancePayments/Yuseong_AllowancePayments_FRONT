import styled from "styled-components";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="로고 이미지" />
      <Right>
        <p>홍길동 님</p>
        <LogOutButton>로그아웃</LogOutButton>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 36px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  > p {
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
  }
`;

const LogOutButton = styled.button`
  width: 88px;
  height: 40px;
  border-radius: 8px;
  border: none;
  line-height: 21px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray700};
  background: ${({ theme }) => theme.colors.gray100};
`;

export default Header;
