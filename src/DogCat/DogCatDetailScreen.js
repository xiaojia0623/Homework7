import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import TextStyles from '../styles/TextStyles';
import ButtonStyles from '../styles/ButtonStyles';

export default function DogDetailScreen(props) {
  const passProps = props.route.params.passProps || 'nothing'
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.infoImg}
          defaultSource={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&s'}}
          source={{uri:passProps.album_file ? passProps.album_file : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN-MIfzq_YivOa0M67__O1MNHV0bwzr0-hbVQiKe8g&s'}}/>
      </View>
      <Text>種類:  {passProps.animal_Variety}</Text>
      <Text>性別:  {passProps.animal_sex  === 'M'? '男生' : passProps.animal_sex === 'F' ? '女生' : '不確定'}</Text>
      <Text>年紀: {passProps.animal_age === "ADULT" ? '成犬/貓': passProps.animal_age === 'CHILD' ? '幼崽' : '不確定'}</Text>
      <Text>類型:  {passProps.animal_bodytype === 'MEDIUM'? '中型犬' : passProps.animal_bodytype === 'SMALL' ? '小型犬' : '大型犬'}</Text>
      <Text>狀態:  {passProps.animal_status}</Text>
      <Text>顏色: {passProps.animal_colour}</Text>
      <Text>開放領養時間: {passProps.animal_opendate} ~ {passProps.animal_closeddate} </Text>
      

      <TouchableOpacity style={ButtonStyles.backBtn} onPress={() => props.navigation.pop()}>
        <Text style={TextStyles.textBtn}>回貓狗列表</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    justifyContent: 'center', 
    textAlign:'left',
    padding:15,

  },
  infoImg:{
    width:300,
    height:300,
    objectFit:'cover',
    justifyContent: 'center',
    borderRadius:10,
    marginBottom:20,
    marginHorizontal:'auto',
  }
});