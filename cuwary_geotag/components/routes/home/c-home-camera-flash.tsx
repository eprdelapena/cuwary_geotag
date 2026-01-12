import { FlashMode } from "expo-camera";
import { Zap } from "lucide-react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

const CHomeCameraFlash = ({
    flash,
    setFlash
}: Props) => {

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
                onPress={() => setFlash(flash === "on" ? "off" : "on")}
            >
                <Zap color={flash === "on" ? "yellow" : "white"} size={35} />
            </TouchableOpacity>
        </>
    )
}

export default CHomeCameraFlash

const style = StyleSheet.create({
    ButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
})

type Props = {
    flash: FlashMode,
    setFlash: React.Dispatch<React.SetStateAction<FlashMode>>
}