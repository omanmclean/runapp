import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import AddEntry from '../components/AddEntry';

import { View, Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  // need to add yarn.lock to gitignore


  //const [entries, setEntries] = useState([{ id: 1, title: "hello", body: "hola" }]);
  const [entries, setEntries] = useState([{ id: 1, title: "hello", body: "hola" }]);

  useEffect(() => {

  }, [entries]);

  // when button is clicked, add new item to list of entries, then rerender all entries as divs

  function handleOnAddEntry() {
    setEntries(prevEntries => [...prevEntries, { id: 2, title: "hey mate", body: "good day to yous" }]);
    console.log("Pressed -  entries size: " + entries.length);
  }

  return (
    <View style={styles.container}>
      <View>
        {entries.map(e => <Text style={styles.title}>{e.title}</Text>)}
      </View>
      <AddEntry />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FAB style={styles.fab} icon="plus" onPress={handleOnAddEntry} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
