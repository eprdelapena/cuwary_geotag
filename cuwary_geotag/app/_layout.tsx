import CAndroidStatusBar from '@/components/common/c-android-status-bar'
import CIosStatusBar from '@/components/common/c-ios-status-bar'
import CHomeCameraButton from '@/components/routes/home/c-home-camera-button'
import { Slot } from 'expo-router'
import React, { useState } from 'react'
import { Platform, View, Text, TouchableOpacity } from 'react-native'
import CHomeMapDataButton from '@/components/routes/home/c-home-map-data-button'
import CHomeDefaultFolderButton from '@/components/routes/home/c-home-default-folder-button'
import CHomeLegendButton from '@/components/routes/home/c-home-legend-button'
import CHomeCollectionButton from '@/components/routes/home/c-home-collection-button'

const CLayoutMain = () => {
    const [selectedType, setSelectedType] = useState<"photo" | "video">("photo")
    return (
        <>
            {Platform.OS === 'android' && <CAndroidStatusBar />}
            {Platform.OS === 'ios' && <CIosStatusBar />}
            <View
                style={{
                    flex: 1
                }}
            >
                <Slot />
            </View>
            <View
                style={{
                    padding: 10,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => setSelectedType("photo")}
                    style={{
                        backgroundColor: selectedType === "photo" ? "#007AFF" : "#2C2C2E",
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderRadius: 12,
                        minWidth: 100,
                        alignItems: "center",
                        shadowColor: selectedType === "photo" ? "#007AFF" : "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: selectedType === "photo" ? 0.4 : 0.2,
                        shadowRadius: 4,
                        elevation: 3,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: selectedType === "photo" ? "#FFFFFF" : "#8E8E93",
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Photo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedType("video")}
                    style={{
                        backgroundColor: selectedType === "video" ? "#007AFF" : "#2C2C2E",
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderRadius: 12,
                        minWidth: 100,
                        alignItems: "center",
                        shadowColor: selectedType === "video" ? "#007AFF" : "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: selectedType === "video" ? 0.4 : 0.2,
                        shadowRadius: 4,
                        elevation: 3,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: selectedType === "video" ? "#FFFFFF" : "#8E8E93",
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Video
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    backgroundColor: "black",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    height: 150
                }}
            >
                <CHomeCollectionButton />
                <CHomeMapDataButton />
                <CHomeCameraButton />
                <CHomeDefaultFolderButton />
                <CHomeLegendButton />
            </View>
        </>
    )
}

export default CLayoutMain