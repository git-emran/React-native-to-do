// Task.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Task({text}) {
  return (
    <View style={styles.itemView}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
  },
  square: {
    width: 14,
    height: 14,
    backgroundColor: '#55bcf6',
    borderRadius: 50,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
