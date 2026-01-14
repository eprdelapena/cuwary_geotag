import { Camera, Video } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
    selectedType: 'photo' | 'video'
    setSelectedType: React.Dispatch<React.SetStateAction<'photo' | 'video'>>
}

const CHomeModeTab = ({ selectedType, setSelectedType }: Props) => {
    return (
        <View style={styles.container}>
            {/* Photo Button */}
            <TouchableOpacity
                onPress={() => setSelectedType('photo')}
                style={[
                    styles.button,
                    selectedType === 'photo' ? styles.buttonActive : styles.buttonInactive,
                ]}
                activeOpacity={0.7}
            >
                <Camera
                    color={selectedType === 'photo' ? '#FFFFFF' : '#8E8E93'}
                    size={24}
                />
            </TouchableOpacity>

            {/* Video Button */}
            <TouchableOpacity
                onPress={() => setSelectedType('video')}
                style={[
                    styles.button,
                    selectedType === 'video' ? styles.buttonActive : styles.buttonInactive,
                ]}
                activeOpacity={0.7}
            >
                <Video
                    color={selectedType === 'video' ? '#FFFFFF' : '#8E8E93'}
                    size={24}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        position: 'absolute',
        top: 5,
        left: 5,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        padding: 12,
        borderRadius: 12,
        minWidth: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonActive: {
        backgroundColor: '#007AFF',
        shadowColor: '#007AFF',
        shadowOpacity: 0.4,
    },
    buttonInactive: {
        backgroundColor: '#2C2C2E',
        shadowColor: '#000',
        shadowOpacity: 0.2,
    },
})

export default CHomeModeTab
