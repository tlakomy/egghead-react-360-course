import React from 'react';
import { AppRegistry, asset, StyleSheet, View, Image } from 'react-360';
import Flag from './components/Flag';
import Bunny from './components/Bunny';

const FLAGS_IMAGES = [
    'flag_nasa.png',
    'flag_spain.png',
    'flag_italy.png',
    'flag_ukraine.jpg'
];

export default class travelVR extends React.Component {
    renderFlags() {
        return FLAGS_IMAGES.map(image => <Flag key={image} image={image} />);
    }

    render() {
        const { flagContainer } = styles;

        return (
            <View>
                <View style={flagContainer}>{this.renderFlags()}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flagContainer: {
        height: 600,
        width: 4680,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
AppRegistry.registerComponent('Flag', () => Flag);
AppRegistry.registerComponent('Bunny', () => Bunny);
