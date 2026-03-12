import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  type ViewProps
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { telehealthColors } from '@/constants/telehealth';

export function ScreenShell({
  children,
  withScroll = true,
}: {
  children: React.ReactNode;
  withScroll?: boolean;
}) {

  const content = withScroll ? (
    <ScrollView contentContainerStyle={styles.screenContent} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.screenContent}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <LinearGradient colors={[telehealthColors.deepGreen, telehealthColors.deepOrange]} style={styles.gradientBg}> */}
      <LinearGradient colors={['rgba(3, 13, 7, 0.76)', 'rgb(0, 0, 0, 0.5)']} style={StyleSheet.absoluteFill} />
      <Image
        source={require('@/assets/images/nutra-bg.png')}
        style={[styles.backgroundImage]}
        resizeMode="cover" />
      {content}
      {/* </LinearGradient> */}
    </SafeAreaView >
  );
}

export function FloatingHeader({
  title,
  subtitle,
  rightIcon,
  onRightPress,
}: {
  title: string;
  subtitle?: string;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
}) {
  return (
    <LinearGradient colors={['rgba(0, 0, 0)', 'rgba(0, 0, 0)']} style={styles.headerWrap}>
      <View>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightIcon ? (
        <Pressable style={styles.iconWrap} onPress={onRightPress}>
          <Ionicons name={rightIcon} size={20} color={telehealthColors.textPrimary} />
        </Pressable>
      ) : null}
    </LinearGradient>
  );
}

export function GlassCard({
  children,
  style,
  radius = 12,
}: ViewProps & {
  radius?: number;
}) {
  return (
    <View style={[styles.cardShadow, style]}>
      <BlurView intensity={50} tint="dark" style={[styles.glass, { borderRadius: radius }]}>
        {children}
      </BlurView>
    </View>
  );
}

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.metaText}>{action}</Text> : null}
    </View>
  );
}

export function SearchBar({ placeholder = 'Search' }: { placeholder?: string }) {
  return (
    <View style={styles.searchWrap}>
      <Ionicons name="search-outline" size={18} color="#6a8a7c" />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        placeholderTextColor="#6a8a7c"
      />
    </View>
  );
}

export function Chip({
  label,
  active = false,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={[styles.chip, active ? styles.chipActive : undefined]}
      onPress={onPress}>
      <Text style={[styles.chipText, active ? styles.chipTextActive : undefined]}>{label}</Text>
    </Pressable>
  );
}

export function PrimaryButton({
  label,
  onPress,
  icon,
}: {
  label: string;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <Pressable onPress={onPress} style={styles.buttonOuter}>
      <LinearGradient colors={['#f26522', '#f58b19']} style={styles.buttonInner}>
        <Text style={styles.buttonLabel}>{label}</Text>
        {icon ? <Ionicons name={icon} size={17} color="#fff" /> : null}
      </LinearGradient>
    </Pressable>
  );
}

export function SecondaryButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.secondaryButton}>
      <Text style={styles.secondaryLabel}>{label}</Text>
    </Pressable>
  );
}

export function InputField({
  label,
  placeholder,
  inputRadius = 12,
}: {
  label: string;
  placeholder: string;
  inputRadius?: number;
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputWrap, { borderRadius: inputRadius }]}>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#7a9688" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '116%',
    height: '116%',
    left: '-8%',
    top: '-8%',
    opacity: 0.5,
    // tintColor: 'dark',
  },
  safeArea: { flex: 1, backgroundColor: '#0f2619' },
  gradientBg: { flex: 1 },
  screenContent: { padding: 18, gap: 14, paddingBottom: 120 },
  headerWrap: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: telehealthColors.cardBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#0d2d1f',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  subtitle: { color: telehealthColors.textSecondary, fontSize: 12, marginBottom: 3 },
  title: { color: telehealthColors.textPrimary, fontSize: 24, fontWeight: '700' },
  iconWrap: {
    backgroundColor: telehealthColors.deepGreen,
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardShadow: {
    shadowColor: telehealthColors.deepGreen,
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    borderRadius: 12,
    alignSelf: 'stretch',
  },
  glass: {
    backgroundColor: telehealthColors.cardBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: telehealthColors.cardBorder,
    padding: 20,
    overflow: 'hidden',
    gap: 16,
  },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: telehealthColors.brandOrange },
  metaText: { fontSize: 12, color: telehealthColors.brandGreen, fontWeight: '600' },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#e9f3ec',
    borderWidth: 1,
    borderColor: '#d4e5d9',
  },
  searchInput: { flex: 1, color: telehealthColors.textPrimary, fontSize: 15 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#e9f4ed',
    borderWidth: 1,
    borderColor: '#d4e6da',
  },
  chipActive: { backgroundColor: '#dff1e2', borderColor: '#b8dbbf' },
  chipText: { color: telehealthColors.brandGreen, fontWeight: '600', fontSize: 12 },
  chipTextActive: { color: telehealthColors.deepGreen },
  buttonOuter: { borderRadius: 12, overflow: 'hidden' },
  buttonInner: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonLabel: { color: '#fff', fontSize: 15, fontWeight: '700' },
  secondaryButton: {
    borderRadius: 12,
    borderColor: '#bfd6c5',
    borderWidth: 1,
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#f4fbf6',
  },
  secondaryLabel: { color: telehealthColors.deepGreen, fontWeight: '600' },
  inputGroup: { gap: 10 },
  inputLabel: { color: telehealthColors.brandOrange, fontWeight: '600', fontSize: 13 },
  inputWrap: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d0e2d5',
    backgroundColor: '#f6fbf8',
  },
  input: { paddingHorizontal: 12, paddingVertical: 13, color: telehealthColors.textPrimary },
});
