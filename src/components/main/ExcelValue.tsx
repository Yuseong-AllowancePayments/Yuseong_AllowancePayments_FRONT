import styled from "styled-components";

const ExcelValue = ({ value }: { value: string[] }) => {
  return (
    <tr>
      {value.map((value, idx) => (
        <Value key={idx}>{value}</Value>
      ))}
    </tr>
  );
};

const Value = styled.td`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  height: 56px;
  background: ${({ theme }) => theme.colors.WHITE};
`;

export default ExcelValue;
