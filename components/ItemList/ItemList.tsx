import React from 'react';
import {
  TouchableOpacity,
  Alert,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useNavigation } from '@react-navigation/core';
import {differenceInMinutes} from 'date-fns';
import Icon from '../Icons/Ionicons';
import { View, Text } from '../Themed';
import { useData } from '../../context/DataContext';
import Styles from './Styles';

const COLOR_PALETTE = ["#fae0e4", "#f7cad0", "#f9bec7", "#fbb1bd","#ff99ac"]


const ItemList = (props:any) => {
  const navigation = useNavigation();

  const {updateUrl} = useData();
  const handlePress =  (url: any) => {
    if(url === null || url === undefined){
      Alert.alert(
        `😟`,
        "This URL is not available..." ,
        [
          {
            text: "Go Back",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK 😟", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      updateUrl(url)
      navigation.navigate('WebView')
    }
    
  }


  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={Styles.deleteBox}>
        <Icon name="trash" color={'red'} size={50} />
        </View>
      </TouchableOpacity>
    );
  };

  
  return (
    
    <React.Fragment>
    
  <TouchableOpacity onPress={() => handlePress(props.data.url)} activeOpacity={0.6}>
    <Swipeable 
        renderRightActions={rightSwipe}
        >
      <View style={{...Styles.container, backgroundColor: COLOR_PALETTE[props.i % COLOR_PALETTE.length]}}>
        <Text style={Styles.titleText}>{(props.data.story_title || props.data.title) || 'Not found'}</Text>
        <Text>{props.data.url === null ? 
        `Available URL: 🚫` : `Available URL: ✅`}</Text>
        <Text>Post preview: {props.data.comment_text?.slice(0,100)} ... </Text>
        <View style={{...Styles.subContainer, backgroundColor: COLOR_PALETTE[props.i % COLOR_PALETTE.length]}}>
        <Text>{props.data.author.toUpperCase()}.</Text>
        <Text>Created at:  {differenceInMinutes(new Date(), new Date(props.data.created_at))} min.</Text>
        </View>
     
      </View>
    </Swipeable>
    </TouchableOpacity>
    </React.Fragment>
  );
};

export default ItemList;

