"use client"

import CAndroidStatusBar from "@/components/common/c-android-status-bar"
import CIosStatusBar from "@/components/common/c-ios-status-bar"
import { Slot } from "expo-router"
import { Platform, View } from "react-native"

const CLayoutMain = () => {

    return (
        <>
            {Platform.OS === "android" && <CAndroidStatusBar />}
            {Platform.OS === "ios" && <CIosStatusBar />}
            <View
                style={{
                    flex: 1
                }}
            >
                
                <Slot />
            </View>
        </>
    )
}

export default CLayoutMain
