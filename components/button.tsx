import { StyleSheet } from "react-native";
import React from "react";

export default function Button() {
    return (
        <button styles={styles.button} onMouseOver={() => styles.buttonHover}>
            botao
        </button>
    );
}

const styles = StyleSheet.create {
    button: {  
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
}