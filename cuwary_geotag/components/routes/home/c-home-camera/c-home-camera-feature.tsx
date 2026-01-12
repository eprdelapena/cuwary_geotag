import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { CameraView, CameraType, useCameraPermissions, PermissionResponse } from "expo-camera"

const CHomeCameraFeature = ({
    permission,
    requestPermission,
    facing,
    cameraRef
}: Props) => {

    if (!permission) {
        return <View style={{ flex: 1, backgroundColor: "black" }} />
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>
                    Camera permission is required
                </Text>

                <TouchableOpacity
                    onPress={requestPermission}
                    style={styles.permissionButton}
                >
                    <Text style={styles.permissionButtonText}>
                        Grant Permission
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFill}
                facing={facing}
                ref={cameraRef}
            />


        </View>
    )
}

export default CHomeCameraFeature

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },

    permissionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    permissionText: {
        color: "white",
        fontSize: 16,
        marginBottom: 16,
        textAlign: "center",
    },
    permissionButton: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#1e90ff",
        borderRadius: 8,
    },
    permissionButtonText: {
        color: "white",
        fontWeight: "600",
    },
    controlText: {
        color: "white",
        fontSize: 18,
    },
})

type Props = {
    permission: PermissionResponse | null,
    requestPermission: () => Promise<PermissionResponse>,
    facing: CameraType
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
    cameraRef: React.RefObject<CameraView | null>
}