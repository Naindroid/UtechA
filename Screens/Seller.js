import React, { Component } from 'react';
import { Container, Header, Content, Text, Tab, Tabs } from 'native-base';
import Pending_tab from './STabs/Pending';
import Current_tab from './STabs/Current';
import Completed_tab from './STabs/Completed';
import { StyleSheet } from 'react-native';

export default class Seller_screen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor: '#ffffff'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, padding: 5}}>My Orders</Text>
        </Header>
        <Tabs initialPage={0}>
          <Tab heading="Pending" tabStyle={styles.tab} activeTabStyle={styles.tab2}>
            <Pending_tab navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Current" tabStyle={styles.tab} activeTabStyle={styles.tab2}>
            <Current_tab navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Completed" tabStyle={styles.tab} activeTabStyle={styles.tab2}>
            <Completed_tab navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

    tab:{
      backgroundColor: '#2b6777',
      
    },

    tab2:{
        backgroundColor:'#c8d8e4'
    }

  })