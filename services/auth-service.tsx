import AsyncStorage from "@react-native-async-storage/async-storage";
import { push } from "expo-router/build/global-state/routing";
import { Alert } from "react-native";

// URL BASE:
import { API_URL } from "@/config";
interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    nome: string;
    email: string;
  };
  token?: string;
}

export async function handleRegister(
  nome: string,
  telefone: string,
  email: string,
  senha: string,
  confirmaSenha: string
) {
  if (!nome || !telefone || !email || !senha || !confirmaSenha) {
    Alert.alert("Erro", "Preencha todos os campos");
    return;
  }
  if (senha !== confirmaSenha) {
    Alert.alert("Erro", "As senhas não coincidem");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, email, senha }),
    });
    const data = await response.json();

    if (data.success) {
      Alert.alert("Sucesso", "Cadastro realizado!");
      push("/(auth)/login");
    } else {
      Alert.alert("Erro", data.message || "Erro no cadastro");
    }
  } catch (error) {
    Alert.alert("Erro", "Não foi possível conectar ao servidor");
  }
}

export async function Login(
  email: string,
  senha: string
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data: LoginResponse = await response.json();

    if (data.success && data.token) {
      Alert.alert("Login feito com sucesso");

      try {
        await AsyncStorage.setItem("@token", data.token);
        const tokenRecebido = await AsyncStorage.getItem("@token");
        console.log("Token salvo:", tokenRecebido);
      } catch (error) {
        console.log("erro ao salvar token", error);
      }

      push("/(private)/home");
    } else {  
      Alert.alert("Erro", data.message || "Falha no login");
    }

    return data;
  } catch (error) {
    Alert.alert("Erro", "Não foi possível conectar ao servidor");
    return {
      success: false,
      message: "Erro ao conectar com servidor",
    };
  }
}
