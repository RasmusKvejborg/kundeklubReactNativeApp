import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: "blue",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
  },
});

export default function Kvitteringer() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kvitteringer</Text>
      <Text style={styles.title}>Her kan du se dine kvitteringer</Text>
      <Text style={styles.points}>Du har ingen kvitteringer endnu</Text>
    </View>
  );
}
