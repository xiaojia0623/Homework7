import React from "react";
import { StyleSheet, Text, View , Image} from 'react-native';
import { useState } from "react";
import FastImage from "react-native-fast-image";
import { isEqual } from 'lodash';

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&';


const MyImage = ({defaultSource, source}) => {
    const [prevSource, setPrevSource] = useState(null)
    const [error, setError] = useState(false)


    if ( !isEqual(prevSource, source)) {
      setPrevSource(source)
      setError(false)
    }
  
    //let resizeMode = FastImage.resizeMode.cover
  
    return (
      <Image 
      source={{ uri: cases.album_file }}
      placeholder={defaultImage}
      resizeMode='cover'/>
    )
}


  
  export default MyImage;