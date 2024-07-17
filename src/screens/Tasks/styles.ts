import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const StyledView = styled.View`
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 32px 20px;
    flex-direction: row;
    justify-content: space-between;
    min-height: 150px;
    margin-bottom: 38px;
`

export const StyledTitle = styled.Text`
    color: ${theme.colors.background};
    font-size: 24px;
    font-weight: 700;
`

export const StyledSubtitle = styled.Text`
    color: ${theme.colors.background};
    font-size: 15px;
`