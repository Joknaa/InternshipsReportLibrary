import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={
          () => console.log("Button Pressed")
        } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
