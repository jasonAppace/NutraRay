import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FloatingHeader, GlassCard, PrimaryButton, ScreenShell } from '@/components/telehealth/ui';
import { telehealthColors } from '@/constants/telehealth';

const initialItems = [
  {
    id: '1',
    name: 'Daily Wellness Pack',
    category: 'Supplements',
    unitPrice: 39,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1608571423539-e951a5a8cfd6?w=800',
  },
  {
    id: '2',
    name: 'Hydration Plus',
    category: 'Wellness',
    unitPrice: 25,
    qty: 2,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
  },
];

export default function CartScreen() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const subtotal = items.reduce((acc, i) => acc + i.unitPrice * i.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <ScreenShell>
      <FloatingHeader
        title="My Cart"
        subtitle={`${items.length} item${items.length !== 1 ? 's' : ''}`}
        rightIcon="arrow-back"
        onRightPress={() => router.back()}
      />

      {/* Cart items */}
      {items.map((item) => (
        <GlassCard key={item.id}>
          <View style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} contentFit="cover" />
            <View style={styles.itemBody}>
              <View style={styles.itemTopRow}>
                <View style={styles.itemMeta}>
                  <Text style={styles.categoryTag}>{item.category}</Text>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${(item.unitPrice * item.qty).toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => updateQty(item.id, -item.qty)} style={styles.removeBtn}>
                  <Ionicons name="trash-outline" size={16} color="#e05454" />
                </TouchableOpacity>
              </View>

              {/* Qty controls */}
              <View style={styles.qtyRow}>
                <Text style={styles.qtyLabel}>Qty</Text>
                <View style={styles.qtyControls}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => updateQty(item.id, -1)}
                    activeOpacity={0.7}>
                    <Ionicons name="remove" size={15} color={telehealthColors.textPrimary} />
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{item.qty}</Text>
                  <TouchableOpacity
                    style={[styles.qtyBtn, styles.qtyBtnAdd]}
                    onPress={() => updateQty(item.id, 1)}
                    activeOpacity={0.7}>
                    <Ionicons name="add" size={15} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
        </GlassCard>
      ))}

      {items.length === 0 && (
        <GlassCard style={styles.emptyCard}>
          <Ionicons name="cart-outline" size={36} color={telehealthColors.textSecondary} />
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </GlassCard>
      )}

      {/* Free shipping progress */}
      {subtotal < 50 && items.length > 0 && (
        <GlassCard style={styles.shippingBanner}>
          <Ionicons name="car-outline" size={16} color={telehealthColors.brandGreen} />
          <Text style={styles.shippingBannerText}>
            Add <Text style={styles.shippingBold}>${(50 - subtotal).toFixed(2)}</Text> more for free shipping
          </Text>
        </GlassCard>
      )}

      {/* Order summary */}
      <GlassCard style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={[styles.summaryValue, shipping === 0 && styles.freeShip]}>
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <LinearGradient colors={['#f26522', '#f58b19']} style={styles.totalBadge}>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </LinearGradient>
        </View>
      </GlassCard>

      <Link href="/(tabs)/store/checkout" asChild>
        <PrimaryButton label="Proceed to Checkout" icon="arrow-forward" />
      </Link>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  itemCard: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  itemImage: { width: 82, height: 82, borderRadius: 10 },
  itemBody: { flex: 1, gap: 10 },
  itemTopRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  itemMeta: { gap: 3, flex: 1 },
  categoryTag: {
    alignSelf: 'flex-start',
    fontSize: 10,
    color: telehealthColors.brandGreen,
    fontWeight: '700',
    backgroundColor: '#e6f4ea',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 999,
  },
  itemName: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 14 },
  itemPrice: { color: '#008b00', fontWeight: '700', fontSize: 15 },
  removeBtn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#fdeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  qtyLabel: { color: telehealthColors.textSecondary, fontSize: 12, fontWeight: '600' },
  qtyControls: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d0e2d5',
    backgroundColor: '#f0f8f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnAdd: { backgroundColor: telehealthColors.brandGreen, borderColor: telehealthColors.brandGreen },
  qtyValue: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 15, minWidth: 20, textAlign: 'center' },
  emptyCard: { alignItems: 'center', gap: 12, paddingVertical: 24 },
  emptyText: { color: telehealthColors.textSecondary, fontSize: 15 },
  shippingBanner: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  shippingBannerText: { color: telehealthColors.textPrimary, fontSize: 13 },
  shippingBold: { fontWeight: '700', color: telehealthColors.brandGreen },
  summaryCard: { gap: 11 },
  summaryTitle: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 16, marginBottom: 2 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  summaryLabel: { color: telehealthColors.textSecondary, fontSize: 14 },
  summaryValue: { color: telehealthColors.textPrimary, fontWeight: '600', fontSize: 14 },
  freeShip: { color: telehealthColors.brandGreen },
  divider: { height: 1, backgroundColor: '#d8e9df', marginVertical: 2 },
  totalLabel: { color: telehealthColors.textPrimary, fontWeight: '700', fontSize: 16 },
  totalBadge: { borderRadius: 8, paddingHorizontal: 12, paddingVertical: 5 },
  totalValue: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
