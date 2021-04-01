import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleSection}>Todo Today</Text>
        <View style={styles.tasksSection}>
          <Task taskLabel="bababa" />
          <Task taskLabel="bobaba" />
          <Task taskLabel="bibibi" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  titleSection: {
    fontWeight: 'bold',
    fontSize: '24pt',
    color: 'white',
    marginTop: '20px',
    marginLeft: '20px'
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  }
});