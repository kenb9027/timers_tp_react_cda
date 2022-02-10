import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
// Import our actions
import { toggleTimer, resetTimer , deleteTimer } from "../actions";

import { formatTime } from "../utils";

export default function TimerView(props) {
    // Extract these specific props to use in the component
    const { index, timer } = props;
    const dispatch = useDispatch();

    return (
        <View style={styles.timerView}>
            <Text style={styles.name}>{timer.name}</Text>
            <Text style={styles.time}>{formatTime(timer.time)}</Text>
            <View style={styles.spacer}></View>
            <Button
                title={timer.isRunning ? "Stop" : "Start"}
                color={"green"}
                onPress={() => {
                    console.log("Toggle timer " + timer.name);
                    dispatch(toggleTimer(index));
                }}
            />
            <View style={styles.spacer}></View>

            <Button
                title={"Reset"}
                color={"blue"}
                onPress={() => {
                    console.log("Reset timer " + timer.name);
                    dispatch(resetTimer(index));
                }}
            />

            <View style={styles.spacer}></View>

            <Button
                title={"Supprimer"}
                color={"red"}
                onPress={() => {
                    console.log("Delete timer " + timer.name);
                    dispatch(deleteTimer(index));
                }}
            />
            <View style={styles.spacer}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    timerView: {
        backgroundColor: "#eee",
        borderRadius: 5,
        padding: 6,
        margin: 5,
    },
    name: {
        fontWeight: "bold",
        color: "green",
        textAlign: "center",
        margin: 3,
    },
    time: {
        fontWeight: "bold",
        textAlign: "center",
        margin: 3,
    },
    spacer: {
        margin: 3,
    },
});
