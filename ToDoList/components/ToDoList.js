import { useEffect, useState } from "react";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { Button, StyleSheet, Text, View } from "react-native";
import AddTask from "./AddTask";

const ToDoList = ({ titles }) => {
  const [data, setData] = useState(titles.map(t => ({
    title: t,
    id: uuidv4()
  })));

  const addToDo = newTitle => {
    setData(prev => [...prev, {title: newTitle, id: uuidv4()}]);
  }

  const removeToDo = id => {
    setData(data.filter(d => d.id != id));
  }

  return (
    <View style={styles.todoListContainer}>
      <AddTask onAddTask={addToDo}/>
      {data.map(d => 
        <View key={d.id} style={styles.todoItem}>
          <Text>{d.title}</Text>
          <Button title="REMOVE" onPress={() => removeToDo(d.id)}/>
        </View>
      )}
    </View>
  )
}

ToDoList.defaultProps = {
  titles: []
}

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;