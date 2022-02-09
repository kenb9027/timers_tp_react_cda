import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./src/reducers";

import NewTimer from "./src/components/NewTimer"
import ListTimers from "./src/ListTimers";

const store = createStore(reducers);

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <NewTimer />
                <ListTimers />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

/**
 * TODO : apply styles (chapter 7)
 */