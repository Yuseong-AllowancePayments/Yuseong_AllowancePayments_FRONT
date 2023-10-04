import styled from "styled-components";
import ExcelHeader from "./ExcelHeader";
import { useState } from "react";
import { ExcelTabItemInfo, ExcelTabItemType } from "../../constants/main";
import ExcelBody from "./ExcelBody";

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
      <ExcelBody />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Excel;
