import React , {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({btnHandle, isVisible, onCancel}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const setGoalHandler = (goal) => {
    setEnteredGoal(goal);
  };

  const addGoal = () => {
    btnHandle(enteredGoal);
    setEnteredGoal('');
  };
  
  return (
    <Modal style={styles.modal} visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Goal"
          onChangeText={setGoalHandler}
          value={enteredGoal}
          />
          <View style={styles.btnContainer}>
            <Button title="Cancel" color='red' onPress={onCancel} />
            <Button title="ADD" onPress={addGoal} />
          </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;