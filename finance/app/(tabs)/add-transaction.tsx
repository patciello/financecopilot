import { View, Text, Button, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AddTransactionScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Add a New Transaction</Text>
      <Button title="Add Expense" onPress={() => {}} />
      <Button title="Add Income" onPress={() => {}} />
      <Button title="Add Investment" onPress={() => {}} />
      <Button title="Add Planning or Goal" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
