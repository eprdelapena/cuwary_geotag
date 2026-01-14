import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CIosStatusBar = () => {

    const {
        top,
        left,
        right,
        bottom
    } = useSafeAreaInsets();
    return (
        <>
            <View
                style={{
                    paddingTop: top,
                    paddingLeft: left,
                    paddingRight: right,
                    paddingBottom: bottom,
                    backgroundColor: "black"
                }}
            />
        </>
    )
}

export default CIosStatusBar