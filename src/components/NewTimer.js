import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// We need to import our action to add a new timer
import { addTimer } from "../actions";

export default function NewTimer() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <View style={styles.newTimer}>
            <Text style={styles.title}>Ajouter un Timer</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom du nouveau Timer..."
                value={name}
                onChangeText={setName}
            />
            <Button
                title="AJOUTER"
                color={"purple"}
                onPress={() => {
                    console.log("Add a timer");
                    dispatch(addTimer(name));
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    newTimer: {
        backgroundColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        margin: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 2,
        borderColor: "purple",
        padding: 4,
        marginBottom: 10,
        borderRadius: 5,
        width: 250,
        backgroundColor: "#fff",
    },
    title: {
        fontWeight: "bold",
        color: "purple",
        textAlign: "center",
        margin: 5,
    },
});

// export default NewTimer;
