import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Language Translator',
            style: { color: '#f0f5f5', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={require('../assets/Logo.png')}
        />

         <TextAnimationFadeIn value={"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.-Nelson Mandela"} delay={100} duration={1000} style={{color: 'red'}} />
       
        <Text style={styles.paragraph}>Choose Language Here</Text>
       
        <View style = {{flexDirection:"row"}}>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.props.navigation.navigate('Spanish');
          }}>
          <Text style ={{justifyContent:"center",textAlign:"Center"}}>Spanish</Text>
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.props.navigation.navigate('German');
          }}>
          <Text style ={{justifyContent:"center",textAlign:"Center"}}>German</Text>
          </TouchableOpacity>

           <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.props.navigation.navigate('French');
          }}>
          <Text style ={{justifyContent:"center",textAlign:"Center"}}>French</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 100,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageIcon: {
    width: 70,
    height: 80,
    marginLeft: 170,
    backgroundColor: 'white',
  },
  goButton: {
    width: 70,
    height: 20,
    backgroundColor: '#77C3EC',
    borderWidth: 2,
    marginLeft: 25,
    marginTop: 120
  },
});
