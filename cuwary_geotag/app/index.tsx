import CHomeCameraButton from '@/components/routes/home/c-home-camera-button'
import CHomeCameraContainer from '@/components/routes/home/c-home-camera/c-home-camera-container'
import CHomeCameraFeature from '@/components/routes/home/c-home-camera/c-home-camera-feature'
import CHomeCollectionButton from '@/components/routes/home/c-home-collection-button'
import CHomeDefaultFolderButton from '@/components/routes/home/c-home-default-folder-button'
import CHomeLegendButton from '@/components/routes/home/c-home-legend-button'
import CHomeMapDataButton from '@/components/routes/home/c-home-map-data-button'
import CHomeVideoButton from '@/components/routes/home/c-home-video-button'
import React, { useEffect, useRef, useState } from 'react'
import { View, Animated } from 'react-native'

const CHome = () => {

  const [selectedType, setSelectedType] = useState<"photo" | "video">("photo")
  const fadeAnim = useRef(new Animated.Value(1)).current
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    // Fade out and scale down
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Fade in and scale up
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }, [selectedType, fadeAnim, scaleAnim])

  return (
    <>

      <CHomeCameraContainer
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      >
        <CHomeCameraFeature />
      </CHomeCameraContainer>

      <View
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          height: 150,
        }}
      >
        <CHomeCollectionButton />
        <CHomeMapDataButton />
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          {selectedType === "photo" ? <CHomeCameraButton /> : <CHomeVideoButton />}
        </Animated.View>
        <CHomeDefaultFolderButton />
        <CHomeLegendButton />
      </View>
    </>
  )
}

export default CHome