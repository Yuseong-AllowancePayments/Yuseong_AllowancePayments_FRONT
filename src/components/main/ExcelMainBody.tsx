import styled from "styled-components";
import {
    CashPaymentTabHeader,
    NewComerHonorableAllowanceTabHeader,
    NewComerWarVeteranSpouseTabHeader,
    NewComerWarVeteranTabHeader,
    PaymentStoppedTabHeader,
    PaymentTargetTabHeader,
} from "../../constants/main";
import {
    useExcelTabTypeState,
    useExcelTypeState,
} from "../../store/questionState";
import { getExcelResponseDto } from "../../models/response";
import ExcelCashPaymentTabBody from "./ExcelCashPaymentTabBody";
import NewComerWarVeteranTabBody from "./NewComerWarVeteranTabBody";
import NewComerWarVeteranSpouseTabBody from "./NewComerWarVeteranSpouseTabBody";
import NewComerHonorableAllowanceTabBody from "./NewComerHonorableAllowanceTabBody";
import ExcelPaymentStoppedTabBody from "./ExcelPaymentStoppedTabBody";
import ExcelPaymentTargetTabBody from "./ExcelPaymentTargetTabBody";

const ExcelMainBody = ({
    data,
    refetch,
}: {
    data: getExcelResponseDto;
    refetch: () => void;
}) => {
    const { excelTab } = useExcelTabTypeState();
    const { excelType } = useExcelTypeState();

    const excelBodyComponents = () => {
        switch (excelTab) {
            case "newComerTab":
                switch (excelType) {
                    case "WAR_VETERAN":
                        return (
                            data &&
                            data[excelTab].map((item, idx) => (
                                <NewComerWarVeteranTabBody
                                    refetch={refetch}
                                    key={idx}
                                    data={item}
                                />
                            ))
                        );
                    case "HONORABLE_ALLOWANCE":
                        return (
                            data &&
                            data[excelTab].map((item, idx) => (
                                <NewComerHonorableAllowanceTabBody
                                    refetch={refetch}
                                    key={idx}
                                    data={item}
                                />
                            ))
                        );
                    case "WAR_VETERAN_SPOUSE":
                        return (
                            data &&
                            data[excelTab].map((item, idx) => (
                                <NewComerWarVeteranSpouseTabBody
                                    refetch={refetch}
                                    key={idx}
                                    data={item}
                                />
                            ))
                        );
                    default:
                        return (
                            data &&
                            data[excelTab].map((item, idx) => (
                                <NewComerWarVeteranTabBody
                                    refetch={refetch}
                                    key={idx}
                                    data={item}
                                />
                            ))
                        );
                }
            case "paymentStoppedTab":
                return (
                    data &&
                    data[excelTab].map((item, idx) => (
                        <ExcelPaymentStoppedTabBody
                            key={idx}
                            data={item}
                            refetch={refetch}
                        />
                    ))
                );
            case "paymentTargetTab":
                return (
                    data &&
                    data[excelTab].map((item, idx) => (
                        <ExcelPaymentTargetTabBody
                            key={idx}
                            data={item}
                            refetch={refetch}
                        />
                    ))
                );
            case "cashPaymentTab":
                return (
                    data &&
                    data[excelTab].map((item, idx) => (
                        <ExcelCashPaymentTabBody
                            key={idx}
                            data={item}
                            refetch={refetch}
                        />
                    ))
                );
        }
    };

    const excelHeaderContents = () => {
        switch (excelTab) {
            case "cashPaymentTab":
                return CashPaymentTabHeader;
            case "newComerTab":
                switch (excelType) {
                    case "WAR_VETERAN":
                        return NewComerWarVeteranTabHeader;
                    case "HONORABLE_ALLOWANCE":
                        return NewComerHonorableAllowanceTabHeader;
                    case "WAR_VETERAN_SPOUSE":
                        return NewComerWarVeteranSpouseTabHeader;
                    default:
                        return [];
                }
            case "paymentStoppedTab":
                return PaymentStoppedTabHeader;
            case "paymentTargetTab":
                return PaymentTargetTabHeader;
        }
    };

    return (
        <Background>
            <Container>
                <thead>
                    <tr>
                        {excelHeaderContents().map((value, idx) => (
                            <Header key={idx}>{value}</Header>
                        ))}
                    </tr>
                </thead>
                <tbody>{excelBodyComponents()}</tbody>
            </Container>
        </Background>
    );
};

const Background = styled.div`
    width: 100%;
    height: 45vh;
    position: absolute;
    top: 86px;
    overflow-x: auto;
`;

const Container = styled.table`
    width: 1900px;
    overflow: hidden;
    border-collapse: collapse;
    border-radius: 12px;
`;

const Header = styled.th`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.WHITE};
    height: 56px;
    border: 1px solid ${({ theme }) => theme.colors.WHITE};
    padding: 0 20px;
    text-align: start;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    white-space: pre-wrap;
`;

export default ExcelMainBody;
