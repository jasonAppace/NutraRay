import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

export default function ProductDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Product Detail" subtitle="Supplements" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1608571423539-e951a5a8cfd6?w=1200' }} style={styles.image} contentFit="cover" />
        <View style={styles.metaRow}>
          <Text style={styles.badge}>Best Seller</Text>
          <Text style={styles.rating}>⭐ 4.8 (264 reviews)</Text>
        </View>
        <Text style={styles.title}>Daily Wellness Pack</Text>
        <Text style={styles.price}>$39.00</Text>
        <Text style={styles.desc}>A complete daily support formula designed for energy, recovery, and focus.</Text>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1550573105-127982bb930c?w=1200' }} style={styles.contentImage} contentFit="cover" />
        <View style={styles.points}>
          <View style={styles.pointRow}>
            <Ionicons name="checkmark-circle" size={16} color={telehealthColors.brandGreen} />
            <Text style={styles.pointText}>Clinically reviewed ingredients</Text>
          </View>
          <View style={styles.pointRow}>
            <Ionicons name="checkmark-circle" size={16} color={telehealthColors.brandGreen} />
            <Text style={styles.pointText}>30-day supply • vegan capsules</Text>
          </View>
        </View>
      </GlassCard>
      <GlassCard style={styles.shippingCard}>
        <Text style={styles.shippingTitle}>Delivery & Return</Text>
        <Text style={styles.shippingText}>Free shipping over $50 • 7-day easy return policy</Text>
      </GlassCard>
      <Link href="/(tabs)/store/cart" asChild>
        <PrimaryButton label="Add to Cart" icon="cart-outline" />
      </Link>
      <Link href="/(tabs)/store/checkout" asChild>
        <SecondaryButton label="Buy Now" />
      </Link>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 240, borderRadius: 12, marginBottom: 12 },
  contentImage: { width: '100%', height: 180, borderRadius: 10, marginVertical: 12 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: {
    backgroundColor: '#e9f4ed',
    color: telehealthColors.brandGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '700',
  },
  rating: { fontSize: 12, color: telehealthColors.textSecondary, fontWeight: '600' },
  title: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 20 },
  price: { color: '#008b00', fontWeight: '700', marginTop: 6, fontSize: 17 },
  desc: { color: '#4e6b5f', lineHeight: 21, marginTop: 8 },
  points: { gap: 7, marginTop: 10 },
  pointRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  pointText: { color: telehealthColors.textPrimary, fontSize: 13 },
  shippingCard: { gap: 6 },
  shippingTitle: { color: telehealthColors.textPrimary, fontWeight: '700' },
  shippingText: { color: telehealthColors.textSecondary, lineHeight: 20 },
});
