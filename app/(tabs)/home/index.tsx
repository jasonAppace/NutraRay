import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  Chip,
  FloatingHeader,
  GlassCard,
  PrimaryButton,
  ScreenShell,
  SectionTitle,
} from '@/components/telehealth/ui';
import { healthCategories, recommendedTopics, telehealthColors, trendingTopics } from '@/constants/telehealth';

export default function HomeScreen() {
  return (
    <ScreenShell>
      <FloatingHeader
        subtitle="Good evening, Alex"
        title="Nutra Rays"
        rightIcon="notifications-outline"
        onRightPress={() => router.push('/notifications')}
      />

      <GlassCard>
        <Text style={styles.heroTitle}>Featured Video Guidance</Text>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200' }} style={styles.heroMedia} contentFit="cover" />
        <Text style={styles.cardTitle}>Doctor-led Sleep Recovery</Text>
        <Text style={styles.cardBody}>7 min protocol for better nightly recovery and lower stress.</Text>
        <Link href="/(tabs)/library/video-detail" asChild>
          <PrimaryButton label="Watch Now" icon="play-outline" />
        </Link>
      </GlassCard>

      <SectionTitle title="Health Categories" />
      <View style={styles.chipsWrap}>
        {healthCategories.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </View>

      <SectionTitle title="Trending Topics" />
      {trendingTopics.map((topic) => (
        <Pressable key={topic}>
          <GlassCard>
            <Text style={styles.listTitle}>{topic}</Text>
            <Text style={styles.meta}>Expert reviewed</Text>
          </GlassCard>
        </Pressable>
      ))}

      <SectionTitle title="Recommended For You" />
      {recommendedTopics.map((topic) => (
        <Pressable key={topic}>
          <GlassCard>
            <Text style={styles.listTitle}>{topic}</Text>
            <Text style={styles.meta}>Personalized track</Text>
          </GlassCard>
        </Pressable>
      ))}

      <SectionTitle title="Quick Actions" />
      <View style={styles.quickActions}>
        <Link href="/(tabs)/exercise/workout-detail" asChild>
          <PrimaryButton label="Start Workout" icon="barbell-outline" />
        </Link>
        <Link href="/(tabs)/library/video-detail" asChild>
          <PrimaryButton label="Watch Video" icon="videocam-outline" />
        </Link>
        <Link href="/(tabs)/library/article-detail" asChild>
          <PrimaryButton label="Read Articles" icon="newspaper-outline" />
        </Link>
        <Link href="/notifications" style={styles.notificationLink}>
          Open Notifications
        </Link>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  heroTitle: { fontWeight: '700', color: telehealthColors.textPrimary, marginBottom: 10, fontSize: 17 },
  heroMedia: { width: '100%', height: 170, borderRadius: 12, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: telehealthColors.textPrimary },
  cardBody: { color: '#ffffff', marginVertical: 6, lineHeight: 20 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  listTitle: { fontSize: 15, fontWeight: '700', color: telehealthColors.textPrimary },
  meta: { color: '#ffffff', fontSize: 12, marginTop: 4 },
  quickActions: { gap: 10, marginTop: -4 },
  notificationLink: { textAlign: 'center', color: '#008b00', fontWeight: '600', marginTop: 6 },
});
