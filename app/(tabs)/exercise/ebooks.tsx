import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { FloatingHeader, GlassCard, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const books = [
  { title: 'Nutrition Reset Guide', category: 'Nutrition', price: 'Free', pages: 42 },
  { title: 'Mindful Stress Protocol', category: 'Mental Health', price: '$8.99', pages: 56 },
  { title: 'Home Fitness Blueprint', category: 'Fitness', price: '$5.99', pages: 48 },
  { title: 'Sleep Recovery Handbook', category: 'Sleep', price: 'Free', pages: 34 },
];

export default function EbookLibraryScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="eBook Library" subtitle="Read and download care guides" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <View style={styles.grid}>
        {books.map((book) => (
          <Pressable key={book.title} style={styles.cardWrap}>
            <GlassCard style={styles.bookCard}>
              <LinearGradient colors={['#f0f7f2', '#dfeee4']} style={styles.cover}>
                <Ionicons name="book-outline" size={24} color={telehealthColors.brandGreen} />
                <Text style={styles.coverCategory}>{book.category}</Text>
              </LinearGradient>
              <View style={styles.topRow}>
                <Text style={styles.pricePill}>{book.price}</Text>
                <Text style={styles.pages}>{book.pages} pages</Text>
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
  cover: {
    width: '100%',
    height: 92,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  coverCategory: { color: telehealthColors.textPrimary, fontWeight: '600', fontSize: 11 },
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
  pages: { fontSize: 11, color: telehealthColors.textSecondary, fontWeight: '600' },
  title: { fontSize: 14, color: telehealthColors.textPrimary, fontWeight: '700' },
  meta: { fontSize: 11, color: telehealthColors.textSecondary, minHeight: 28 },
  actions: { gap: 6 },
});
