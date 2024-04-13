import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

import TextStyles from '../styles/TextStyles';
import ButtonStyles from '../styles/ButtonStyles';

export default function FoodDetailScreen(props) {
  const passProps = props.route.params.passProps || 'nothing'
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={TextStyles.foodText}>{passProps.fname}</Text>
        <View style={styles.seperator}></View>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>食品種類:</Text> {passProps.fitem}</Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>包裝規格:</Text> {passProps.fwcn} </Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>適用:</Text> {passProps.fusage1}</Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>產自:</Text> {passProps.forigin}</Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>公司名稱:</Text> {passProps.flegalname}</Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>成分:</Text> {passProps.fmat}</Text>
        <Text style={TextStyles.foodContentText}><Text style={{fontWeight:'bold'}}>食用方式:</Text>  {passProps.fusage2}</Text>
        <Text style={[TextStyles.foodContentText, {marginBottom:20}]}><Text style={{fontWeight:'bold'}}>保存方式:</Text> {passProps.fusage3}</Text>

        <TouchableOpacity style={[ButtonStyles.backBtn, {marginBottom:20}]} onPress={() => props.navigation.pop()}>
          <Text style={TextStyles.textBtn}>回食品列表</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
  },
  seperator:{
    height:1,
    width:'100%',
    marginBottom:10,
    marginTop:10,
    backgroundColor:'#D2691E',
  },
  scrollView: {    
    marginHorizontal: 20,
    },
});