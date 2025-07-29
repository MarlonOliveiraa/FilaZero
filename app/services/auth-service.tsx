import { push } from "expo-router/build/global-state/routing";
import { Alert } from "react-native";

//URL BASE: "/FilaZero/backend/public/index.php";

// APONTANDO PARA API LOCALHOST
const API_URL = "http://localhost/FilaZero/backend/public/index.php";

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
      push("/screens/login");
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
    console.log(data);

    if (data.success) {
      Alert.alert("login feito com sucesso");
      push("/screens/home");
      return {
        success: true,
        message: "deu ruim",
      };
    }

    return data;

  } catch (error) {
    return {
      success: false,
      message: "Erro ao conectar com servidor",
    };
  }
}
