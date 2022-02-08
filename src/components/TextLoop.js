import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export const TextLoop = ({text, style}) => {
  const [textOpacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.Text style={[style, {opacity: textOpacity}]}>
      {text}
    </Animated.Text>
  );
};
