import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FloatingHeader, GlassCard, ScreenShell } from '@/components/telehealth/ui';

const menuItems = [
  { label: 'Edit profile', href: '/(tabs)/profile/edit-profile' as const },
  { label: 'Saved content', href: '/(tabs)/library' as const },
  { label: 'Orders', href: '/(tabs)/store/cart' as const },
  { label: 'Subscription', href: '/(tabs)/profile/subscription' as const },
  { label: 'Settings', href: '/(tabs)/profile/settings' as const },
  { label: 'Logout', href: '/auth/login' as const },
];

export default function ProfileScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Profile" subtitle="Manage your account" />
      <GlassCard style={styles.userCard}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800' }} style={styles.avatar} contentFit="cover" />
        <View>
          <Text style={styles.name}>Alex Morgan</Text>
          <Text style={styles.email}>alex@nutraray.app</Text>
        </View>
      </GlassCard>

      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} asChild>
          <Pressable>
            <GlassCard>
              <Text style={styles.menu}>{item.label}</Text>
            </GlassCard>
          </Pressable>
        </Link>
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  userCard: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 18 },
  name: { color: 'telehealthColors.textPrimary', fontWeight: '700', fontSize: 18 },
  email: { color: '#4e6b5f', marginTop: 2 },
  menu: { color: 'telehealthColors.textPrimary', fontWeight: '600' },
});
