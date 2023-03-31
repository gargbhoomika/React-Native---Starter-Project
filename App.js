import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const names = ["Anshuman","Jatin","Jai"];
  return (
    <View style={styles.container}>
      <Text> Hello, there ! </Text>
      <Text>Welcome to your first mobile app.</Text>
      <StatusBar style="auto" />
      {names.map((name) => (
        <Welcome name={name} />
      ))}
      
    </View>

  );
}

const Welcome = (props) => (
  <View>
    <Text>Hey there, {props.name} !</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
