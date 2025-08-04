<?php
class Enterprise
{
    private function jsonResponse($data, $status = 200)
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    public function searchEnterprise()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $nome = $data['nome'] ?? '';

        file_put_contents('log.txt', "searchEnterprise executado com nome: $nome\n", FILE_APPEND);


        if (!$nome) {
            return $this->jsonResponse(
                [
                    'success' => false,
                    'message' => 'campo obrigatório'
                ],
                400
            );
        }

        $resultados = EnterpriseModel::searchByEnterprise($nome);

        if ($resultados) {
            return $this->jsonResponse(
                [
                    'success' => true,
                    'message' => 'empresa encontrada',
                    'debug' => 'rota searchEnterprise chegou',
                    'data' => $resultados,  // Retornar os dados encontrados
                ]
            );
        } else {
            // Retorna lista vazia se não encontrar
            return $this->jsonResponse(
                [
                    'success' => true,
                    'message' => 'nenhuma empresa encontrada',
                    'data' => [],
                ]
            );
        }
    }
}
