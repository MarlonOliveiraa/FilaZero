import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PoliticaPrivacidade = () => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <Text style={styles.title}>Política de Privacidade</Text>
    <Text style={styles.text}>
      Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, protegemos e compartilhamos suas informações ao utilizar nosso aplicativo FilaZero.
    </Text>

    <Text style={styles.subtitle}>1. Coleta de Informações</Text>
    <Text style={styles.text}>
      Podemos coletar informações pessoais, como nome, e-mail e dados de uso do aplicativo, para melhorar sua experiência e fornecer nossos serviços.
    </Text>

    <Text style={styles.subtitle}>2. Uso das Informações</Text>
    <Text style={styles.text}>
      Utilizamos suas informações para personalizar o aplicativo, enviar notificações e aprimorar nossos serviços. Não compartilhamos seus dados com terceiros sem seu consentimento.
    </Text>

    <Text style={styles.subtitle}>3. Segurança</Text>
    <Text style={styles.text}>
      Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
    </Text>

    <Text style={styles.subtitle}>4. Compartilhamento de Dados</Text>
    <Text style={styles.text}>
      Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei.
    </Text>

    <Text style={styles.subtitle}>5. Alterações nesta Política</Text>
    <Text style={styles.text}>
      Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova política no aplicativo.
    </Text>

    <Text style={styles.subtitle}>6. Contato</Text>
    <Text style={styles.text}>
      Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: suporte@filazero.com
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default PoliticaPrivacidade;