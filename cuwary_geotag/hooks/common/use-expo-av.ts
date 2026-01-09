import { useEffect, useState } from "react";
import { Audio } from 'expo-av';

const useExpoAv = () => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    // Load the sound when the component mounts
    useEffect(() => {
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/camera-shutter.mp3') // Add your sound file in /assets
            );
            setSound(sound);
        };

        loadSound();

        // Unload sound when component unmounts
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const handlePressAudio = async () => {
        
        try {
            if (sound) {
                await sound.replayAsync(); // play the camera sound
            }
        } catch (error) {
            console.log('Error playing sound', error);
        }
    };

    return {
        handlePressAudio
    }
}

export default useExpoAv;