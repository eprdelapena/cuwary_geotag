import { CameraType, CameraView, FlashMode, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to handle Expo Camera functionality, including flash
 */
const useExpoCamera = () => {
    // Get camera permissions status and a function to request permission
    const [permission, requestPermission] = useCameraPermissions();

    // Camera facing state: 'back' or 'front'
    const [facing, setFacing] = useState<CameraType>("back");

    // Camera flash mode: 'on', 'off', 'auto', 'torch'
    const [flash, setFlash] = useState<FlashMode>("off");

    // Reference to the CameraView component
    const cameraRef = useRef<CameraView | null>(null);

    /**
     * Function to take a photo using the camera reference
     */
    const takePhoto = async () => {
        if (!cameraRef.current) return; // Exit if camera not ready

        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.9,
            skipProcessing: false,
        });

        return photo;
    };

    /**
     * Automatically request permission if not granted
     */
    useEffect(() => {
        if (!permission) return;
        if (!permission.granted) {
            requestPermission();
        }
    }, [permission]);

    // Return everything needed for camera component
    return {
        permission,          // Camera permission status
        requestPermission,   // Request permission manually
        facing,              // Camera facing
        setFacing,           // Change facing
        flash,               // Current flash mode
        setFlash,            // Set flash manually
        cameraRef,           // Camera reference
        takePhoto            // Take a photo
    };
};

export default useExpoCamera;
