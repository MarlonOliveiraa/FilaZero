import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type HistoricoItem = {
    id: string;
    data: string;
    descricao: string;
    status: 'Concluído' | 'Cancelado' | 'Pendente';
};

const historicoMock: HistoricoItem[] = [
    { id: '1', data: '2024-06-01', descricao: 'Consulta Clínica Geral', status: 'Concluído' },
    { id: '2', data: '2024-05-20', descricao: 'Exame Laboratorial', status: 'Cancelado' },
    { id: '3', data: '2024-05-10', descricao: 'Vacinação', status: 'Concluído' },
];

const StatusColor = {
    'Concluído': '#4CAF50',
    'Cancelado': '#F44336',
    'Pendente': '#FFC107',
};

export default function HistoricoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Histórico</Text>
            <FlatList
                data={historicoMock}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.row}>
                            <Text style={styles.data}>{item.data}</Text>
                            <Text style={[styles.status, { color: StatusColor[item.status] }]}>{item.status}</Text>
                        </View>
                        <Text style={styles.descricao}>{item.descricao}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Nenhum histórico encontrado.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    data: {
        fontSize: 16,
        color: '#888',
    },
    status: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 18,
        color: '#333',
    },
    empty: {
        textAlign: 'center',
        color: '#888',
        marginTop: 32,
        fontSize: 16,
    },
});