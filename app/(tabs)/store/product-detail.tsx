import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';

export default function ProductDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Product Detail" subtitle="Supplements" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1608571423539-e951a5a8cfd6?w=1200' }} style={styles.image} contentFit="cover" />
        <Text style={styles.title}>Daily Wellness Pack</Text>
        <Text style={styles.price}>$39.00</Text>
        <Text style={styles.desc}>A complete daily support formula designed for energy, recovery, and focus.</Text>
        <Text style={styles.reviews}>Reviews: 4.8 / 5.0</Text>
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
  title: { color: 'telehealthColors.textPrimary', fontWeight: '700', fontSize: 20 },
  price: { color: '#008b00', fontWeight: '700', marginTop: 6, fontSize: 17 },
  desc: { color: '#4e6b5f', lineHeight: 21, marginTop: 8 },
  reviews: { color: '#4e6b5f', marginTop: 8 },
});
