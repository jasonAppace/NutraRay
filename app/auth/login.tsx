import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlassCard, InputField, PrimaryButton, SecondaryButton } from '@/components/telehealth/ui';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600' }}
      style={styles.background}
      imageStyle={styles.bgImage}>
      <LinearGradient colors={['rgba(5, 31, 16, 0.36)', 'rgba(8, 28, 17, 0.82)']} style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoWrap}>
            <Image source={require('@/assets/images/nutra-white.png')} style={styles.logo} contentFit="contain" />
          </View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.body}>Sign in to continue your premium telehealth journey.</Text>

          <GlassCard>
            <InputField label="Email" placeholder="you@example.com" />
            <InputField label="Password" placeholder="Your password" />
            <Link href="/auth/forgot-password" style={styles.forgot}>
              Forgot Password?
            </Link>
            <PrimaryButton label="Login" icon="log-in-outline" onPress={() => router.replace('/profile-setup')} />
          </GlassCard>

          <GlassCard style={styles.socialCard}>
            <SecondaryButton label="Continue with Google" />
            <SecondaryButton label="Continue with Apple" />
          </GlassCard>

          <Link href="/auth/signup" style={styles.switchText}>
            New here? Create account
          </Link>
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
  forgot: { color: '#008b00', fontWeight: '600', marginBottom: 8, marginTop: 0 },
  socialCard: { gap: 12, marginTop: 6 },
  switchText: { textAlign: 'center', color: '#ffffff', fontWeight: '600', marginTop: 10 },
});
