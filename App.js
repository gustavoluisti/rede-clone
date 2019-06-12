import React, { Component } from 'react';
import Header from './src/components/Header'
import { View } from 'react-native'
import Post from './src/components/Post'
import AddComment from './src/components/AddComment'
export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Thais Santos',
      comment: 'Excelente Foto!'
    }]

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
          <AddComment />
      </View>

    )
  }
}