import React from "react";
import { Text, View } from "react-native";

import Button from "../Button";
import useTimer from "../../hooks/useTimer.js";
import { formatTime } from "../../utils";
import styles from "./styles.js";

const StopWatch = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <View>
      <Text>React Stopwatch {formatTime(timer)}</Text>
      <View  style={styles.container}>
        {!isActive && !isPaused ? (
          <Button           
            text="START"
            textColor="#F7F8F7"
            backgroundColor="#737575"
            onPress={(data) => handleStart()}
          />
        ) : isPaused ? (
          <Button
            text="PAUSE"
            textColor="#F7F8F7"
            backgroundColor="#737575"
            onPress={(data) => handlePause()}
          />
        ) : (
          <Button
            text="RESUME"
            textColor="#F7F8F7"
            backgroundColor="#737575"
            onPress={(data) => handleResume()}
          />
        )}

        <Button
          text="RESET"
          textColor="#F7F8F7"
          backgroundColor="#737575"
          onPress={(data) => handleReset()}
        />
      </View>
    </View>
  );
};

export default StopWatch;
