import React from 'react'
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CAndroidStatusBar = () => {

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
                    paddingBottom: bottom
                }}
            />
        </>
    )
}

export default CAndroidStatusBar