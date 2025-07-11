import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to Your Account</Text>
            <View style={styles.form}>
                <TextInput 
                    placeholder="Username" 
                    style={styles.input} 
                />
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry 
                    style={styles.input} 
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    form: {
        width: 300,
    },
    input: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});