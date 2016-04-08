import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
var Button = require('react-native-button');
var Icon = require('react-native-vector-icons/FontAwesome')

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {	
        return (
        	<View style={styles.container}>
            <Text style={styles.headline}>SSS</Text>
            <Text style={styles.subline}>Know Your Petty Cash</Text>
            <View>
              <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={Actions.expenseMenu} >
                <Text style={styles.button}>Login with Facebook</Text>
              </Icon.Button>
            </View>
        	</View> 
        ); 
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  subline: {
    color: '#BBB',
    fontSize: 20,
    marginBottom: 80
  },
  buttonContainer: {
    marginTop: 100, 
  },
  button: {
    fontFamily: 'Arial',
    fontSize: 18, 
    color: 'white'
  }
});

export default Login;
