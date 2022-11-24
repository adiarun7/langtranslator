import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import Spanish from "./screens/Spanish"
import German from "./screens/German"
import French from "./screens/French"
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Spanish : Spanish,
  German : German,
  French : French
})

const AppContainer = createAppContainer(AppNavigator)
