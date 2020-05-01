import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput'; 
const App = () => {
  const [tutoralGoals, setTutoralGoals] = useState([]);
  const [mode, setMode] = useState(false);
  
  const buttonHandler = goalTitle => {
    setTutoralGoals(curGoals => [
      ...curGoals, 
      { 
        id: Math.random().toString(),
        value: goalTitle
      }
    ]);
    setMode(false);
  };

  const removeGoalHandler = goalID => {
    setTutoralGoals( tutoralGoals => {
      return tutoralGoals.filter(goal => goal.id !== goalID);
    });
  };

  const closeMode = () => {
    setMode(false);
  };
  

  return (
    <View style={styles.screen}>
      <Button title={'Add New Goal'} onPress={()=> setMode(true)}/>
      <GoalInput isVisible={mode} btnHandle={buttonHandler} onCancel={closeMode}/> 

      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={tutoralGoals}
        renderItem={(itemData) => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});

export default App;
