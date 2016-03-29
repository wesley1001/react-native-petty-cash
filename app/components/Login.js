import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
var Button = require('react-native-button');

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
               <Button containerStyle={styles.buttonContainer}                 
                  style={styles.button}
                  onPress={Actions.expenseMenu} 
                > 
                Log in with Facebook
              </Button>
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
    fontWeight: 'bold'
  },
  subline: {
    color: '#BBB',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 100, 
    padding:10, 
    height:45, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: '#3b5998'
  },
  button: {
    fontSize: 20, 
    color: 'white'
  }
});

export default Login;
