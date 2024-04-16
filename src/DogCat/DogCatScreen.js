import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import TextStyles from '../styles/TextStyles';


export default function DogCatScreen(props) {
    const [dataSource, setDataSource] = useState([])

    useEffect(()=> {
        fetchData()
    },[])



    const fetchData = () =>{
        const REQUEST_URL = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setDataSource(responseData)
            })
            .catch((error) => {
                console.log('error 是 ', error)
            })
    }

  
    const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&';
    
    const renderList = (cases) => {
        return (
          <TouchableOpacity onPress={()=> props.navigation.push('AnimalInfo', {passProps:cases})}>
            <View>
              <View style={styles.MainView}>
                <Image style={styles.aniImg}
                defaultSource={{uri: defaultImage}}
                source={{uri:cases.album_file ? cases.album_file : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&s'}} 
                imgResizeMode="contain"
                />
                <View style={{flex:1}}>
                  <Text ellipsizeMode='tail' numberOfLines={3} style={TextStyles.titleFont}>
                    動物收容所名稱 : {cases.shelter_name}
                  </Text>
                  <Text ellipsizeMode='tail' numberOfLines={3}  style={TextStyles.textContent}>
                    動物品種: {cases.animal_kind}
                  </Text>
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
      {
        dataSource.map((item, index) => {
          return (
            <View key={index}>
              {renderList(item)}
            </View>
          )
        })
      }
      {/* <FlatList data={dataSource} renderItem={ cases  => renderList(cases.item, props)} keyExtractor={cases => cases.id}  /> */}
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
  MainView:{
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFE4C4',
    padding:15
  },
  seperator:{
    height:1,
    width:'100%',
    backgroundColor:'#D2691E',
  },
  aniImg:{
    width:50,
    height:50,
    objectFit:'cover',
    borderRadius:10,
    marginEnd:20,
  }
});