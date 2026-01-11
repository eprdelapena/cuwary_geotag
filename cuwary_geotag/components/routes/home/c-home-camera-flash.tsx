import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Zap } from "lucide-react-native"
import { useState } from "react"

const CHomeCameraFlash = () => {
    const [isFlash, setIsFlash] = useState<boolean>(false);

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
                onPress={() => setIsFlash(!isFlash)}
            >
                <Zap color={isFlash ? "yellow" : "white"} size={35} />
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