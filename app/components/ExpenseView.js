import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ExpenseView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<View style={styles.container}> 
        		<Text>ExpenseView</Text>
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

export default ExpenseView;
