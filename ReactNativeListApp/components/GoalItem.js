import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({id, title, onDelete}) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    margin: 1,
  },
});
export default GoalItem;