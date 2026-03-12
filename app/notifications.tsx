import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const notifications = [
  { title: 'Workout reminder', text: 'Your 20-min mobility session starts at 7:00 PM.' },
  { title: 'New health video', text: 'Sleep optimization video is now available for you.' },
  { title: 'Wellness tip', text: 'Hydration check: drink 1 glass of water now.' },
];

export default function NotificationsScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Notifications" subtitle="Stay aligned with your daily plan" rightIcon="close" onRightPress={() => router.back()} />
      {notifications.map((item) => (
        <Pressable key={item.title}>
          <GlassCard style={styles.card}>
            <View style={styles.icon}>
              <Ionicons name="notifications-outline" size={18} color="#008b00" />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </GlassCard>
        </Pressable>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#e9f4ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { flex: 1, gap: 4 },
  title: { fontSize: 15, fontWeight: '700', color: telehealthColors.textPrimary },
  text: { color: '#ffffff', lineHeight: 20 },
});
