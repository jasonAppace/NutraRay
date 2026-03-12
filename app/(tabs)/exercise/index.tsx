import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Chip, FloatingHeader, GlassCard, ScreenShell, SectionTitle } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const workouts = [
  { name: 'Beginner Core Stability', duration: '16 min', level: 'Beginner' },
  { name: 'Weight Loss Circuit', duration: '24 min', level: 'Intermediate' },
  { name: 'Cardio Burn Lite', duration: '18 min', level: 'Beginner' },
  { name: 'Yoga Recovery Flow', duration: '20 min', level: 'All levels' },
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
                  <View style={styles.metaTop}>
                    <Text style={styles.level}>{item.level}</Text>
                    <View style={styles.durationWrap}>
                      <Ionicons name="time-outline" size={12} color={telehealthColors.textSecondary} />
                      <Text style={styles.duration}>{item.duration}</Text>
                    </View>
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.rowBottom}>
                    <Text style={styles.calories}>~120 kcal</Text>
                    <Ionicons name="chevron-forward" size={14} color={telehealthColors.brandGreen} />
                  </View>
                </View>
              </GlassCard>
            </Pressable>
          </Link>
        ))}
      </View>

      <SectionTitle title="eBook Library" action="Browse all" />
      <Link href="/(tabs)/exercise/ebooks" asChild>
        <Pressable>
          <GlassCard style={styles.ebookCard}>
            <View style={styles.ebookHeader}>
              <Text style={styles.name}>Open eBook Collection</Text>
              <Ionicons name="book-outline" size={18} color={telehealthColors.brandGreen} />
            </View>
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
  info: { gap: 6 },
  metaTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  level: {
    fontSize: 10,
    color: '#fff',
    backgroundColor: telehealthColors.brandGreen,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    fontWeight: '700',
  },
  durationWrap: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  name: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 13 },
  duration: { color: telehealthColors.textSecondary, fontSize: 12 },
  rowBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  calories: { color: telehealthColors.textSecondary, fontSize: 11, fontWeight: '600' },
  ebookCard: { gap: 8 },
  ebookHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
