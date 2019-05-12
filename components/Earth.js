import React from 'react';
import { asset, View } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Earth extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 1, 5] }] }}
                />
                <Entity
                    source={{ gltf2: asset('earth.gltf') }}
                    style={{
                        transform: [
                            { translateY: 1.5 },
                            { scale: 0.001 },
                            { rotateY: 180 }
                        ]
                    }}
                />
            </View>
        );
    }
}
