import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell, SecondaryButton } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

export default function ArticleDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Article Detail" subtitle="Evidence-based reading" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200' }} style={styles.hero} contentFit="cover" />
        <Text style={styles.title}>A Practical Guide to Better Sleep Quality</Text>
        <Text style={styles.meta}>Reading time: 6 min</Text>
        <Text style={styles.paragraph}>
          Consistent sleep timing supports hormone balance, cognitive clarity, and emotional regulation.
          Start by reducing late-night stimulation and creating a calm pre-sleep ritual.
        </Text>
        <Text style={styles.paragraph}>
          Build momentum using a simple checklist: dim lights, avoid heavy meals, and maintain a cool room
          environment. Incremental habits create lasting outcomes.
        </Text>
      </GlassCard>

      <View style={styles.floatActions}>
        <SecondaryButton label="Bookmark" />
        <SecondaryButton label="Share" />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', height: 220, borderRadius: 12, marginBottom: 12 },
  title: { color: telehealthColors.textPrimary, fontSize: 20, fontWeight: '700' },
  meta: { color: telehealthColors.textSecondary, marginTop: 6, marginBottom: 9 },
  paragraph: { color: '#325142', lineHeight: 22, marginBottom: 10 },
  floatActions: { flexDirection: 'row', gap: 10 },
});
