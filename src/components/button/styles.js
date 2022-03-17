import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => props.variant === 'alternative' ? 'var(--color-secondary-100)' : 'var(--color-primary-50)'};
    color: ${(props) => props.variant === 'alternative' ? 'var(--color-primary-50)' : 'var(--color-text-box)'};
    border-radius:10px;
    border: 0;
    font-size: 22px;
    padding: 10px 15px;
    min-width: 100px;
    font-weight: 700;
`;