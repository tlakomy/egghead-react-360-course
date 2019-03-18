import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    View,
    Image,
    VrButton
} from 'react-360';
import Flag from './components/Flag';
import Bunny from './components/Bunny';

const FLAGS_IMAGES = [
    'flag_nasa.png',
    'flag_spain.png',
    'flag_italy.png',
    'flag_ukraine.jpg'
];

export default class travelVR extends React.Component {
    state = {
        activeFlag: ''
    };

    renderFlags() {
        return FLAGS_IMAGES.map(image => (
            <VrButton
                key={image}
                onEnter={() => this.setState({ activeFlag: image })}
                onClick={() => console.log('on click', image)}
            >
                <Flag image={image} activeFlag={this.state.activeFlag} />
            </VrButton>
        ));
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
