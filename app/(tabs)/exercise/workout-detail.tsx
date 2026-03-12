import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SectionTitle } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const exercises = ['Warm-up marching - 2 min', 'Bodyweight squats - 3 sets', 'Low-impact cardio - 6 min', 'Cool down stretch - 4 min'];

export default function WorkoutDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Workout Detail" subtitle="Beginner • 20 min" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Text style={styles.title}>Full Body Activation</Text>
        <Text style={styles.desc}>A guided sequence focused on mobility, stability, and energy recovery.</Text>
      </GlassCard>
      <SectionTitle title="Instructions" />
      <GlassCard>
        <Text style={styles.desc}>Keep breathing rhythm steady, use controlled form, and pause as needed.</Text>
      </GlassCard>
      <SectionTitle title="Exercises List" />
      {exercises.map((item) => (
        <GlassCard key={item}>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.item}>{item}</Text>
          </View>
        </GlassCard>
      ))}
      <PrimaryButton label="Start Workout" icon="play-outline" />
    </ScreenShell>
  );
}
  
const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', color: telehealthColors.textPrimary },
  desc: { color: '#ffffff', lineHeight: 21, marginTop: 6 },
  row: { flexDirection: 'row', gap: 8 },
  bullet: { color: telehealthColors.brandGreen, fontSize: 18, lineHeight: 20 },
  item: { color: telehealthColors.textPrimary, flex: 1, lineHeight: 20 },
});
