import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedPressable, Chip, FloatingHeader, GlassCard, ScreenShell, SearchBar } from '@/components/telehealth/ui';
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

      {contentCards.map((item) => (
        <Link
          key={item.title}
          href={item.type === 'Article' ? '/(tabs)/library/article-detail' : '/(tabs)/library/video-detail'}
          asChild>
          <AnimatedPressable>
            <GlassCard style={styles.card}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800' }} style={styles.thumbnail} contentFit="cover" />
              <View style={styles.cardBody}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.meta}>{item.duration}</Text>
                <Text style={styles.tag}>{item.tag}</Text>
              </View>
              <Ionicons name="bookmark-outline" size={20} color="#4e6b5f" />
            </GlassCard>
          </AnimatedPressable>
        </Link>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  segment: { flexDirection: 'row', gap: 8 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  thumbnail: { width: 78, height: 78, borderRadius: 10 },
  cardBody: { flex: 1, gap: 3 },
  title: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 15 },
  meta: { color: telehealthColors.textSecondary, fontSize: 12 },
  tag: { color: '#008b00', fontWeight: '600', fontSize: 12 },
});
