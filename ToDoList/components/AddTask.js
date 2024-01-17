import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if(title.trim() !== '') {
      onAddTask(title);
      setTitle('');
    }
  }

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        value={title}
        onChangeText={t => setTitle(t)}
        style={styles.input}
      />
      <Button title="ADD" onPress={handleAddTask}/>
    </View>
  )
}

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTask;