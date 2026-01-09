import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

const CHomeVideoButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <View style={styles.redDot} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CHomeVideoButton;

const styles = StyleSheet.create({
  outer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
