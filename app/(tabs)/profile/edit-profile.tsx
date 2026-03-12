import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FloatingHeader, GlassCard, InputField, PrimaryButton, ScreenShell } from '@/components/telehealth/ui';

export default function EditProfileScreen() {
  return (
    <ScreenShell>
      <FloatingHeader title="Edit Profile" subtitle="Update your details" rightIcon="arrow-back" onRightPress={() => router.back()} />
      <GlassCard>
        <InputField label="Name" placeholder="Alex Morgan" />
        <InputField label="Email" placeholder="alex@nutraray.app" />
        <InputField label="Phone" placeholder="+1 202 555 0199" />
      </GlassCard>
      <PrimaryButton label="Save Changes" icon="checkmark-outline" />
      <Text style={styles.note}>Prototype only. Data is not persisted.</Text>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  note: { textAlign: 'center', color: '#4e6b5f', fontSize: 12 },
});
