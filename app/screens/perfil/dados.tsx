import BotaoComponent from '@/components/ui/botao-component';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

const DadosPessoaisScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSalvar = () => {
        // Lógica para salvar os dados
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Dados Pessoais</Text>

            <Text style={styles.label}>Nome completo</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                value={telefone}
                onChangeText={setTelefone}
                placeholder="(99) 99999-9999"
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>CPF</Text>
            <TextInput
                style={styles.input}
                value={cpf}
                onChangeText={setCpf}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
            />

            <View style={styles.buttonContainer}>
                <BotaoComponent
                    titulo='Salvar'
                    corFundo='accent'
                    corTexto='text2'
                    funcao={handleSalvar}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flexGrow: 1,
        marginTop: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
        alignSelf: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        marginTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 32,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        marginTop: 32,
    },
});

export default DadosPessoaisScreen;