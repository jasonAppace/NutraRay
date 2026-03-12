import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const galleryImages = [
  'https://images.unsplash.com/photo-1608571423539-e951a5a8cfd6?w=1200',
  'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?w=1200',
  'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1200',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200',
];

export default function ProductDetailScreen() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <ScreenShell>
      <FloatingHeader title="Product Detail" subtitle="Supplements" rightIcon="arrow-back" onRightPress={() => router.back()} />

      {/* Hero image */}
      <GlassCard style={styles.heroCard}>
        <Image source={{ uri: galleryImages[activeImg] }} style={styles.heroImage} contentFit="cover" />
        {/* Thumbnail strip */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.thumbStrip}>
          {galleryImages.map((uri, i) => (
            <TouchableOpacity key={i} onPress={() => setActiveImg(i)} activeOpacity={0.8}>
              <Image
                source={{ uri }}
                style={[styles.thumb, activeImg === i && styles.thumbActive]}
                contentFit="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </GlassCard>

      {/* Info card */}
      <GlassCard>
        <View style={styles.metaRow}>
          <Text style={styles.badge}>Best Seller</Text>
          <Text style={styles.rating}>⭐ 4.8 (264 reviews)</Text>
        </View>
        <Text style={styles.title}>Daily Wellness Pack</Text>
        <Text style={styles.price}>$39.00</Text>
        <Text style={styles.desc}>A complete daily support formula designed for energy, recovery, and focus.</Text>

        {/* Lifestyle banner image */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200' }}
          style={styles.lifestyleImage}
          contentFit="cover"
        />

        <View style={styles.points}>
          <View style={styles.pointRow}>
            <Ionicons name="checkmark-circle" size={16} color={telehealthColors.brandGreen} />
            <Text style={styles.pointText}>Clinically reviewed ingredients</Text>
          </View>
          <View style={styles.pointRow}>
            <Ionicons name="checkmark-circle" size={16} color={telehealthColors.brandGreen} />
            <Text style={styles.pointText}>30-day supply • vegan capsules</Text>
          </View>
          <View style={styles.pointRow}>
            <Ionicons name="checkmark-circle" size={16} color={telehealthColors.brandGreen} />
            <Text style={styles.pointText}>Third-party lab tested for purity</Text>
          </View>
        </View>
      </GlassCard>

      <GlassCard style={styles.shippingCard}>
        <View style={styles.pointRow}>
          <Ionicons name="car-outline" size={17} color={telehealthColors.brandGreen} />
          <Text style={styles.shippingTitle}>Free shipping over $50</Text>
        </View>
        <View style={styles.pointRow}>
          <Ionicons name="refresh-outline" size={17} color={telehealthColors.brandGreen} />
          <Text style={styles.shippingText}>7-day easy return policy</Text>
        </View>
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
  heroCard: { gap: 10 },
  heroImage: { width: '100%', height: 260, borderRadius: 10 },
  thumbStrip: { gap: 8, paddingVertical: 2 },
  thumb: { width: 64, height: 64, borderRadius: 8, borderWidth: 2, borderColor: 'transparent' },
  thumbActive: { borderColor: telehealthColors.brandGreen },
  lifestyleImage: { width: '100%', height: 160, borderRadius: 10, marginVertical: 10 },
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
  points: { gap: 8, marginTop: 4 },
  pointRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pointText: { color: telehealthColors.textPrimary, fontSize: 13 },
  shippingCard: { gap: 10 },
  shippingTitle: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 13 },
  shippingText: { color: telehealthColors.textSecondary, fontSize: 13 },
});
