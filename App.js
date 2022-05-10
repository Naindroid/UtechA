import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Buyer from './Screens/Buyer';
import Signup from './Screens/Signup';
import Map from './Screens/Map';
import Mainmenu from './Screens/Mainmenu';
import Setup from './Screens/Setup';
import ShDetails from './Screens/ShDetails';
import PlaceOr from './Screens/PlaceOr';
import Seller from './Screens/Seller';
import SOrDet from './Screens/SOrDet';
import BuyerOrders from './Screens/BuyerOrders';
import createShop from './Screens/createShop';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>{

    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Map" component={Map} />    
      <Stack.Screen name="Mainmenu" component={Mainmenu} />    
      <Stack.Screen name="Setup" component={Setup} />    
      <Stack.Screen name="ShDetails" component={ShDetails} />    
      <Stack.Screen name="PlaceOr" component={PlaceOr} />    
      <Stack.Screen name="Seller" component={Seller} />    
      <Stack.Screen name="SOrDet" component={SOrDet} />    
      <Stack.Screen name="BuyerOrders" component={BuyerOrders} />    
      <Stack.Screen name="createShop" component={createShop} />    
    </Stack.Navigator>
    
    }</NavigationContainer>

      );
}
