import * as React from 'react';
import { FlatList, Image } from 'react-native';
import Styles from './Styles';
import {  View } from '../components/Themed';
import ItemList from '../components/ItemList/ItemList';
import { handlerFetch } from '../apimanager/ApiManager';
import { useData } from '../context/DataContext';


export default function TabOneScreen() {
  const { data, saveData, loading } = useData();
  const ENDPOINT = "https://hn.algolia.com/api/v1/search_by_date";
  

  React.useEffect(() => {
    getDataFetch()
  }, []);

  const handleDelete = (index: any) => {
    const arr = [...data];
    arr.splice(index, 1);
    saveData(arr);
  };


  const getDataFetch = async () => {
    await handlerFetch(ENDPOINT)
      .then((data) => {
        saveData(data.hits)
      })
      .catch(e => e)
  }

  return (
    <View style={Styles.container}>
      {/* <Image
        style={{height: 100, width: 150, backgroundColor: '#fff'}}
        source={require('../assets/images/postviewer.png')}
      /> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => {
          return <ItemList 
          data={item}
          i={index}
          handleDelete={() => handleDelete(index)} />
        }}
        ItemSeparatorComponent={() => {
          return <View style={Styles.separatorLine}></View>;
        }}
        refreshing={loading}
        onRefresh={getDataFetch}
      />


    </View>
  );
}

