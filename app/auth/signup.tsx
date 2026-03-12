import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlassCard, InputField, PrimaryButton, SecondaryButton } from '@/components/telehealth/ui';

export default function SignUpScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600' }}
      style={styles.background}
      imageStyle={styles.bgImage}>
      <LinearGradient colors={['rgba(5, 31, 16, 0.32)', 'rgba(8, 28, 17, 0.84)']} style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoWrap}>
            <Image source={require('@/assets/images/nutra-white.png')} style={styles.logo} contentFit="contain" />
          </View>
          <Text style={styles.title}>Create Premium Account</Text>
          <Text style={styles.body}>Start your guided telehealth experience in minutes.</Text>
          <GlassCard>
            <InputField label="Full Name" placeholder="Alex Morgan" />
            <InputField label="Email" placeholder="you@example.com" />
            <InputField label="Password" placeholder="Create password" />
            <PrimaryButton label="Sign Up" icon="person-add-outline" onPress={() => router.replace('/profile-setup')} />
          </GlassCard>
          <GlassCard style={styles.socialCard}>
            <SecondaryButton label="Sign up with Google" />
            <SecondaryButton label="Sign up with Apple" />
          </GlassCard>
          <Link href="/auth/login" style={styles.switchText}>
            Already have an account? Login
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
  socialCard: { gap: 12, marginTop: 6 },
  switchText: { textAlign: 'center', color: '#ffffff', fontWeight: '600', marginTop: 10 },
});
