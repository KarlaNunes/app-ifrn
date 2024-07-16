import styled from "styled-components/native";

export const TextInput = styled.TextInput<{border?: string} >`
    background-color: #f5f5f5;
    width: 100%;
    max-width: 313px;
    height: 50px;
    margin: 15px auto;
    padding: 13px;
    border-radius: 5px;
    border: ${props => props.border};
`;

