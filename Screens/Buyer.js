import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Mticon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Card, Footer, FooterTab, Button, Icon, Text, Col, Row, Grid, CardItem } from 'native-base';
export default class Buyer_screen extends Component {
  render() {
    return (
      <Container>
        <Content padder style={{backgroundColor: '#ffffff'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 10, marginHorizontal: 15}}>Available Service Providers</Text>
        <Text note style={{fontSize: 17, marginBottom: 30, marginHorizontal: 15}}>Choose a category to see services near you</Text> 
          <Grid>
            <Col style={styles.cview}>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="plumbing" size={50} color="#ffffff" />
                  </CardItem>
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Plumber</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview2} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="electrical-services" size={50} color="#ffffff" />
                  </CardItem>  
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Electrician</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="car-repair" size={50} color="#ffffff" />
                  </CardItem>  
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Mechanic</Text>
                  </CardItem>
                </Card>
              </Row>
            </Col>
            <Col style={styles.cview}>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview2} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="carpenter" size={50} color="#ffffff" />
                  </CardItem>  
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Carpenter</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="format-paint" size={50} color="#ffffff" />
                  </CardItem>  
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Painter</Text>
                  </CardItem>
                </Card>
              </Row>
              <Row>
                <Card style={{borderRadius:15}} transparent>
                  <CardItem style={styles.boxview2} button onPress={()=> this.props.navigation.navigate("Map")}>
                    <Mticon name="devices" size={50} color="#ffffff" />
                  </CardItem>  
                  <CardItem footer>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Tech Repair</Text>
                  </CardItem>
                </Card>
              </Row>
            </Col>
          </Grid>
        </Content>

          {/* <Footer>
          <FooterTab style={{backgroundColor: '#2b6777'}}>
            <Button vertical>
              <Icon name="apps" />
              <Text>Orders</Text>
            </Button>
            <Button vertical active style={{backgroundColor: '#c8d8e4'}}>
              <Icon active name="navigate" />
              <Text>Services</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  cview:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  boxview:{
    width:160,
    height:160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52ab98',
    borderRadius: 15,
  },

  boxview2:{
    width:160,
    height:160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b6777',
    borderRadius: 15,
  },
})