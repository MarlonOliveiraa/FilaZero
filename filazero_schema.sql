CREATE TABLE Admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_hash VARCHAR(255),
    nivel_acesso ENUM('superadmin', 'analista') DEFAULT 'analista'
);

CREATE TABLE Empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_hash VARCHAR(255),
    telefone VARCHAR(20),
    cnpj VARCHAR(20),
    localizacao_lat DOUBLE,
    localizacao_lng DOUBLE,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em DATETIME
);

CREATE TABLE Fila (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empresa_id INT,
    nome VARCHAR(100),
    descricao TEXT,
    ativa BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (empresa_id) REFERENCES Empresa(id)
);

CREATE TABLE Senha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fila_id INT,
    numero INT,
    prioridade ENUM('normal', 'prioridade') DEFAULT 'normal',
    status ENUM('aguardando', 'chamado', 'atendido', 'cancelado') DEFAULT 'aguardando',
    tempo_espera_estimado INT,
    data_geracao DATETIME,
    data_chamada DATETIME,
    data_atendimento DATETIME,
    FOREIGN KEY (fila_id) REFERENCES Fila(id)
);

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_hash VARCHAR(255),
    telefone VARCHAR(20),
    criado_em DATETIME
);

CREATE TABLE Senha_Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    senha_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (senha_id) REFERENCES Senha(id)
);