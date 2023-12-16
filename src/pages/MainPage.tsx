import styled from "styled-components";
import Header from "../components/main/Header";
import Tab from "../components/main/Tab";
import { useState } from "react";
import { TabItemType, TabItemInfo } from "../constants/main";
import Section from "../components/main/Section";

const MainPage = () => {
    const [clickItemInfo, setClickItemInfo] = useState<TabItemType>(
        TabItemInfo[0]
    );

    return (
        <Container>
            <Header />
            <Tab
                clickItemInfo={clickItemInfo}
                setClickItemInfo={setClickItemInfo}
            />
            <Section clickItemInfo={clickItemInfo} />
        </Container>
    );
};

const Container = styled.div`
    padding: 30px 50px 0px 50px;
`;

export default MainPage;
