import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import {theme} from "./src/global/styles/theme";
import RegisterTask from './src/screens/RegisterTask';
import Tasks from './src/screens/Tasks';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <Home/> */}
        {/* <RegisterTask /> */}
        <Tasks />
    </ThemeProvider>
  );
}
