import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Chip, FloatingHeader, GlassCard, ScreenShell, SearchBar } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const contentCards = [
  { title: 'Stress Reset Fundamentals', duration: '08:20', type: 'Video', tag: 'Mental Health' },
  { title: 'Protein Planning 101', duration: '06:45', type: 'Video', tag: 'Nutrition' },
  { title: 'Desk Mobility Quick Guide', duration: '05:30', type: 'Article', tag: 'Fitness' },
];

export default function LibraryScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Guidance Library" subtitle="Discover trusted health content" />
      <SearchBar placeholder="Search videos, articles, saved..." />
      <View style={styles.segment}>
        <Chip label="Videos" active />
        <Chip label="Articles" />
        <Chip label="Saved" />
      </View>

      <View style={styles.grid}>
        {contentCards.map((item) => (
          <Link
            key={item.title}
            href={item.type === 'Article' ? '/(tabs)/library/article-detail' : '/(tabs)/library/video-detail'}
            asChild>
            <Pressable style={styles.gridItem}>
              <GlassCard style={styles.card}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800' }} style={styles.thumbnail} contentFit="cover" />
                <View style={styles.cardBody}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.meta}>{item.duration}</Text>
                  <Text style={styles.tag}>{item.tag}</Text>
                </View>
                <Ionicons name="bookmark-outline" size={18} color="#4e6b5f" />
              </GlassCard>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  segment: { flexDirection: 'row', gap: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  gridItem: { width: '48%' },
  card: { gap: 8 },
  thumbnail: { width: '100%', height: 100, borderRadius: 8 },
  cardBody: { gap: 3, minHeight: 66 },
  title: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 13 },
  meta: { color: telehealthColors.textSecondary, fontSize: 12 },
  tag: { color: '#008b00', fontWeight: '600', fontSize: 12 },
});
