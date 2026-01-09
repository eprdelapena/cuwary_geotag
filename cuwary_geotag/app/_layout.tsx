"use client"

import CAndroidStatusBar from "@/components/common/c-android-status-bar"
import CIosStatusBar from "@/components/common/c-ios-status-bar"
import CHomeCameraButton from "@/components/routes/home/c-home-camera-button"
import { Slot } from "expo-router"
import { useState, useEffect, useRef } from "react"
import { Platform, View, Animated, Text } from "react-native"
import CHomeMapDataButton from "@/components/routes/home/c-home-map-data-button"
import CHomeDefaultFolderButton from "@/components/routes/home/c-home-default-folder-button"
import CHomeLegendButton from "@/components/routes/home/c-home-legend-button"
import CHomeCollectionButton from "@/components/routes/home/c-home-collection-button"
import CHomeModeTab from "@/components/routes/home/c-home-mode-tab"
import CHomeVideoButton from "@/components/routes/home/c-home-video-button"

const CLayoutMain = () => {
    const [selectedType, setSelectedType] = useState<"photo" | "video">("photo")
    const fadeAnim = useRef(new Animated.Value(1)).current
    const scaleAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
        // Fade out and scale down
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 0.8,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start(() => {
            // Fade in and scale up
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
            ]).start()
        })
    }, [selectedType, fadeAnim, scaleAnim])

    return (
        <>
            {Platform.OS === "android" && <CAndroidStatusBar />}
            {Platform.OS === "ios" && <CIosStatusBar />}
            <View
                style={{
                    gap: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 8
                }}
            >
                <Text>asd</Text>
                <Text>asd</Text>
                <Text>asd</Text>
                <Text>asd</Text>
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Slot />
            </View>
            <CHomeModeTab selectedType={selectedType} setSelectedType={setSelectedType} />
            <View
                style={{
                    backgroundColor: "black",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    height: 150,
                }}
            >
                <CHomeCollectionButton />
                <CHomeMapDataButton />
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    }}
                >
                    {selectedType === "photo" ? <CHomeCameraButton /> : <CHomeVideoButton />}
                </Animated.View>
                <CHomeDefaultFolderButton />
                <CHomeLegendButton />
            </View>
        </>
    )
}

export default CLayoutMain
