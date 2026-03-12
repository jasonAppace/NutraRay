import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';

export default function SubscriptionScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Subscription" subtitle="Premium care membership" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Text style={styles.plan}>Current Plan: Premium Annual</Text>
        <Text style={styles.meta}>Renews on: Aug 14, 2026</Text>
      </GlassCard>
      <PrimaryButton label="Upgrade Plan" icon="rocket-outline" />
      <SecondaryButton label="Manage Billing" />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  plan: { color: 'telehealthColors.textPrimary', fontWeight: '700', fontSize: 16 },
  meta: { color: '#4e6b5f', marginTop: 6 },
});
