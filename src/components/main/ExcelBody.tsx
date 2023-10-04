import styled from "styled-components";
import ExcelValue from "./ExcelValue";
import { Title, Values } from "../../constants/main";

const ExcelBody = () => {
  return (
    <Background>
      <Container>
        <thead>
          <tr>
            {Title.map((value, idx) => (
              <Header key={idx}>{value}</Header>
            ))}
          </tr>
        </thead>
        <tbody>
          {Values.map((value, idx) => (
            <tr key={idx}>
              {value.map((value, idx) => (
                <ExcelValue key={idx} value={value} />
              ))}
            </tr>
          ))}
        </tbody>
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
`;

export default ExcelBody;
