import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlassCard, InputField, PrimaryButton, SecondaryButton } from '@/components/telehealth/ui';

export default function ForgotPasswordScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=1600' }}
      style={styles.background}
      imageStyle={styles.bgImage}>
      <LinearGradient colors={['rgba(5, 31, 16, 0.36)', 'rgba(8, 28, 17, 0.82)']} style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoWrap}>
            <Image source={require('@/assets/images/nutra-white.png')} style={styles.logo} contentFit="contain" />
          </View>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.body}>Enter your email and we will send secure reset instructions.</Text>

          <GlassCard style={styles.card}>
            <InputField label="Email" placeholder="you@example.com" />
            <PrimaryButton label="Send Reset Link" icon="mail-outline" />
          </GlassCard>

          <SecondaryButton label="Back to Login" onPress={() => router.back()} />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  bgImage: { opacity: 0.95 },
  overlay: { flex: 1 },
  safeArea: { flex: 1, paddingHorizontal: 18, justifyContent: 'center', paddingBottom: 28, gap: 14 },
  logoWrap: { alignItems: 'center', marginBottom: 6 },
  logo: { width: 120, height: 46 },
  title: { fontSize: 31, fontWeight: '700', color: '#ffffff', marginBottom: 2 },
  body: { color: '#d9ece0', marginTop: -6, marginBottom: 10 },
  card: { gap: 16 },
});
