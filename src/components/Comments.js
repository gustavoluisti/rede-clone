import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Comments extends Component {


    render() {
        let view = this.props.comments ? this.props.comments.map((item, index) => {
            return (
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.nickname}>{item.nickname}: </Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        }) : null;

        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
     margin: 10,

    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
       // backgroundColor: '#1E90FF'
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})