import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// We need to import our action to add a new timer
import { addTimer } from "../actions";

export default function NewTimer() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New Timer Name"
                value={name}
                onChangeText={setName}
            />
            <Button
                title="Save"
                color={'purple'}
                onPress={() => {
                    console.log("Pressing on : Add a timer")
                    dispatch(addTimer(name));
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: "purple",
        padding: 4,
        marginBottom: 10,
        borderRadius: 5,
        width: 250,
        backgroundColor: "#fff",
    },
});

// export default NewTimer;
