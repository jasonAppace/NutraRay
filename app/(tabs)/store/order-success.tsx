import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { GlassCard, PrimaryButton, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const orderDetails = [
  { label: 'Order ID',       value: '#NR-204891' },
  { label: 'Items',          value: '2 products' },
  { label: 'Total Paid',     value: '$89.00' },
  { label: 'Shipping',       value: 'Free standard' },
  { label: 'Est. Delivery',  value: '3 – 5 business days' },
];

export default function OrderSuccessScreen() {
  /* Entry animations */
  const iconScale   = useSharedValue(0);
  const cardOpacity = useSharedValue(0);
  const cardTransY  = useSharedValue(30);

  useEffect(() => {
    iconScale.value = withDelay(200, withSpring(1, { damping: 12, stiffness: 180 }));
    cardOpacity.value = withDelay(500, withTiming(1, { duration: 450, easing: Easing.out(Easing.quad) }));
    cardTransY.value  = withDelay(500, withTiming(0,  { duration: 450, easing: Easing.out(Easing.quad) }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }],
  }));
  const cardStyle = useAnimatedStyle(() => ({
    opacity: cardOpacity.value,
    transform: [{ translateY: cardTransY.value }],
  }));

  return (
    <LinearGradient colors={['#02420f', '#006612', '#28a745']} style={styles.gradient}>
      <SafeAreaView style={styles.safe}>

        {/* Top check icon */}
        <View style={styles.top}>
          <Animated.View style={[styles.iconRing, iconStyle]}>
            <LinearGradient colors={['#ffffff22', '#ffffff11']} style={styles.iconRingInner}>
              <Ionicons name="checkmark" size={52} color="#fff" />
            </LinearGradient>
          </Animated.View>
          <Text style={styles.title}>Order Confirmed!</Text>
          <Text style={styles.subtitle}>
            Your wellness essentials are packed and on their way.
          </Text>
        </View>

        {/* Order details card */}
        <Animated.View style={[styles.cardWrap, cardStyle]}>
          <GlassCard style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Ionicons name="receipt-outline" size={17} color={telehealthColors.brandGreen} />
              <Text style={styles.summaryTitle}>Order Summary</Text>
            </View>
            {orderDetails.map((row, i) => (
              <View key={row.label} style={[styles.row, i < orderDetails.length - 1 && styles.rowBorder]}>
                <Text style={styles.rowLabel}>{row.label}</Text>
                <Text style={[styles.rowValue, row.label === 'Total Paid' && styles.totalValue]}>
                  {row.value}
                </Text>
              </View>
            ))}
          </GlassCard>

          {/* Shipping note */}
          <GlassCard style={styles.shippingCard}>
            <View style={styles.shippingRow}>
              <View style={styles.shippingIcon}>
                <Ionicons name="car-outline" size={18} color={telehealthColors.brandGreen} />
              </View>
              <View style={styles.shippingText}>
                <Text style={styles.shippingTitle}>Tracking number sent</Text>
                <Text style={styles.shippingBody}>Check your email at alex@nutraray.app for live tracking updates.</Text>
              </View>
            </View>
          </GlassCard>

          {/* CTAs */}
          <PrimaryButton
            label="Back to Store"
            icon="storefront-outline"
            onPress={() => router.replace('/(tabs)/store')}
          />
          <SecondaryButton
            label="View My Orders"
            onPress={() => router.replace('/(tabs)/store/cart')}
          />
        </Animated.View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1, paddingHorizontal: 18, paddingTop: 24, paddingBottom: 16, gap: 24 },

  top: { alignItems: 'center', gap: 14 },
  iconRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
    overflow: 'hidden',
  },
  iconRingInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: '#ffffff', fontSize: 30, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: 'rgba(255,255,255,0.78)', fontSize: 15, textAlign: 'center', lineHeight: 22, maxWidth: 280 },

  cardWrap: { gap: 12 },
  summaryCard: { gap: 0 },
  summaryHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  summaryTitle: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 15 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#deeee4' },
  rowLabel: { color: telehealthColors.textSecondary, fontSize: 13 },
  rowValue: { color: telehealthColors.textPrimary, fontWeight: '600', fontSize: 13 },
  totalValue: { color: telehealthColors.brandGreen, fontWeight: '800', fontSize: 15 },

  shippingCard: { gap: 0 },
  shippingRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  shippingIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#e8f4ec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shippingText: { flex: 1, gap: 4 },
  shippingTitle: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 14 },
  shippingBody: { color: telehealthColors.textSecondary, lineHeight: 19, fontSize: 12 },
});
