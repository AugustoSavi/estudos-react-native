import {styles} from './styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home() {

    function handlePartipantAdd(){
        
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome do evento</Text>
      <StatusBar style="auto" />
      <TextInput 
        style={styles.input}
        placeholder="Nome do teste"
        placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handlePartipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    </View>
  );
}