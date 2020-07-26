import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/todoItems";
import AddTodoItems from "./components/addTodoItems";

export default function App() {
  const [todos, settodos] = useState([
    { text: "Buy Cofee", key: "1" },
    { text: "Go to Market", key: "2" },
    { text: "Do Excercise", key: "3" },
  ]);

  const pressHandler = (key) => {
    settodos((prevToDo) => {
      return prevToDo.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      settodos((prevToDo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevToDo];
      });
    } else {
      Alert.alert("OOps!", "To Dos must be Over 3 Chars Long.", [
        { text: "Okay", onPress: () => console.log("Button Closed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodoItems submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    margin: 20,
  },
});
