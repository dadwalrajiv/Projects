import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodoItems({ submitHandler }) {
  const [text, setText] = useState("");
  const chnageHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New item...."
        onChangeText={chnageHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add ToDo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
