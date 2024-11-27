import { View, Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.card, { color: textColor }]}>Total Balance: $0.00</Text>
      <Text style={[styles.card, { color: textColor }]}>Expenses: $0.00</Text>
      <Text style={[styles.card, { color: textColor }]}>Investments: $0.00</Text>
      <Text style={[styles.card, { color: textColor }]}>Future Planning: $0.00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    textAlign: 'center',
  },
});
