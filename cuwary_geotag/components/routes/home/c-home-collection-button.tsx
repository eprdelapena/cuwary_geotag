import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { LucidePictureInPicture } from "lucide-react-native"

const CHomeCollectionButton = () => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
            >
                <LucidePictureInPicture color="white" size={28} />
                <Text
                    style={style.TextStyle}
                >
                    Gallery
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CHomeCollectionButton

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