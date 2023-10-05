import styled from "styled-components";
import ExcelHeader from "./ExcelHeader";
import { useState } from "react";
import {
  ExcelTabItemInfo,
  ExcelTabItemType,
  Values,
} from "../../constants/main";
import ExcelBody from "./ExcelBody";
import NoData from "./NoData";

const Excel = () => {
  const [clickItemInfo, setClickItemInfo] = useState<ExcelTabItemType>(
    ExcelTabItemInfo[0]
  );

  return (
    <Container>
      <ExcelHeader
        clickItemInfo={clickItemInfo}
        setClickItemInfo={setClickItemInfo}
      />
      {Values.length === 0 ? <NoData /> : <ExcelBody />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Excel;
