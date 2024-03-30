// App.tsx
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './Components/Task';
import {TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Write your task here"
        />
        <TouchableOpacity style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  taskWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  items: {
    borderRadius: 12,
    flex: 1,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  addWrapper: {
    backgroundColor: '#55bcf6',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 24,
    color: 'white',
  },
});
