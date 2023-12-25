import styled from "styled-components";
import { CloseEye, Logo, OpenEye } from "../../assets";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useUserLogin } from "../../utils/api/Auth";

const Login = () => {
    const [isPassword, setIsPassword] = useState(true);
    const { form: signForm, handleChange: signFormChange } = useForm({
        accountId: "",
        password: "",
    });
    const { accountId, password } = signForm;

    const { mutate } = useUserLogin(signForm);

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <LogoImg src={Logo} alt="" />
                    <LogoText>유성구 보훈수당 관리 서비스</LogoText>
                </LogoWrapper>
                <HeaderText>담당자 로그인</HeaderText>
                <InputWrapper>
                    <LabelText>아이디</LabelText>
                    <Input
                        name="accountId"
                        value={accountId}
                        onChange={signFormChange}
                        placeholder="아이디를 입력해주세요."
                    />
                </InputWrapper>
                <InputWrapper>
                    <LabelText>아이디</LabelText>
                    <Input
                        type={isPassword ? "password" : "text"}
                        name="password"
                        value={password}
                        onChange={signFormChange}
                        onKeyPress={(
                            e: React.KeyboardEvent<HTMLInputElement>
                        ) => {
                            if (e.key === "Enter") {
                                mutate();
                            }
                        }}
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <EyeImg
                        src={isPassword ? CloseEye : OpenEye}
                        alt=""
                        onClick={() => setIsPassword((password) => !password)}
                    />
                </InputWrapper>
                <Button
                    onClick={() => {
                        mutate();
                    }}
                >
                    로그인
                </Button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 448px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const LogoImg = styled.img`
    width: 46px;
    height: 46px;
`;

const LogoText = styled.div`
    font-size: 28px;
    font-weight: 500;
`;

const HeaderText = styled.div`
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    margin: 96px 0 12px 0;
`;

const InputWrapper = styled.label`
    position: relative;
    width: 100%;
    margin-top: 28px;
`;

const LabelText = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 100%;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 8px;
    font-size: 16px;
    padding: 0 50px 0 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.gray500};
    }
`;

const EyeImg = styled.img`
    position: absolute;
    top: 39px;
    right: 15px;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: none;
    line-height: 21px;
    font-size: 16px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    margin-top: 40px;
`;

export default Login;
