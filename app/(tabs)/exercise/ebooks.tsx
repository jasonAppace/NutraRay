import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const books = [
  { title: 'Nutrition Reset Guide', category: 'Nutrition', price: 'Free' },
  { title: 'Mindful Stress Protocol', category: 'Mental Health', price: '$8.99' },
  { title: 'Home Fitness Blueprint', category: 'Fitness', price: '$5.99' },
  { title: 'Sleep Recovery Handbook', category: 'Sleep', price: 'Free' },
];

export default function EbookLibraryScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="eBook Library" subtitle="Read and download care guides" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <View style={styles.grid}>
        {books.map((book) => (
          <Pressable key={book.title} style={styles.cardWrap}>
            <GlassCard style={styles.bookCard}>
              <View style={styles.cover} />
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.meta}>{book.category} • {book.price}</Text>
              <SecondaryButton label="Read Online" />
              <SecondaryButton label="Download" />
            </GlassCard>
          </Pressable>
        ))}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  cardWrap: { width: '48%' },
  bookCard: { gap: 7 },
  cover: { width: '100%', height: 92, borderRadius: 8, backgroundColor: '#d9eadf' },
  title: { fontSize: 14, color: telehealthColors.textPrimary, fontWeight: '700' },
  meta: { fontSize: 11, color: telehealthColors.textSecondary },
});
