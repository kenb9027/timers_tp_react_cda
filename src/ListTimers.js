import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectTimer } from "./actions";

import TimerView from "./TimerView";

export default function ListTimers() {
    const timers = useSelector((state) => state.timers);

    return (
        <View>
            {timers.map((timer, i) => {
                // Here the render method maps `this.props.timers` to:
                return (
                    <TimerView 
                        key={`timer-${i}`} 
                        timer={timer} 
                        index={i} 
                    />
                );
            })}
        </View>
    );
}
