import useExpoAv from '@/hooks/common/use-expo-av'
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'

const CHomeCameraButton = ({
    takePhoto
}: Props) => {

    const {
        handlePressAudio
    } = useExpoAv();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
                takePhoto();
                handlePressAudio();
            }}
        >
            <View
                style={style.outer}
            >
                <View
                    style={style.inner}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CHomeCameraButton

const style = StyleSheet.create({
    outer: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 4,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    inner: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#fff",
    },
})

type Props = {
    takePhoto: () => Promise<CameraCapturedPicture | undefined>
}