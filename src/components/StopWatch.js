import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import useTimer from '../hooks/useTimer.js';
import { formatTime } from '../utils';

const StopWatch = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)
 
  return (
    <View>
      <Text>React Stopwatch {formatTime(timer)}</Text>  
      {
        !isActive && !isPaused
        ?
          <TouchableOpacity onPress={() => handleStart()}><Text>Start</Text></TouchableOpacity>
        : (isPaused
            ?
              <TouchableOpacity onPress={() => handlePause()}>
                <Text>Pause</Text>
              </TouchableOpacity>
            :        
              <TouchableOpacity onPress={() => handleResume()}>
                <Text>Resume</Text>
              </TouchableOpacity>  
          )
       }     
        
      <TouchableOpacity onPress={() => handleReset()}>
        <Text>Reset</Text>
      </TouchableOpacity>     
    </View>
  );
}
 

export default StopWatch
