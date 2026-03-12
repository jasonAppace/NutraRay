import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { AnimatedPressable, FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';

const options = ['Notification settings', 'Privacy policy', 'Terms of service', 'Help center'];

export default function SettingsScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Settings" subtitle="Preferences and legal" rightIcon="arrow-back" onRightPress={() => router.back()} />
      {options.map((item) => (
        <AnimatedPressable key={item}>
          <GlassCard>
            <Text style={styles.item}>{item}</Text>
          </GlassCard>
        </AnimatedPressable>
      ))}
      <Link href="/notifications" style={styles.link}>
        Open Notifications
      </Link>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  item: { color: 'telehealthColors.textPrimary', fontWeight: '600' },
  link: { textAlign: 'center', color: '#008b00', fontWeight: '600', marginTop: 4 },
});
