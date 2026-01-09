import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { FileArchive } from "lucide-react-native"

const CHomeDefaultFolderButton = () => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                style={style.ButtonStyle}
            >
                <FileArchive color="white" size={28} />
                <Text
                    style={style.TextStyle}
                >
                    Default Folder
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CHomeDefaultFolderButton

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