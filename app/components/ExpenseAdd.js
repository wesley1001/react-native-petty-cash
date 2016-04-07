import React, {Component, StyleSheet, Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Navbar from './widgets/Navbar';
var Icon = require('react-native-vector-icons/FontAwesome');

class ExpenseAdd extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
      	<View style={styles.container}> 
      		<Navbar
            title="Add expense"
            lTitle="Back"
            rTitle="Submit"
            rHandler={()=>alert("Call submit function")}
            />

          <View style={styles.form}>

            <View style={styles.row}>
              <View style={styles.labelRow}>
                <Icon style={styles.icon} name="tags" size={23} color="#666" />
                <Text>Amount</Text>               
              </View>
              <View style={{flex: 0.7}}>
               <TextInput
                  style={styles.textInput} 
                  placeholder={'Amount'}
                  placeholderTextColor={'#DDD'} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelRow}>
                <Icon style={styles.icon} name="tags" size={23} color="#666" />
                <Text>Category</Text>               
              </View>
              <View style={{flex: 0.7}}>
               <TextInput
                  style={styles.textInput} 
                  placeholder={'Category'} 
                  placeholderTextColor={'#DDD'} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.labelRow}>
                <Icon style={styles.icon} name="tags" size={23} color="#666" />
                <Text>Description</Text>               
              </View>
              <View style={{flex: 0.7}}>
               <TextInput
                  style={styles.textInput} 
                  placeholder={'Description'}
                  placeholderTextColor={'#DDD'} />
              </View>
            </View>

          </View>
      	</View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEDEE',
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
  },
  icon: {
    marginRight: 20,
  },
  textInput: {

  },
  labelRow: {
    flex: 0.3, 
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default ExpenseAdd;
