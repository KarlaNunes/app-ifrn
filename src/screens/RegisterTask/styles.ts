import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Title = styled.Text`
    font-size: 24px;
    color: #1DB863;
    font-weight: 700;
    margin-top: 68px;
    margin-bottom: 31px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
    background-color: #1DB863;
    flex: 1;
`