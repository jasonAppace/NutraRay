import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedPressable, FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton, SectionTitle } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const recommended = ['Morning Energy Boost', 'Breathing for Calm Focus', 'Metabolic Health Basics'];

export default function VideoDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Video Detail" subtitle="Video-based care" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800' }} style={styles.player} contentFit="cover" />
        <Text style={styles.title}>Doctor-Led Metabolic Health Routine</Text>
        <Text style={styles.meta}>Category: Preventive Care • Duration: 07:45</Text>
        <Text style={styles.desc}>A practical daily protocol that combines movement, hydration, and meal timing habits.</Text>
        <View style={styles.actions}>
          <PrimaryButton label="Save" icon="bookmark-outline" />
          <SecondaryButton label="Share" />
        </View>
      </GlassCard>

      <SectionTitle title="Recommended Videos" />
      {recommended.map((item) => (
        <AnimatedPressable key={item}>
          <GlassCard style={styles.reco}>
            <Ionicons name="play-circle-outline" size={22} color="#008b00" />
            <Text style={styles.recoText}>{item}</Text>
          </GlassCard>
        </AnimatedPressable>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  player: { width: '100%', height: 210, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 19, color: telehealthColors.textPrimary, fontWeight: '700' },
  meta: { color: telehealthColors.textSecondary, fontSize: 12, marginTop: 6 },
  desc: { color: telehealthColors.textSecondary, lineHeight: 21, marginTop: 8, marginBottom: 10 },
  actions: { gap: 9 },
  reco: { flexDirection: 'row', gap: 9, alignItems: 'center' },
  recoText: { color: telehealthColors.textPrimary, fontWeight: '600' },
});
