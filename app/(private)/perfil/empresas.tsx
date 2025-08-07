import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';

type Empresa = {
    id: string;
    nome: string;
    logo: string; // URL da logo
    descricao: string;
};

const empresasParceiras: Empresa[] = [
    {
        id: '1',
        nome: 'Clínica Saúde+',
        logo: 'https://via.placeholder.com/80x80.png?text=Saude+',
        descricao: 'Especializada em consultas rápidas e exames laboratoriais.',
    },
    {
        id: '2',
        nome: 'Laboratório Vida',
        logo: 'https://via.placeholder.com/80x80.png?text=Vida',
        descricao: 'Exames laboratoriais com resultados em até 24h.',
    },
    {
        id: '3',
        nome: 'Hospital Bem Estar',
        logo: 'https://via.placeholder.com/80x80.png?text=Bem+Estar',
        descricao: 'Atendimento hospitalar de excelência.',
    },
];

export default function EmpresasParceirasScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Empresas Parceiras</Text>
            <FlatList
                data={empresasParceiras}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <View style={styles.info}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.lista}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 24,
        textAlign: 'center',
        color: '#1a1a1a',
    },
    lista: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        elevation: 2,
    },
    logo: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 16,
        backgroundColor: '#e0e0e0',
    },
    info: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
    },
    descricao: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});