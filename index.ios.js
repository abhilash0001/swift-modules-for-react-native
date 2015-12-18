/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native')
console.dir(React.NativeModules.CalendarManager)
var subscription = React.NativeAppEventEmitter.addListener(
    'EventReminder',
    (reminder) => {
        console.log('EVENT')
        console.log('name: ' + reminder.name)
        console.log('location: ' + reminder.location)
        console.log('date: ' + reminder.date)
    }
)
React.NativeModules.CalendarManager.addEvent("One", "Two", 3, function(o) {
    console.log('In Callback')
    console.dir(o)
});

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var SwiftBridge = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SwiftBridge', () => SwiftBridge);
