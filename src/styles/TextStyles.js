import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titleFont: { //首頁標題
      fontSize:16,
      //fontWeight:'bold',
      marginBottom:5,
    },
     textContent:{//首頁小標題
        fontSize:16,
    },
    textBtn:{
        color:'white',
        backgroundColor:'#D2691E',
        textAlign:'center',
    },
    homeText:{
      fontSize:26,
      textAlign:'center',
      //marginTop:'auto',
      fontWeight:'bold',
    },
    foodText:{ //食品資料頁大標題
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:20,
    },
    foodContentText:{
      fontSize:18,
      marginRight:'auto',
      lineHeight:'2rem',
    }
  });