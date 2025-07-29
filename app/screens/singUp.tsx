import BotaoComponent from "@/components/ui/botao-component";
import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { handleRegister } from "../services/auth-service";


export default function SignUp() {
  const text = useThemeColor("text");
  const background = useThemeColor("background");
  const primary = useThemeColor("primary");
  const secondary = useThemeColor("secondary");
  const accent = useThemeColor("accent");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");


  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={{ alignItems: "flex-start", width: "90%" }}>
        <Text style={[styles.text, { color: text }]}>Registre-se</Text>
        <Text style={[styles.subtitle, { color: text }]}>
          Faça seu cadastro para continuar.
        </Text>
      </View>

      <InputComponent
        placeholder="Nome completo"
        icon={require("@/assets/icons/user.png")}
        onChangeText={setNome}
      />

      <InputComponent
        placeholder="Telefone"
        keyboardType="phone-pad"
        onChangeText={setTelefone}
        icon={require("@/assets/icons/phone.png")}
      />

      <InputComponent
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
        icon={require("@/assets/icons/email.png")}
      />

      <InputComponent
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        icon={require("@/assets/icons/senha.png")}
      />

      <InputComponent
        placeholder="Confirme sua senha"
        secureTextEntry
        onChangeText={setConfirmaSenha}
        icon={require("@/assets/icons/senha.png")}
      />

      <BotaoComponent titulo="Cadastrar" funcao={() => handleRegister(nome, telefone, email, senha, confirmaSenha)} />


      <Text style={[styles.entrar, { color: text }]}>
        Já tem uma conta? Entrar
      </Text>
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
  entrar: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginTop: 8,
  },
});
