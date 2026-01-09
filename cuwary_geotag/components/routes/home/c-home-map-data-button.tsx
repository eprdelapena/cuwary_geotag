import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Map } from "lucide-react-native"

const CHomeMapDataButton = () => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
            >
                <Map color="white" size={28} />
                <Text
                    style={style.TextStyle}
                >
                    Map Data
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CHomeMapDataButton

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