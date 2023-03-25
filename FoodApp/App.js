import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CaetgoriesScreen from './screens/CaetgoriesScreen';

export default function App() {
  return (
  <>
<StatusBar style='light'/>
  <CaetgoriesScreen/>
  </>
  );
}

const styles = StyleSheet.create({

});
