import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Chip, FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const products = [
  { name: 'Daily Wellness Pack', price: '$39', rating: '4.8' },
  { name: 'Home Resistance Kit', price: '$59', rating: '4.7' },
  { name: 'Hydration Plus', price: '$25', rating: '4.6' },
];

export default function StoreScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Store" subtitle="Premium health essentials" />
      <View style={styles.categories}>
        <Chip label="Supplements" active />
        <Chip label="Fitness Equipment" />
        <Chip label="Wellness Products" />
      </View>
      <View style={styles.grid}>
        {products.map((item) => (
          <Link key={item.name} href="/(tabs)/store/product-detail" asChild>
            <Pressable style={styles.gridItem}>
              <GlassCard style={styles.card}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200' }} style={styles.image} contentFit="cover" />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.meta}>{item.price} • ⭐ {item.rating}</Text>
                </View>
              </GlassCard>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  gridItem: { width: '48%' },
  card: { gap: 8 },
  image: { width: '100%', height: 110, borderRadius: 8 },
  info: { gap: 4 },
  name: { color: telehealthColors.textPrimary, fontSize: 13, fontWeight: '700' },
  meta: { color: telehealthColors.textSecondary, fontSize: 12 },
});
