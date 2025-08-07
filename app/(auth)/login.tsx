import BotaoComponent from "@/components/ui/botao-component";
import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "../services/auth-service";

export default function ScreenLogin() {
  const text = useThemeColor("text");
  const background = useThemeColor("background");
  // const primary = useThemeColor('primary');
  // const secondary = useThemeColor('secondary');
  // const accent = useThemeColor('accent');

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={{ alignItems: "flex-start", width: "90%" }}>
        <Text style={[styles.text, { color: text }]}>
          Entre com <br />
          sua conta
        </Text>
        <Text style={[styles.subtitle, { color: text }]}>
          Faça login para continuar.
        </Text>
      </View>
      <InputComponent
        placeholder="E-mail"
        keyboardType="email-address"
        icon={require("@/assets/icons/email.png")}
        onChangeText={setEmail}
      />
      <InputComponent
        placeholder="Senha"
        secureTextEntry={true}
        icon={require("@/assets/icons/senha.png")}
        onChangeText={setSenha}
      />
      <View
        style={{
          width: "90%",
          maxWidth: 300,
          alignItems: "flex-end",
          marginBottom: 32,
        }}
      >
        <Text style={[styles.senha, { color: text }]}>
          Esqueci minha senha.
        </Text>
      </View>
      <BotaoComponent titulo="Entrar" funcao={() => Login(email, senha)} />
      <Text style={[styles.cadastro, { color: text }]}>
        Não tem uma conta? Cadastre-se
      </Text>
      {/* botao para testar fluxo */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    color: "text",
    fontFamily: "PoppinsRegular",
    lineHeight: 60,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    marginBottom: 96,
  },
  senha: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginBottom: 32,
  },
  cadastro: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginTop: 8,
  },
});
