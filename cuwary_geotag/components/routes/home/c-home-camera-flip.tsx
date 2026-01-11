import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { RotateCw } from "lucide-react-native"

const CHomeCameraFlip = () => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
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