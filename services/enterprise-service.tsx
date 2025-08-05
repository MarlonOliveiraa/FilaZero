import { API_URL } from "@/config";

export async function searchEnterprise(nome: string) {
  try {
    const response = await fetch(`${API_URL}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });

    if (!response.ok) {
      console.log("Erro na API", await response.text());
      return [];
    }

    const text = await response.text();
    if (!text) return [];
    
    
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    return [];
  }
}

