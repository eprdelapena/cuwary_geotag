import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { LucideGrid3x3 } from "lucide-react-native"

const CHomeLegendButton = () => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
            >
                <LucideGrid3x3 color="white" size={28} />
                <Text
                    style={style.TextStyle}
                >
                    Legend
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CHomeLegendButton

const style = StyleSheet.create({
    TextStyle: {
        color: "white",
        fontSize: 12,
        marginTop: 4,
        fontWeight: "bold"
    },
    ButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
})