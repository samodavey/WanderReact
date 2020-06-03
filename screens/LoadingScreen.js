import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LoadingScreen extends React.Component{
  render(){
    return(
      <View styles={styles.container}>
        <Text>Loading Screen</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})