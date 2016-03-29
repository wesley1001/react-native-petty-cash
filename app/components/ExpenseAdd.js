import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ExpenseAdd extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
        	<View style={styles.container}> 
        		<Text>ExpenseAdd</Text>
        	</View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default ExpenseAdd;
