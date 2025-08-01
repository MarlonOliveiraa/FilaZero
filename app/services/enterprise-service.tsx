import { API_URL } from "@/config";

export async function searchEnterprise(nome: string) {
  console.log("Enviando para backend:", JSON.stringify({ nome }));
  try {
    const response = await fetch(`${API_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erro ao buscar empresas:", error);
    return [];
  }
}
