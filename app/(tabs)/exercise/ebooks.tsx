import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FloatingHeader, GlassCard, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const books = [
  {
    title: 'Nutrition Reset Guide',
    category: 'Nutrition',
    price: 'Free',
    pages: 42,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
  },
  {
    title: 'Mindful Stress Protocol',
    category: 'Mental Health',
    price: '$8.99',
    pages: 56,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  },
  {
    title: 'Home Fitness Blueprint',
    category: 'Fitness',
    price: '$5.99',
    pages: 48,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
  },
  {
    title: 'Sleep Recovery Handbook',
    category: 'Sleep',
    price: 'Free',
    pages: 34,
    image: 'https://images.unsplash.com/photo-1455642305367-68834a9e7cb9?w=800',
  },
];

export default function EbookLibraryScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="eBook Library" subtitle="Read and download care guides" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <View style={styles.grid}>
        {books.map((book) => (
          <Pressable key={book.title} style={styles.cardWrap}>
            <GlassCard style={styles.bookCard}>

              {/* Cover photo */}
              <View style={styles.coverWrap}>
                <Image source={{ uri: book.image }} style={styles.coverImage} contentFit="cover" />
                <View style={styles.coverOverlay}>
                  <Text style={styles.coverTitle}>{book.category}</Text>
                </View>
              </View>

              <View style={styles.topRow}>
                <Text style={styles.pricePill}>{book.price}</Text>
                <View style={styles.pagesRow}>
                  <Ionicons name="document-text-outline" size={12} color={telehealthColors.textSecondary} />
                  <Text style={styles.pages}>{book.pages} pages</Text>
                </View>
              </View>

              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.meta}>Clinical quick-read format</Text>

              <View style={styles.actions}>
                <SecondaryButton label="Read" />
                <SecondaryButton label="Download" />
              </View>
            </GlassCard>
          </Pressable>
        ))}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  grid: { gap: 14 },
  cardWrap: { width: '100%' },
  bookCard: { gap: 8 },
  coverWrap: { borderRadius: 10, overflow: 'hidden', height: 140, position: 'relative' },
  coverImage: { width: '100%', height: '100%' },
  coverOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(6,28,16,0.52)',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  coverTitle: { color: '#fff', fontWeight: '700', fontSize: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  pricePill: {
    fontSize: 11,
    color: '#fff',
    backgroundColor: telehealthColors.brandGreen,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    fontWeight: '700',
  },
  pagesRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  pages: { fontSize: 11, color: telehealthColors.textSecondary, fontWeight: '600' },
  title: { fontSize: 14, color: telehealthColors.textPrimary, fontWeight: '700' },
  meta: { fontSize: 11, color: telehealthColors.textSecondary },
  actions: { flexDirection: 'row', gap: 8 },
});
