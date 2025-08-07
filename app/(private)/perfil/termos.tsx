// TermosDeUsoScreen.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function TermosDeUsoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
      <Text style={styles.text}>
        Bem-vindo ao FilaZero! Ao utilizar nosso aplicativo, você concorda com os seguintes termos:
        {'\n\n'}1. O uso do app é gratuito para usuários finais;
        {'\n'}2. As senhas digitais são vinculadas ao CPF/telefone do usuário;
        {'\n'}3. O usuário deve respeitar as regras das empresas parceiras;
        {'\n'}4. O uso indevido pode resultar em bloqueio da conta.
        {'\n\n'}Leia atentamente todos os termos antes de utilizar o serviço.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, lineHeight: 24 },
});