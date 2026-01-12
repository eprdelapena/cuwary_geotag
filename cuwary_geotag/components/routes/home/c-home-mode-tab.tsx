import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'

const CHomeModeTab = ({ selectedType, setSelectedType }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setSelectedType("photo")}
                style={[
                    styles.button,
                    selectedType === "photo" ? styles.buttonActive : styles.buttonInactive
                ]}
                activeOpacity={0.7}
            >
                <Text
                    style={[
                        styles.buttonText,
                        selectedType === "photo" ? styles.textActive : styles.textInactive
                    ]}
                >
                    Photo
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setSelectedType("video")}
                style={[
                    styles.button,
                    selectedType === "video" ? styles.buttonActive : styles.buttonInactive
                ]}
                activeOpacity={0.7}
            >
                <Text
                    style={[
                        styles.buttonText,
                        selectedType === "video" ? styles.textActive : styles.textInactive
                    ]}
                >
                    Video
                </Text>
            </TouchableOpacity>
        </View>
    )
}

type Props = {
    selectedType: "photo" | "video",
    setSelectedType: React.Dispatch<React.SetStateAction<"photo" | "video">>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        position: "absolute",
        top: Platform.OS === "android" ? 630 : 620,
        left: Platform.OS === "android" ? 185 : 200,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    button: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
        minWidth: 100,
        alignItems: "center",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonActive: {
        backgroundColor: "#007AFF",
        shadowColor: "#007AFF",
        shadowOpacity: 0.4,
    },
    buttonInactive: {
        backgroundColor: "#2C2C2E",
        shadowColor: "#000",
        shadowOpacity: 0.2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
    },
    textActive: {
        color: "#FFFFFF",
    },
    textInactive: {
        color: "#8E8E93",
    }
})

export default CHomeModeTab
