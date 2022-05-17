import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
<<<<<<< HEAD
=======
import colors from "../config/colors";
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e

const { width, height } = Dimensions.get("screen");

const Input = ({ icon, size, placeholder, onChangeText }) => {
  const [inFocus, setInFocus] = useState(false);

  return (
    <View
      style={[
        styles.container,
        inFocus
          ? {
              shadowColor: "#ccc",
              shadowOffset: { width: 8, height: 8 },
              shadowOpacity: 1.35,
              elevation: 8,
            }
          : null,
      ]}
    >
      <View style={styles.icon}>
        <Ionicons
          name={icon}
          style={{ color: "#555" }}
          size={size ? size : 22}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          style={{ fontSize: 16 }}
          placeholder={placeholder}
          placeholderTextColor="#555"
<<<<<<< HEAD
          onChangeText={onChangeText}
=======
          onChangeText={()=>onChangeText}
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    backgroundColor: "#ddd",
=======
    backgroundColor: colors.lightGrey,
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    width: width / 1.2,
    borderRadius: 15,
    marginVertical: 10,
  },
  icon: {
    flex: 0.1,
    padding: 15,
  },
  input: {
    flex: 0.8,
    padding: 15,
    marginLeft: 10,
  },
});

<<<<<<< HEAD
export default Input;
=======
export default Input;
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
