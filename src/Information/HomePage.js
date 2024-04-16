import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View, Image } from 'react-native';
import TextStyles from '../styles/TextStyles';
//import { Image } from 'expo-image';

const image = {uri: 'https://taichung.travel/content/images/articles/49532/1024x768_image1637622802598631513.jpg'};
const dogCatImg = {uri: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/08/30/0/24621843.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930'};

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imgs}>
        <Text style={[TextStyles.homeText, {marginTop:'auto'}]}>貓狗的世界</Text>
        <Text style={TextStyles.homeText}>領養代替購買</Text>
        <Image  source={dogCatImg}  style={styles.homeImg} />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imgs: {
    flex: 1,
    justifyContent: 'center',
  },
  homeImg:{
    width:300,
    height:300,
    objectFit:'cover',
    margin:'auto',
    borderRadius:10
  }
});