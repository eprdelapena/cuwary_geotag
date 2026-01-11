import React, { ReactNode, useState } from 'react'
import { View, Text } from 'react-native'
import CHomeCameraFlash from '../c-home-camera-flash'
import CHomeCameraFlip from '../c-home-camera-flip'
import CHomeModeTab from '../c-home-mode-tab'

const CHomeCameraContainer = ({
    children,
    selectedType,
    setSelectedType
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
                    left: 320,
                    paddingTop: 20,
                    position: "absolute",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 8,
                    zIndex: 2
                }}
            >
                <CHomeCameraFlash />
                <CHomeCameraFlip />
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
    children: ReactNode,
}

