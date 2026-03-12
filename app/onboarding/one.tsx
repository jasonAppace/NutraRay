import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/telehealth/ui';

export default function OnboardingOne() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600' }}
      style={styles.background}>
      <LinearGradient colors={['rgba(5,20,12,0.15)', 'rgba(5,20,12,0.8)']} style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Discover Expert Health Guidance</Text>
            <Text style={styles.body}>
              Curated recommendations from trusted telehealth professionals in a calm and premium mobile experience.
            </Text>
            <View style={styles.progressWrap}>
              <View style={[styles.dot, styles.active]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <PrimaryButton label="Get Started" icon="arrow-forward" onPress={() => router.push('/onboarding/two')} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1 },
  container: { flex: 1, justifyContent: 'flex-end', padding: 18, paddingBottom: 30 },
  content: {
    gap: 18,
    backgroundColor: 'rgba(4, 26, 15, 0.3)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  title: { fontSize: 30, fontWeight: '700', color: '#ffffff', lineHeight: 38 },
  body: { fontSize: 15, lineHeight: 23, color: '#d8e9de' },
  progressWrap: { flexDirection: 'row', gap: 9, alignSelf: 'center' },
  dot: { width: 8, height: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.35)' },
  active: { width: 24, backgroundColor: '#ffffff' },
});
