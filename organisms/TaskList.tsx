import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Task from '../molecules/Task'

const exampleTasks = [
    {
       primaryAction: "Finish up the ui plans",
       task: "Work on Denouement",
       duration: "25m"
    },
    {
       primaryAction: "Do problem 65; 2nd derivative test",
       task: "Finish up AP Calc problems",
       duration: "5m"
    },
    {
       primaryAction: "Open up The Myth of Sisyphus",
       task: "Contemplate absurdism",
       duration: "5m"
    }
]

const TaskList = () => {
    return (
    <View style={styles.container}>
        {exampleTasks.map((task, index) => (
            <Task key={index} {...task} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "66%",
    maxWidth: 500,
  },
});

export default TaskList;
