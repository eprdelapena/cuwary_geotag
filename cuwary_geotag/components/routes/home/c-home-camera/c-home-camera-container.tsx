import { CameraType, FlashMode } from 'expo-camera'
import React, { ReactNode } from 'react'
import { Platform, View } from 'react-native'
import CHomeCameraFlash from '../c-home-camera-flash'
import CHomeCameraFlip from '../c-home-camera-flip'
import CHomeModeTab from '../c-home-mode-tab'

const CHomeCameraContainer = ({
    children,
    selectedType,
    setSelectedType,
    facing,
    setFacing,
    flash,
    setFlash
}: Props) => {

    return (
        <View
            style={{
                flex: 1,
                position: "relative"
            }}
        >
            <View
                style={{
                    gap: 15,
                    left: Platform.OS === "android" ? 310 : 320,
                    paddingTop: 20,
                    position: "absolute",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 8,
                    zIndex: 2
                }}
            >
                <CHomeCameraFlash
                    flash={flash}
                    setFlash={setFlash}
                />
                <CHomeCameraFlip
                    facing={facing}
                    setFacing={setFacing}
                />
            </View>
            {children}
            <CHomeModeTab selectedType={selectedType} setSelectedType={setSelectedType} />
        </View>
    )
}

export default CHomeCameraContainer

type Props = {
    selectedType: "photo" | "video",
    setSelectedType: React.Dispatch<React.SetStateAction<"photo" | "video">>
    facing: CameraType,
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>,
    flash: FlashMode,
    setFlash: React.Dispatch<React.SetStateAction<FlashMode>>
    children: ReactNode,
}

