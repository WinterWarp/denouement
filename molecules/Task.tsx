import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface TaskProps {
  primaryAction: string;
  task: string;
  duration: string;
}

const Task: React.FC<TaskProps> = ({ primaryAction, task, duration }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.topRow}>
        <Button title="D"/>
        <Text style={styles.primaryAction}>{primaryAction}</Text>
      </View>
      <View style={styles.bottomRow}>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}><Button title="D" />
        <Text style={styles.task}>{task}</Text></View>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  taskContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#d8dee9",
    borderRadius: 5,
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  topRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bottomRow: {
    width: "100%",
    gap: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  primaryAction: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 2,
  },
  task: {
    fontSize: 14,
    color: "#4C566A",
    marginBottom: 2,
  },
  duration: {
    fontSize: 12,
    color: "#4C566A",
  },
});

export default Task;
