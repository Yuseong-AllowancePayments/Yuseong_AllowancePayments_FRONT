import styled from "styled-components";
import ExcelHeader from "./ExcelHeader";
import ExcelBody from "./ExcelMainBody";
import NoData from "./NoData";
import { useGetExcel } from "../../utils/api/Allowance";
import {
    useExcelTabTypeState,
    useExcelTypeState,
} from "../../store/questionState";
import { useEffect } from "react";

const Excel = () => {
    const { excelType } = useExcelTypeState();
    const { excelTab } = useExcelTabTypeState();
    const { data, refetch } = useGetExcel(excelType);

    useEffect(() => {
        refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [excelType]);

    return (
        <Container>
            <ExcelHeader refetch={refetch}/>
            {data && !data[excelTab]?.length ? (
                <NoData />
            ) : (
                <ExcelBody data={data!} refetch={refetch} />
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export default Excel;
