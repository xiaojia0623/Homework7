import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// icons
import { Ionicons } from '@expo/vector-icons';


//三大主頁面
import HomePage from './src/Information/HomePage';
import DogCatScreen from './src/DogCat/DogCatScreen';
import FoodScreen from './src/FoodPage/FoodScreen';

// Detail頁面
import DogCatDetailScreen from './src/DogCat/DogCatDetailScreen';
import FoodDetailScreen from './src/FoodPage/FoodDetailScreen';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function AnimalPageStack(){
  return (
    <Stack.Navigator
    initialRouteName="DogPage"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerTitleAlign:'center',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen name="AnimalPage" component={DogCatScreen} />
      <Stack.Screen name="AnimalInfo" component={DogCatDetailScreen}  options={{ title: 'AnimalPage Detail' }} />
    </Stack.Navigator>
  )
}


function FoodPageStack(){
  return (
    <Stack.Navigator
    initialRouteName="FoodPage"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerTitleAlign:'center',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen name="FoodPage" component={FoodScreen} />
      <Stack.Screen name="FoodInfo" component={FoodDetailScreen}  options={{ title: 'FoodPage Detail' }} />
    </Stack.Navigator>
  )
}


function HomePageStack(){
  return (
    <Stack.Navigator
    initialRouteName="HomePage"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerTitleAlign:'center',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      {/* <Stack.Screen name="testInfo" component={AnimalsFoodInfo}  options={{ title: 'test Detail' }}/> */}
    </Stack.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="毛小孩的家園"
      screenOptions={({route}) => ({
        tabBarIcon:({focused, color, size }) => {
          let iconName;
          if (route.name === 'Animal'){
            iconName = focused ? "cloud-circle" : "cloud-circle-outline" ;
          }else if (route.name === 'Home'){
            iconName = focused ? 'globe' : 'globe-outline' ;
          }else if (route.name === 'Food'){
            iconName = focused ? 'nutrition' : "nutrition-outline" ;
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}>
        <Tab.Screen name="Animal" component={AnimalPageStack} />
        <Tab.Screen name="Home" component={HomePageStack} />
        <Tab.Screen name="Food" component={FoodPageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
