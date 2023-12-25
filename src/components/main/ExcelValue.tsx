import { useRef } from "react";
import styled from "styled-components";

interface propsType {
    value: string | number;
    name: string;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    error?: boolean;
    disabled?: boolean;
}

const ExcelValue = ({
    value,
    name,
    error = false,
    handleChange,
    disabled = false,
}: propsType) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <Wrapper
            disabled={disabled}
            error={error}
            onClick={() => {
                inputRef.current?.focus();
            }}
        >
            <input
                style={{
                    width: value
                        ? `${value.toString().length * 16 + 40}px`
                        : "150px",
                }}
                ref={inputRef}
                type={
                    typeof value === "string" || (value as any) === ""
                        ? "text"
                        : "number"
                }
                value={value}
                name={name}
                disabled={disabled}
                onChange={handleChange}
            />
        </Wrapper>
    );
};

const Wrapper = styled.td<{ disabled: boolean; error: boolean }>`
    border: 1px solid
        ${({ theme, error }) =>
            error ? theme.colors.red : theme.colors.gray200};
    height: 56px;
    background: ${({ theme, disabled }) =>
        disabled ? theme.colors.gray100 : theme.colors.WHITE};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
    > input {
        max-width: 500px;
        height: 100%;
        border: none;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        min-width: 150px;
        padding: 0 20px;
        color: ${({ theme }) => theme.colors.gray900};
        &:disabled {
            background: ${({ theme, disabled }) =>
                disabled ? theme.colors.gray100 : theme.colors.WHITE};
        }
    }
`;

export default ExcelValue;
