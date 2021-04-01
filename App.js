import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [myLabel, setMyLabel] = useState('yoyoyoyoyoyo');
  const addTask = () => console.log(myLabel.value);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.titleSection}>Todo Today</Text>
        <View style={styles.tasksSection}>
          <Task taskLabel="bababa" />
          <Task taskLabel="bobaba" />
          <Task taskLabel="bibibi" />
        </View>
      </View>
    <TextInput
      value={myLabel}
      style={styles.textinput}
      onChangeText={(myLabel) => setMyLabel({ myLabel })}
    ></TextInput>
    <TouchableOpacity
      onPress={() => {
        addTask();
      }}
      >
      <View style={styles.myButton}>
        <Text>+</Text>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
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
  },
  textinput: {
    maxWidth: '80',
    backgroundColor: 'white',
    padding: '20px',
    margin: '20px',
    height: '20px'
  },
  myButton: {
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px'
  }
});