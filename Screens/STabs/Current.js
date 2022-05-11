import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { firebase } from '@react-native-firebase/database';

//import Typography from '../components/Typography';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Current_tab = () => {
  ////////////////////////////////////////////////
  constructor=()=>{
    //super();
    this.state = ({
      name: '',
      address: '',
      details: '',
      contact: '',
      orderArr: []

    })
  }
  /////////////////////////////////////////////////
  const [items, setItems] = useState({});
  ////////////////////////////////////
componentDidMount=()=>{
  const myitems = firebase.database().ref('Orders');
  myitems.on('value', datasnap => {
    if(datasnap.val()){
      this.setState({orderArr: Object.values(datasnap.val()) })
    }
  })
}
//////////////////////////////////////////////////////


  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="BM" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Current_tab;
