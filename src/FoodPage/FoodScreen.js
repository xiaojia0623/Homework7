import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView, ScrollView, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TextStyles from '../styles/TextStyles';

export default function CatScreen(props) {
  const [foodData, setFoodData] = useState([])

  useEffect(() => {
    fetchFoodData()
  },[])

  const fetchFoodData = () => {
    const REQUEST_DATAURL = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=wxV177kLhEE3';

    fetch(REQUEST_DATAURL)
      .then((res) => res.json())
      .then((res) => {
        setFoodData(res)
      })
      .catch((err) => {
        console.log('error 是 ', err)
      })
  }

  const renderFoodList = (Item) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.push('FoodInfo', {passProps:Item})}>
        <View>
          <View style={styles.MainView}>
            <View style={{flex:1}}>
              <Text ellipsizeMode='tail' numberOfLines={3} style={TextStyles.titleFont}>食品名稱: {Item.fname}</Text>
              <Text ellipsizeMode='tail' numberOfLines={3}  style={TextStyles.textContent}>適用: {Item.fusage1}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
            
          </View>
          <View style={styles.seperator}></View>
        </View>
      </TouchableOpacity>

    )
  } 


  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FlatList data={foodData} renderItem={ Item  => renderFoodList(Item.item, props)} keyExtractor={Item => Item.id}  />
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  // scrollView: {    
  //   marginHorizontal: 20,
  // },
  MainView:{
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFE4C4',
    padding:15,
  },
  text:{
    fontSize:42,
  },
  seperator:{
    height:1,
    width:'100%',
    backgroundColor:'#D2691E',
  },
});