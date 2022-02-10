import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./src/reducers";

import NewTimer from "./src/components/NewTimer";
import ListTimers from "./src/ListTimers";

const store = createStore(reducers);

export default function App() {
    return (
        <Provider store={store}>
            <Text style={styles.title} >TP TIMERS</Text>
            <ScrollView style={styles.container}>
                <NewTimer />
                <ListTimers />
            </ScrollView>
            <StatusBar style="auto" />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 10,
    },
    title: {
        fontWeight: "bold",
        color: 'black',
        textAlign: 'center',
        marginTop: 30,
    }
});
