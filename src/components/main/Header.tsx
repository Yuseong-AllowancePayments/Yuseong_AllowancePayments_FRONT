import styled from "styled-components";
import { HeaderLogo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigator = useNavigate();
    return (
        <Container>
            <img src={HeaderLogo} alt="로고 이미지" />
            <Right>
                <LogOutButton
                    onClick={() => {
                        localStorage.removeItem("access_token");
                        navigator("/");
                    }}
                >
                    로그아웃
                </LogOutButton>
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
    cursor: pointer;
`;

export default Header;
