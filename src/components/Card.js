import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { COLORS } from "../common";
const Card = (props) => {
  return (
    <View style={[styles.ContainerStyle, props.cardStyle]}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerStyle: {
    borderRadius: 22,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 1 },
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
export { Card };
