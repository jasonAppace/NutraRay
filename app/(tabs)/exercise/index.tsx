import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Chip, FloatingHeader, GlassCard, ScreenShell, SectionTitle } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const workouts = [
  { name: 'Beginner Core Stability', duration: '16 min' },
  { name: 'Weight Loss Circuit', duration: '24 min' },
  { name: 'Cardio Burn Lite', duration: '18 min' },
  { name: 'Yoga Recovery Flow', duration: '20 min' },
];

export default function ExerciseScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Exercise" subtitle="Movement guidance for all levels" />
      <SectionTitle title="Workout Categories" />
      <View style={styles.chips}>
        <Chip label="Beginner" active />
        <Chip label="Weight Loss" />
        <Chip label="Cardio" />
        <Chip label="Yoga" />
      </View>

      <View style={styles.grid}>
        {workouts.map((item) => (
          <Link key={item.name} href="/(tabs)/exercise/workout-detail" asChild>
            <Pressable style={styles.gridItem}>
              <GlassCard style={styles.card}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900' }} style={styles.thumb} contentFit="cover" />
                <View style={styles.info}>
                   <Text style={styles.name}>{item.name}</Text>
                   <Text style={styles.duration}>{item.duration}</Text>
                </View>
              </GlassCard>
            </Pressable>
          </Link>
        ))}
      </View>

      <SectionTitle title="eBook Library" action="Browse all" />
      <Link href="/(tabs)/exercise/ebooks" asChild>
        <Pressable>
          <GlassCard>
            <Text style={styles.name}>Open eBook Collection</Text>
            <Text style={styles.duration}>Guides, protocols, and practical telehealth playbooks.</Text>
          </GlassCard>
        </Pressable>
      </Link>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  gridItem: { width: '48%' },
  card: { gap: 8 },
  thumb: { width: '100%', height: 100, borderRadius: 8 },
  info: { gap: 4 },
  name: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 13 },
  duration: { color: telehealthColors.textSecondary, fontSize: 12 },
});
