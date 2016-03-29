import React, {Component, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ExpenseList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      	<View style={styles.container}> 
      		<Text style={styles.headline}>ExpenseList</Text>					
      		<Text onPress={Actions.expenseAdd}> Add Button</Text>
      		<Text onPress={Actions.expenseView}> View Button</Text>
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
  	fontSize: 18,
  	fontWeight: 'bold'
  }
});

export default ExpenseList;
