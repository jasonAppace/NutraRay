import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding/one');
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={['#005900', '#009500', '#f58b19']} style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={require('@/assets/images/nutra-white.png')} style={styles.logo} contentFit="contain" />
      </View>
      <Text style={styles.tagline}>Your Daily Telehealth Guidance Companion</Text>
      <ActivityIndicator color="#fff" size="small" style={styles.loader} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  logoWrap: {
    width: 146,
    height: 146,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  logo: { width: 108, height: 108 },
  tagline: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '600', maxWidth: 280 },
  loader: { marginTop: 20 },
});
