import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Egghead!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('travelVR', () => travelVR);
