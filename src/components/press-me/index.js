import React,{useState} from "react";
import {StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text} from "react-native";

const Botao =() =>{
    const [cont,setCont]=useState(0);
    const contador=() =>{
        setCont(cont+1);
    }
    return(
    <SafeAreaView style={styles.container}>
    <View>
        <Text>
            Você apertou o botão {cont} vezes.
        </Text>
        <Button
        title="Press me"
        onPress={() => contador()}
      />
    </View>
    </SafeAreaView>
)};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
  });
export default Botao;