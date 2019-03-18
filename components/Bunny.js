import React from 'react';
import { Animated, asset, View } from 'react-360';
import Entity from 'Entity';
import Easing from 'Easing';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class Bunny extends React.Component {
    rotation = new Animated.Value(0);
    jumpValue = new Animated.Value(0);

    spin() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {
            toValue: 360,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    jump(value) {
        let currentVal = value === 20 ? 0 : 20;
        Animated.timing(this.jumpValue, {
            toValue: currentVal,
            duration: 500
        }).start(() => this.jump(currentVal));
    }

    componentDidMount() {
        this.spin();
        this.jump(0);
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 4, -1] }] }}
                />
                <AnimatedEntity
                    source={{ gltf2: asset('Bunny.gltf') }}
                    style={{
                        transform: [
                            { scale: 0.01 },
                            { rotateY: 45 },
                            { translateY: this.jumpValue },
                            { rotateY: this.rotation }
                        ]
                    }}
                />
            </View>
        );
    }
}
