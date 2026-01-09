import React from 'react'
import { Platform, View } from 'react-native';
import CAndroidStatusBar from './c-android-status-bar';
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
                }}
            />
        </>
    )
}

export default CIosStatusBar