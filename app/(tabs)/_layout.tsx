import { telehealthColors } from '@/constants/telehealth';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#008b00',
        tabBarInactiveTintColor: '#7a9184',
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            <BlurView intensity={45} tint="light" style={StyleSheet.absoluteFill} />
          </View>
        ),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused ? styles.iconActive : undefined]}>
              <Ionicons name="home-outline" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused ? styles.iconActive : undefined]}>
              <Ionicons name="book-outline" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          title: 'Exercise',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused ? styles.iconActive : undefined]}>
              <Ionicons name="barbell-outline" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: 'Store',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused ? styles.iconActive : undefined]}>
              <Ionicons name="bag-outline" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused ? styles.iconActive : undefined]}>
              <Ionicons name="person-outline" size={20} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 0,
    height: 78,
    paddingBottom: 8,
    paddingTop: 8,
  },
  iconWrap: {
    width: 36,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconActive: {
    backgroundColor: telehealthColors.warmOrange,
  },
});
