import { useState, useEffect } from 'react';
import { FAB } from 'react-native-paper';
import AddEntry from '../components/AddEntry';

import { View, Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { BaseStyles } from '../components/BaseStyles';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [entries, setEntries] = useState([{ id: 1, title: "hello", body: "hola" }]);

  // when button is clicked, add new item to list of entries, then rerender all entries as divs

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
    // setEntries(prevEntries => [...prevEntries, { id: 2, title: "hey mate", body: "good day to yous" }]);
    // console.log("Pressed -  entries size: " + entries.length);
  }

  return (
    <View style={BaseStyles.container}>
      <View>
        {entries.map(e => <Text style={BaseStyles.title}>{e.title}</Text>)}
      </View>
      <AddEntry isModalVisible={isModalVisible} onBackgroundClick={toggleModal} />
      <View style={BaseStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FAB style={BaseStyles.fab} icon="plus" onPress={toggleModal} />


    </View>
  );
};