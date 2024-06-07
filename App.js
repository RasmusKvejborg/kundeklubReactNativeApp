import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import MainContainer from "./navigation/MainContainer";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function App() {
  return <MainContainer></MainContainer>;
}
const styles = StyleSheet.create({
  header: {
    fontSize: 28, // Adjust the font size as needed for large text
    color: "blue", // Set the text color to blue
    marginBottom: 20, // Optional: Add spacing between the header and the title
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24, // Adjust the font size as needed
    marginBottom: 10, // Optional: Add spacing between the title and the points
  },
  points: {
    fontSize: 18, // Adjust the font size as needed
  },
});
