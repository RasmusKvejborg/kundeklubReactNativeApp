import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://us-central1-crudapifirebase.cloudfunctions.net/app/api/read/44992834"
      );
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Amero Kundeklub</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <React.Fragment>
          <Text style={styles.title}>Velkommen {userData?.name}</Text>
          <Text style={styles.points}>
            Du har {userData?.balance} point på din konto
          </Text>
        </React.Fragment>
      )}
    </View>
  );
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
