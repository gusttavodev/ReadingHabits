import React from "react";
import { Text, View } from "react-native";

import Button from "../Button";
import useTimer from "../../hooks/useTimer.js";
import { formatTime } from "../../utils";
import styles from "./styles.js";

const StopWatch = (props) => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  function onStop() {
    handlePause()
    props.onStop(timer)
  };
 
  function onStart() {
    handleStart()
    props.onStart(timer)
  };

  function onResume() {
    handleResume()
    props.onResume(timer)
  };

  function onReset() {
    handleReset()
    props.onReset(0)
  };
  
  return (
    <View>
      <Text style={styles.numbers}>{formatTime(timer)}</Text>
      <View  style={styles.container}>
        {!isActive && !isPaused ? (
          <Button           
            text="START"
            textColor="#F7F8F7"
            backgroundColor="#b5a7ff"
            onPress={(data) => onStart()}
          />
        ) : isPaused ? (
          <Button
            text="PAUSE"
            textColor="#F7F8F7"
          backgroundColor="#b5a7ff"
            onPress={(data) => onStop()}
          />
        ) : (
          <Button
            text="RESUME"
            textColor="#F7F8F7"
            backgroundColor="#b5a7ff"
            onPress={(data) => onResume()}
          />
        )}

        <Button
          text="RESET"
          textColor="#F7F8F7"
          backgroundColor="#b5a7ff"
          onPress={(data) => onReset()}
        />
      </View>
    </View>
  );
};

export default StopWatch;
