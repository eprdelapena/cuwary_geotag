import { CameraView, CameraType, useCameraPermissions } from "expo-camera"
import { useEffect, useRef, useState } from "react";

const useExpoCamera = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>("back");
    const cameraRef = useRef<CameraView | null>(null);

    const takePhoto = async () => {
        if (!cameraRef.current) return;

        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.9,
            skipProcessing: false,
        });

        return photo;
    };


    useEffect(() => {
        if (!permission) return;
        if (!permission.granted) {
            requestPermission();
        }
    }, [permission]);

    return {
        permission,
        requestPermission,
        facing,
        setFacing,
        cameraRef,
        takePhoto
    }
}

export default useExpoCamera;