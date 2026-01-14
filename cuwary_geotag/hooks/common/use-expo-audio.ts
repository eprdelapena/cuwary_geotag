import { useAudioPlayer } from 'expo-audio';

const CAMERA_SHUTTER_SOUND_PHOTO = require('../../assets/camera-shutter.mp3');

const useAudio = () => {

    const SHUTTER_SOUND_AUDIO_PLAYER = useAudioPlayer(CAMERA_SHUTTER_SOUND_PHOTO);

    const PLAY_CAMERA_SHUTTER_SOUND = () => {
        SHUTTER_SOUND_AUDIO_PLAYER.seekTo(0);
        SHUTTER_SOUND_AUDIO_PLAYER.play();
    }

    return {
        PLAY_CAMERA_SHUTTER_SOUND
    }
}

export default useAudio;
