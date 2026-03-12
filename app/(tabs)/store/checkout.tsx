import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FloatingHeader, GlassCard, InputField, PrimaryButton, ScreenShell, SectionTitle } from '@/components/telehealth/ui';

export default function CheckoutScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Checkout" subtitle="Secure order placement" rightIcon="arrow-back" onRightPress={() => router.back()} />

      <SectionTitle title="Shipping Details" />
      <GlassCard>
        <InputField label="Full Name" placeholder="Alex Morgan" />
        <InputField label="Address" placeholder="123 Wellness Ave" />
        <InputField label="City" placeholder="San Francisco" />
        <InputField label="Postal Code" placeholder="94103" />
      </GlassCard>

      <SectionTitle title="Payment Method" />
      <GlassCard>
        <InputField label="Card Number" placeholder="**** **** **** 4837" />
        <InputField label="Expiry" placeholder="09 / 29" />
        <InputField label="CVV" placeholder="***" />
      </GlassCard>

      <Link href="/(tabs)/store/order-success" asChild>
        <PrimaryButton label="Place Order" icon="checkmark-outline" />
      </Link>
      <Text style={styles.note}>Prototype checkout only. No real payment processing.</Text>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  note: { color: '#4e6b5f', textAlign: 'center', marginTop: 6, fontSize: 12 },
});
