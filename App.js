import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

// import throttle from 'lodash/throttle'

import { update } from "./src/actions";

import reducers from "./src/reducers";

// import { loadState , saveState } from "./src/utils";

import NewTimer from "./src/components/NewTimer";
import ListTimers from "./src/components/ListTimers";

const store = createStore(reducers);

// PERSISTANCE WITH LOCAL STORAGE

// const persistedState = loadState();
// const store = createStore(reducers, persistedState);

// store.subscribe(() => {
//     saveState(store.getState())
// } )

// store.subscribe(
//     throttle(() => {
//         saveState(store.getState());
//     }, 1000)
// );

let lastUpdateTime = Date.now();
setInterval(() => {
    const now = Date.now();
    const deltaTime = now - lastUpdateTime;
    lastUpdateTime = now;
    store.dispatch(update(deltaTime));
}, 50);

export default function App() {
    return (
        <Provider store={store}>
            <Text style={styles.title}>TP TIMERS</Text>
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
        color: "black",
        textAlign: "center",
        marginTop: 30,
    },
});

/**
 * TODO
 *
 * - add delete timer btn
 */
