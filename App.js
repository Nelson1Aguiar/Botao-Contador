import { StyleSheet, View } from 'react-native';
import "./src/components/press-me/index";
import Botao from './src/components/press-me/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Botao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
