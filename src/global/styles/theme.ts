import styled from "styled-components/native";

export const theme = { 
    colors:{
        primary: "#1DB863",
        gray: "#666666",
        gray2: "#B2B2B2",
        text:"#333",
        background:"#f5f5f5",
        title:"#333",
    },
}

export const Container = styled.View<{bgColor: string}>`
    flex: 1;
    background-color: ${props => props.bgColor};
    align-items: center;
`;