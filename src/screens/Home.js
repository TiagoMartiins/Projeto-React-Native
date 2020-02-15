import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'



export default class Home extends React.PureComponent {
    
    state = {
        data: []
    }
    
    async componentDidMount() {
        const response = await fetch('http://rickandmortyapi.com/api/character/')
        const responseJson = await response.json()
        this.setState({data: responseJson.results})
    }

    _renderItem = ({item}) => {
      return  (
          <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
              <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: item.image}}></Image>
              <Text style={{marginLeft: 10}}>{item.name}</Text>
          </TouchableOpacity>
      )
  }

  _onItemPress = (item) => {
      this.props.navigation.navigate('Description', {hero: item})
  } 

  render() {
      return (
          <FlatList 
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={()=>
                  <View style={{height:1, backgroundColor: '#f7f7f7'}} 
              />}
          />
      )
  }
}