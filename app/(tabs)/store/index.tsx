import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedPressable, Chip, FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';

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
      {products.map((item) => (
        <Link key={item.name} href="/(tabs)/store/product-detail" asChild>
          <AnimatedPressable>
            <GlassCard style={styles.card}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200' }} style={styles.image} contentFit="cover" />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.meta}>{item.price} • ⭐ {item.rating}</Text>
              </View>
            </GlassCard>
          </AnimatedPressable>
        </Link>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  card: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  image: { width: 82, height: 82, borderRadius: 10 },
  info: { gap: 4 },
  name: { color: 'telehealthColors.textPrimary', fontSize: 15, fontWeight: '700' },
  meta: { color: '#4e6b5f', fontSize: 12 },
});
