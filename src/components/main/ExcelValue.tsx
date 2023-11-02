import { useState } from "react";
import styled from "styled-components";

const ExcelValue = ({ value }: { value: string }) => {
  const [input, setInput] = useState<string>(value);

  return (
    <Wrapper>
      <input
        style={{ width: `${value.length * 14}px` }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.td`
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  height: 56px;
  background: ${({ theme }) => theme.colors.WHITE};

  > input {
    height: 100%;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

export default ExcelValue;
