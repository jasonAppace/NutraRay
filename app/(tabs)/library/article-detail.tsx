import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

export default function ArticleDetailScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Article Detail" subtitle="Evidence-based reading" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200' }} style={styles.hero} contentFit="cover" />
        <View style={styles.headerMeta}>
          <Text style={styles.category}>Sleep</Text>
          <Text style={styles.meta}>Reading time: 6 min</Text>
        </View>
        <Text style={styles.title}>A Practical Guide to Better Sleep Quality</Text>
        <View style={styles.authorRow}>
          <Ionicons name="person-circle-outline" size={18} color={telehealthColors.textSecondary} />
          <Text style={styles.author}>Dr. Amelia Ross • Updated this week</Text>
        </View>
        <Text style={styles.paragraph}>
          Consistent sleep timing supports hormone balance, cognitive clarity, and emotional regulation.
          Start by reducing late-night stimulation and creating a calm pre-sleep ritual.
        </Text>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200' }} style={styles.contentImage} contentFit="cover" />
        <Text style={styles.paragraph}>
          Build momentum using a simple checklist: dim lights, avoid heavy meals, and maintain a cool room
          environment. Incremental habits create lasting outcomes.
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quote}>
            Consistency beats intensity. A stable bedtime rhythm has the highest long-term impact.
          </Text>
        </View>
      </GlassCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', height: 220, borderRadius: 12, marginBottom: 12 },
  contentImage: { width: '100%', height: 160, borderRadius: 10, marginVertical: 12 },
  headerMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  category: {
    fontSize: 11,
    color: '#fff',
    backgroundColor: telehealthColors.brandGreen,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    fontWeight: '700',
  },
  title: { color: telehealthColors.textPrimary, fontSize: 20, fontWeight: '700' },
  meta: { color: telehealthColors.textSecondary, marginTop: 6, marginBottom: 9, fontSize: 12 },
  authorRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  author: { color: telehealthColors.textSecondary, fontSize: 12 },
  paragraph: { color: telehealthColors.textSecondary, lineHeight: 22, marginBottom: 10 },
  quoteBox: {
    backgroundColor: telehealthColors.cardBg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: telehealthColors.cardBorder,
    padding: 10,
    marginTop: 2,
  },
  quote: { color: telehealthColors.textPrimary, lineHeight: 20, fontStyle: 'italic' },
  floatActions: { flexDirection: 'row', gap: 10 },
});
