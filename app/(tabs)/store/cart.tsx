import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';

const items = [
  { name: 'Daily Wellness Pack', qty: 1, price: '$39' },
  { name: 'Hydration Plus', qty: 2, price: '$50' },
];

export default function CartScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Cart" subtitle="Review your items" rightIcon="arrow-back" onRightPress={() => router.back()} />
      {items.map((item) => (
        <GlassCard key={item.name}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.row}>
            <Text style={styles.meta}>Qty: {item.qty}</Text>
            <Text style={styles.meta}>{item.price}</Text>
          </View>
          <SecondaryButton label="Remove item" />
        </GlassCard>
      ))}
      <GlassCard>
        <Text style={styles.total}>Total Cost: $89.00</Text>
      </GlassCard>
      <Link href="/(tabs)/store/checkout" asChild>
        <PrimaryButton label="Checkout" icon="arrow-forward" />
      </Link>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  name: { color: 'telehealthColors.textPrimary', fontWeight: '700', fontSize: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 },
  meta: { color: '#4e6b5f' },
  total: { color: 'telehealthColors.textPrimary', fontWeight: '700', fontSize: 18 },
});
