import React from "react";
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ConfiguracoesScreen: React.FC = () => {
  const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);
  const [temaEscuro, setTemaEscuro] = React.useState(false);

  const handleSair = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        onPress: () => {
          /* lógica de logout */
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Notificações</Text>
        <Switch
          value={notificacoesAtivas}
          onValueChange={setNotificacoesAtivas}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Tema escuro</Text>
        <Switch value={temaEscuro} onValueChange={setTemaEscuro} />
      </View>

      <TouchableOpacity style={styles.botaoSair} onPress={handleSair}>
        <Text style={styles.textoSair}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#222",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: "#333",
  },
  botaoSair: {
    marginTop: 40,
    padding: 16,
    backgroundColor: "#e53935",
    borderRadius: 8,
    alignItems: "center",
  },
  textoSair: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ConfiguracoesScreen;
