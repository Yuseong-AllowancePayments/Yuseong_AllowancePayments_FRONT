import styled from "styled-components";
import { pinType } from "../../models/response";
import { DeleteImg } from "../../assets";
import { useDeletePIN } from "../../utils/api/Auth";

interface propsType {
    data: pinType;
    refetch: () => void;
}

const Verification = ({ data, refetch }: propsType) => {
    const { mutate } = useDeletePIN(data.code, refetch);
    return (
        <Container>
            <IssueBtn>
                <button
                    onClick={() => {
                        mutate();
                    }}
                >
                    <img
                        style={{ marginBottom: "2px" }}
                        src={DeleteImg}
                        alt=""
                    />
                    삭제
                </button>
            </IssueBtn>
            <PlaceText>{data.centerName}</PlaceText>
            <CodeText>{data.code}</CodeText>
        </Container>
    );
};

const Container = styled.div`
    width: 390px;
    height: 200px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;
    padding: 40px 0 0 50px;
`;

const IssueBtn = styled.div`
    position: relative;
    > button {
        position: absolute;
        right: 35px;
        top: -5px;
        width: 80px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.red};
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        font-size: 14px;
        gap: 5px;
        font-size: 16px;
        cursor: pointer;
    }
`;

const PlaceText = styled.div`
    margin-top: 10px;
    font-size: 28px;
    font-weight: 700;
`;

const CodeText = styled.div`
    margin-top: 30px;
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray700};
`;

export default Verification;
