import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton, ScreenShell } from '@/components/telehealth/ui';

export default function OrderSuccessScreen() {
  return (
    <ScreenShell withScroll={false}>
      <View style={styles.container}>
        <Text style={styles.emoji}>✅</Text>
        <Text style={styles.title}>Order Confirmed</Text>
        <Text style={styles.body}>Your wellness items are on the way. Thank you for choosing NutraRay.</Text>
        <PrimaryButton label="Back to Store" icon="arrow-back" onPress={() => router.replace('/(tabs)/store')} />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  emoji: { fontSize: 44 },
  title: { color: 'telehealthColors.textPrimary', fontSize: 30, fontWeight: '700' },
  body: { color: '#4e6b5f', textAlign: 'center', lineHeight: 22, maxWidth: 280 },
});
