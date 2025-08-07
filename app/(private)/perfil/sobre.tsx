import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SobreFilaZeroScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sobre o FilaZero</Text>
            <Text style={styles.paragraph}>
                O FilaZero é um aplicativo desenvolvido para facilitar o agendamento de serviços e eliminar filas presenciais. Nosso objetivo é proporcionar mais comodidade, agilidade e organização para usuários e estabelecimentos.
            </Text>
            <Text style={styles.subtitle}>Funcionalidades principais:</Text>
            <Text style={styles.listItem}>• Agendamento rápido e fácil de serviços</Text>
            <Text style={styles.listItem}>• Notificações sobre o status do seu atendimento</Text>
            <Text style={styles.listItem}>• Histórico de agendamentos</Text>
            <Text style={styles.listItem}>• Informações detalhadas sobre estabelecimentos</Text>
            <Text style={styles.paragraph}>
                Com o FilaZero, você economiza tempo e evita esperas desnecessárias. Estamos sempre trabalhando para melhorar sua experiência!
            </Text>
            <Text style={styles.footer}>
                Versão 1.0.0
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 8,
        color: '#333',
    },
    paragraph: {
        fontSize: 16,
        color: '#444',
        marginBottom: 12,
        lineHeight: 22,
    },
    listItem: {
        fontSize: 16,
        color: '#444',
        marginLeft: 12,
        marginBottom: 6,
    },
    footer: {
        marginTop: 32,
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
});

export default SobreFilaZeroScreen;