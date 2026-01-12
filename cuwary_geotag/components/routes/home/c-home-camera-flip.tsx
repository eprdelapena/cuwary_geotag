import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { RotateCw } from "lucide-react-native"
import { CameraType } from "expo-camera"

const CHomeCameraFlip = ({
    facing,
    setFacing
}: Props) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
                onPress={() => setFacing(facing === "front" ? "back" : "front")}
            >
                <RotateCw color="white" size={35} />
            </TouchableOpacity>
        </>
    )
}

export default CHomeCameraFlip

const style = StyleSheet.create({
    ButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
})

type Props = {
    facing: CameraType
    setFacing: React.Dispatch<React.SetStateAction<CameraType>>
}