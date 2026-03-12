import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlassCard, InputField, PrimaryButton, SectionTitle } from '@/components/telehealth/ui';

export default function ProfileSetupScreen() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 9000, easing: Easing.inOut(Easing.quad) }),
      -1,
      true
    );
  }, [progress]);

  const animatedBgStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(progress.value, [0, 1], [1, 1.08]) },
      { translateX: interpolate(progress.value, [0, 1], [0, -14]) },
      { translateY: interpolate(progress.value, [0, 1], [0, -10]) },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/nutra-bg.png')}
        style={[styles.backgroundImage, animatedBgStyle]}
        resizeMode="cover"
      />
      <LinearGradient colors={['rgba(6, 26, 14, 0.25)', 'rgba(6, 26, 14, 0.86)']} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Health Profile Setup</Text>
          <Text style={styles.body}>Customize your care guidance with core wellness details.</Text>

          <SectionTitle title="Basic Health Data" />
          <GlassCard radius={6}>
            <InputField label="Age" placeholder="29" inputRadius={6} />
            <InputField label="Height" placeholder="172 cm" inputRadius={6} />
            <InputField label="Weight" placeholder="68 kg" inputRadius={6} />
            <InputField label="Gender" placeholder="Select gender" inputRadius={6} />
            <InputField label="Health Goals" placeholder="Sleep better, lose weight, lower stress" inputRadius={6} />
          </GlassCard>

          <SectionTitle title="Optional Information" />
          <GlassCard radius={6}>
            <InputField label="Medical History" placeholder="Type here..." inputRadius={6} />
            <InputField label="Dietary Preferences" placeholder="Type here..." inputRadius={6} />
          </GlassCard>

          <PrimaryButton label="Finish Setup" icon="checkmark-circle-outline" onPress={() => router.replace('/(tabs)/home')} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f2619' },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '116%',
    height: '116%',
    left: '-8%',
    top: '-8%',
  },
  safeArea: { flex: 1 },
  content: { padding: 18, gap: 14, paddingBottom: 34 },
  title: { fontSize: 30, fontWeight: '700', color: '#ffffff', marginTop: 8 },
  body: { color: '#d9ece0', marginTop: -8, marginBottom: 4 },
});
