import React, { Component } from 'react'
import { ScrollView, Text,View,Button,Image } from 'react-native'



export default function Description({ route, navigation }) {
    /* 2. Get the param */
    const { hero } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <ScrollView>
                <Image style={{height: 150, width: 150, borderRadius: 25,alignContent:'center',margin: '5px 5px 5px 5px'}} source={{uri:hero.image}}></Image>
                <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
                <Text style={{padding:10}}>{hero.type}</Text>
           </ScrollView> 
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

/*
export default class Description extends Component{

 componentDidMount(){
 }
    render() {
        const { hero } = this.props.navigation.state.params
        return (
           <ScrollView>
                <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
                <Text style={{padding:10}}>{hero.type}</Text>
           </ScrollView> 
        )
    }
} */