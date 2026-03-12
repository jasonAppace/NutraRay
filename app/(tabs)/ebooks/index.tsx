import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const books = [
  {
    id: '01',
    title: 'Nutrition Reset Guide',
    category: 'Nutrition',
    price: 'Free',
    pages: 42,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200',
    descriptions: [
      'A science-backed reset protocol for everyday eating habits.',
      'Covers macro balance, meal timing, and anti-inflammatory foods.',
      'Designed for busy professionals seeking sustainable results.',
    ],
  },
  {
    id: '02',
    title: 'Mindful Stress Protocol',
    category: 'Mental Health',
    price: '$8.99',
    pages: 56,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200',
    descriptions: [
      'Evidence-based techniques to lower cortisol and restore calm.',
      'Includes daily 5-minute breathwork exercises with guidance.',
      'Written by licensed stress and anxiety specialists.',
    ],
  },
  {
    id: '03',
    title: 'Home Fitness Blueprint',
    category: 'Fitness',
    price: '$5.99',
    pages: 48,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200',
    descriptions: [
      'Zero-equipment workout plans for all fitness levels.',
      'Progressive weekly structure to build strength at home.',
      'Includes warm-up, cooldown, and recovery protocols.',
    ],
  },
  {
    id: '04',
    title: 'Sleep Recovery Handbook',
    category: 'Sleep',
    price: 'Free',
    pages: 34,
    image: 'https://images.unsplash.com/photo-1455642305367-68834a9e7cb9?w=1200',
    descriptions: [
      'Fix your sleep architecture with clinically studied methods.',
      'Covers light, temperature, and pre-sleep routine optimisation.',
      'Includes a 7-day sleep reset challenge with tracking sheet.',
    ],
  },
];

export default function EbooksScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="eBook Library" subtitle="Premium telehealth reading" />

      {books.map((book) => (
        <Pressable key={book.id} activeOpacity={0.92}>
          <GlassCard style={styles.card}>

            {/* Cover image */}
            <View style={styles.coverWrap}>
              <Image source={{ uri: book.image }} style={styles.coverImage} contentFit="cover" />
              <LinearGradient
                colors={['transparent', 'rgba(6,26,14,0.72)']}
                style={styles.coverGradient}
              />
              {/* Book number badge */}
              <View style={styles.bookBadge}>
                <Text style={styles.bookBadgeText}>Book {book.id}</Text>
              </View>
              {/* Category + price bottom bar */}
              <View style={styles.coverFooter}>
                <Text style={styles.coverCategory}>{book.category}</Text>
                <Text style={styles.pricePill}>{book.price}</Text>
              </View>
            </View>

            {/* Book info */}
            <View style={styles.body}>
              <Text style={styles.title}>{book.title}</Text>

              {/* 2–3 description lines */}
              <View style={styles.descList}>
                {book.descriptions.map((line, i) => (
                  <View key={i} style={styles.descRow}>
                    <View style={styles.descDot} />
                    <Text style={styles.descText}>{line}</Text>
                  </View>
                ))}
              </View>

              {/* Meta row */}
              <View style={styles.metaRow}>
                <Ionicons name="document-text-outline" size={13} color={telehealthColors.textSecondary} />
                <Text style={styles.metaText}>{book.pages} pages</Text>
                <View style={styles.metaDivider} />
                <Ionicons name="time-outline" size={13} color={telehealthColors.textSecondary} />
                <Text style={styles.metaText}>~{Math.ceil(book.pages / 10)} min read</Text>
              </View>

              {/* Action buttons */}
              <View style={styles.actions}>
                <Pressable style={styles.actionBtn} activeOpacity={0.8}>
                  <LinearGradient colors={['#005900', '#009500']} style={styles.actionGradient}>
                    <Ionicons name="book-outline" size={17} color="#fff" />
                    <Text style={styles.actionLabel}>Read</Text>
                  </LinearGradient>
                </Pressable>
                <Pressable style={styles.actionBtn} activeOpacity={0.8}>
                  <LinearGradient colors={['#f26522', '#f58b19']} style={styles.actionGradient}>
                    <Ionicons name="play-circle-outline" size={17} color="#fff" />
                    <Text style={styles.actionLabel}>Play</Text>
                  </LinearGradient>
                </Pressable>
                <Pressable style={styles.downloadBtn} activeOpacity={0.8}>
                  <Ionicons name="cloud-download-outline" size={18} color={telehealthColors.brandGreen} />
                </Pressable>
              </View>
            </View>

          </GlassCard>
        </Pressable>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  card: { gap: 0, padding: 0, overflow: 'hidden' },

  /* Cover */
  coverWrap: { height: 190, position: 'relative' },
  coverImage: { width: '100%', height: '100%' },
  coverGradient: { ...StyleSheet.absoluteFillObject },
  bookBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  bookBadgeText: { color: '#fff', fontWeight: '800', fontSize: 12, letterSpacing: 0.5 },
  coverFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  coverCategory: { color: '#fff', fontWeight: '700', fontSize: 13 },
  pricePill: {
    color: '#fff',
    backgroundColor: telehealthColors.brandGreen,
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },

  /* Body */
  body: { padding: 14, gap: 10 },
  title: { color: telehealthColors.textPrimary, fontWeight: '800', fontSize: 17 },
  descList: { gap: 6 },
  descRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  descDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: telehealthColors.brandGreen,
    marginTop: 5,
    flexShrink: 0,
  },
  descText: { color: telehealthColors.textSecondary, fontSize: 13, lineHeight: 19, flex: 1 },

  /* Meta */
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  metaText: { color: telehealthColors.textSecondary, fontSize: 12 },
  metaDivider: { width: 1, height: 12, backgroundColor: '#c8d8cc', marginHorizontal: 4 },

  /* Actions */
  actions: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  actionBtn: { flex: 1, borderRadius: 10, overflow: 'hidden' },
  actionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
  },
  actionLabel: { color: '#fff', fontWeight: '700', fontSize: 13 },
  downloadBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c8dccf',
    backgroundColor: '#eaf4ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
