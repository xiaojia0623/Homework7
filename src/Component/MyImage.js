import React from "react";
import { StyleSheet, Text, View , Image} from 'react-native';
import { useState } from "react";
import FastImage from "react-native-fast-image";
import _ from 'lodash';


const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&s';
const MyImage = ({defaultSource, source}) => {
    const [prevSource, setPrevSource] = useState(null)
    const [error, setError] = useState(false)
  
    if ( !_.isEqual(prevSource, source)) {
      setPrevSource(source)
      setError(false)
    }
  
    let resizeMode = FastImage.resizeMode.cover
  
    return (
      source && (
        <View>
          {error && (<Image source={defaultSource}
            resizeMode='cover'/>
          )}
          <FastImage
            source={source}
            onError={() => setError(true)}
            resizeMode={resizeMode} />
        </View>
      )
    )
}


  
  export default MyImage;