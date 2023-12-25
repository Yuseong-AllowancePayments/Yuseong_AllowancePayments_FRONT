import styled from "styled-components";
import { useAddPIN, useGetPIN } from "../../utils/api/Auth";
import Verification from "./Verification";
import { useState } from "react";

const AddCenter = () => {
    const [centerName, setCenterName] = useState<string>("");
    const { data, refetch } = useGetPIN();
    const { mutate } = useAddPIN(centerName, refetch);

    return (
        <Container>
            <InputWrapper>
                <AddInput
                    type="text"
                    value={centerName}
                    onChange={(e) => setCenterName(e.target.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter" && !!centerName) {
                            mutate();
                        }
                    }}
                />
                <AddButton
                    onClick={() => {
                        mutate();
                    }}
                >
                    동행정 센터 추가
                </AddButton>
            </InputWrapper>
            <VerificationWrapper>
                {data?.codes.map((item, i) => (
                    <Verification data={item} key={i} refetch={refetch} />
                ))}
            </VerificationWrapper>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 15px;
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const AddInput = styled.input`
    width: 300px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray200};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: 0 15px;
    font-size: 18px;
`;

const AddButton = styled.button`
    height: 40px;
    padding: 0 15px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 21px;
    font-size: 16px;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
`;

const VerificationWrapper = styled.div`
    margin: 30px 0 40px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

export default AddCenter;
