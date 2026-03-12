import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const menuItems = [
  { label: 'Edit Profile', icon: 'person-outline' as const, color: '#4a90d9', href: '/(tabs)/profile/edit-profile' as const },
  { label: 'Saved Content', icon: 'bookmark-outline' as const, color: '#009500', href: '/(tabs)/library' as const },
  { label: 'My Orders', icon: 'bag-handle-outline' as const, color: '#f26522', href: '/(tabs)/store/cart' as const },
  { label: 'Subscription', icon: 'star-outline' as const, color: '#f5a623', href: '/(tabs)/profile/subscription' as const },
  { label: 'Settings', icon: 'settings-outline' as const, color: '#7b68ee', href: '/(tabs)/profile/settings' as const },
  { label: 'Logout', icon: 'log-out-outline' as const, color: '#e05454', href: '/auth/login' as const },
];

export default function ProfileScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Profile" subtitle="Manage your account" />

      {/* User hero card */}
      <GlassCard>
        <View style={styles.userCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800' }}
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Alex Morgan</Text>
            <Text style={styles.email}>alex@nutraray.app</Text>
            <View style={styles.badge}>
              <Ionicons name="shield-checkmark-outline" size={11} color="#fff" />
              <Text style={styles.badgeText}>Premium Member</Text>
            </View>
          </View>
        </View>
      </GlassCard>

      {/* Menu items */}
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} asChild>
          <Pressable style={styles.pressable}>
            <GlassCard >
              <View style={styles.menuRow}>
                <LinearGradient
                  colors={[item.color + '22', item.color + '11']}
                  style={[styles.iconBox, { borderColor: item.color + '33' }]}>
                  <Ionicons name={item.icon} size={19} color={item.color} />
                </LinearGradient>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={16} color={telehealthColors.textSecondary} />
              </View>
            </GlassCard>
          </Pressable>
        </Link>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  userCard: { flexDirection: 'row', gap: 14, alignItems: 'center', },
  avatar: { width: 68, height: 68, borderRadius: 18 },
  userInfo: { gap: 4 },
  name: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 18 },
  email: { color: '#4e6b5f', fontSize: 13 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: telehealthColors.brandGreen,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  pressable: { width: '100%' },
  menuRow: { flexDirection: 'row', alignItems: 'center', gap: 14, width: '100%' },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: { flex: 1, color: telehealthColors.textPrimary, fontWeight: '600', fontSize: 15 },
});
