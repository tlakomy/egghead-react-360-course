import React from 'react';
import { AppRegistry, asset, View } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Bunny extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 4, -1] }] }}
                />
                <Entity
                    source={{ gltf2: asset('Bunny.gltf') }}
                    style={{ transform: [{ scale: 0.01 }, { rotateY: 45 }] }}
                />
            </View>
        );
    }
}
