import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, Text, Card, CardItem, Left, Right} from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class Map_screen extends Component {
  render() {
    return (
      <Container >
        <Content contentContainerStyle={styles.container}>
          
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
         latitude: 24.820351,
         longitude: 67.030435,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>   


        </Content>
        <Content>
        
        <Card style={{borderRadius: 15, padding: 10}}>
            <CardItem button onPress={()=> this.props.navigation.navigate("ShDetails")}>
              <Left>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#52ab98'}}>ZAB Waterworks</Text>
              </Left>
              <Right>
                <Mticon name="star" size={25} color='#ffcc00' />
                <Text>4.5</Text>
              </Right>
            </CardItem>
          </Card>


        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  pview:{
    marginTop:50,
    marginHorizontal:40,
    

  },

  btn:{
    alignSelf:'center',
    marginTop:100,
    backgroundColor: '#52ab98',
  },

  map:{
    ...StyleSheet.absoluteFillObject,
  },
})