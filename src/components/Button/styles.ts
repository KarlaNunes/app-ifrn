import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{bgColor: string}>`
    background-color: ${props => props.bgColor};
    max-width: 312px;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 31px;
`

export const ButtonContent = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
`