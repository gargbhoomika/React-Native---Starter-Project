import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Welcome = (props) => (
    <View>
      <Text>Hey there, {props.name} !</Text>
    </View>
);

export default Welcome;