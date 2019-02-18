import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        const { mainView, text } = styles;

        return (
            <View style={mainView}>
                <Text style={text}>Add an Image here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 600,
        height: 600,
        padding: 10,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 40
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
