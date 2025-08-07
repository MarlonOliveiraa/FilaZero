import { useState } from "react";
import { UserCheck, Plus, Edit, Trash2, Eye, EyeOff, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

interface Funcionario {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  permissao: 'admin' | 'operador' | 'visualizador';
  ativo: boolean;
  ultimoAcesso: Date;
  senhasAtendidas: number;
  avatar?: string;
}

const funcionariosMock: Funcionario[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao.silva@empresa.com',
    cargo: 'Gerente',
    permissao: 'admin',
    ativo: true,
    ultimoAcesso: new Date(Date.now() - 3600000),
    senhasAtendidas: 127,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria.santos@empresa.com',
    cargo: 'Atendente',
    permissao: 'operador',
    ativo: true,
    ultimoAcesso: new Date(Date.now() - 1800000),
    senhasAtendidas: 89,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: '3',
    nome: 'Pedro Costa',
    email: 'pedro.costa@empresa.com',
    cargo: 'Atendente',
    permissao: 'operador',
    ativo: true,
    ultimoAcesso: new Date(Date.now() - 900000),
    senhasAtendidas: 156,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: '4',
    nome: 'Ana Oliveira',
    email: 'ana.oliveira@empresa.com',
    cargo: 'Supervisor',
    permissao: 'visualizador',
    ativo: false,
    ultimoAcesso: new Date(Date.now() - 86400000),
    senhasAtendidas: 34,
    avatar: '/api/placeholder/40/40'
  },
];

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>(funcionariosMock);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editando, setEditando] = useState<string | null>(null);
  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: '',
    email: '',
    cargo: '',
    permissao: 'operador' as const
  });

  const adicionarFuncionario = () => {
    if (!novoFuncionario.nome || !novoFuncionario.email) {
      toast({
        title: "Erro",
        description: "Nome e email são obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const novo: Funcionario = {
      id: Date.now().toString(),
      nome: novoFuncionario.nome,
      email: novoFuncionario.email,
      cargo: novoFuncionario.cargo,
      permissao: novoFuncionario.permissao,
      ativo: true,
      ultimoAcesso: new Date(),
      senhasAtendidas: 0
    };

    setFuncionarios(prev => [...prev, novo]);
    setNovoFuncionario({ nome: '', email: '', cargo: '', permissao: 'operador' });
    setDialogOpen(false);
    
    toast({
      title: "Funcionário adicionado",
      description: `${novo.nome} foi adicionado à equipe.`,
    });
  };

  const alterarStatus = (id: string, ativo: boolean) => {
    setFuncionarios(prev => prev.map(f => 
      f.id === id ? { ...f, ativo } : f
    ));
    
    const funcionario = funcionarios.find(f => f.id === id);
    toast({
      title: `Funcionário ${ativo ? 'ativado' : 'desativado'}`,
      description: `${funcionario?.nome} foi ${ativo ? 'ativado' : 'desativado'}.`,
    });
  };

  const removerFuncionario = (id: string) => {
    const funcionario = funcionarios.find(f => f.id === id);
    setFuncionarios(prev => prev.filter(f => f.id !== id));
    
    toast({
      title: "Funcionário removido",
      description: `${funcionario?.nome} foi removido da equipe.`,
    });
  };

  const formatarUltimoAcesso = (data: Date) => {
    const diff = Date.now() - data.getTime();
    const horas = Math.floor(diff / 3600000);
    const minutos = Math.floor((diff % 3600000) / 60000);
    
    if (horas > 0) {
      return `${horas}h ${minutos}min atrás`;
    }
    return `${minutos}min atrás`;
  };

  const getPermissaoColor = (permissao: string) => {
    switch (permissao) {
      case 'admin': return 'bg-red-500';
      case 'operador': return 'bg-blue-500';
      case 'visualizador': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPermissaoNome = (permissao: string) => {
    switch (permissao) {
      case 'admin': return 'Administrador';
      case 'operador': return 'Operador';
      case 'visualizador': return 'Visualizador';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Funcionários</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Funcionário
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Funcionário</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input 
                  id="nome"
                  value={novoFuncionario.nome}
                  onChange={(e) => setNovoFuncionario(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Digite o nome completo"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email"
                  type="email"
                  value={novoFuncionario.email}
                  onChange={(e) => setNovoFuncionario(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Digite o e-mail"
                />
              </div>
              <div>
                <Label htmlFor="cargo">Cargo</Label>
                <Input 
                  id="cargo"
                  value={novoFuncionario.cargo}
                  onChange={(e) => setNovoFuncionario(prev => ({ ...prev, cargo: e.target.value }))}
                  placeholder="Digite o cargo"
                />
              </div>
              <div>
                <Label htmlFor="permissao">Nível de Permissão</Label>
                <Select value={novoFuncionario.permissao} onValueChange={(v) => setNovoFuncionario(prev => ({ ...prev, permissao: v as any }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visualizador">Visualizador</SelectItem>
                    <SelectItem value="operador">Operador</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={adicionarFuncionario} className="w-full">
                Adicionar Funcionário
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Funcionários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{funcionarios.length}</div>
            <p className="text-xs text-muted-foreground">
              {funcionarios.filter(f => f.ativo).length} ativos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Senhas Atendidas</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {funcionarios.reduce((acc, f) => acc + f.senhasAtendidas, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total no período
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média por Funcionário</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(funcionarios.reduce((acc, f) => acc + f.senhasAtendidas, 0) / funcionarios.filter(f => f.ativo).length)}
            </div>
            <p className="text-xs text-muted-foreground">
              Senhas por funcionário
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Agora</CardTitle>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {funcionarios.filter(f => f.ativo && Date.now() - f.ultimoAcesso.getTime() < 300000).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Últimos 5 minutos
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Funcionários */}
      <div className="grid gap-4">
        {funcionarios.map((funcionario) => (
          <Card key={funcionario.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={funcionario.avatar} alt={funcionario.nome} />
                    <AvatarFallback>
                      {funcionario.nome.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{funcionario.nome}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPermissaoColor(funcionario.permissao)} text-white`}
                      >
                        {getPermissaoNome(funcionario.permissao)}
                      </Badge>
                      {funcionario.ativo && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{funcionario.email}</p>
                    <p className="text-sm text-muted-foreground">{funcionario.cargo}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {funcionario.senhasAtendidas} senhas
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Último acesso: {formatarUltimoAcesso(funcionario.ultimoAcesso)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={funcionario.ativo}
                      onCheckedChange={(checked) => alterarStatus(funcionario.id, checked)}
                    />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removerFuncionario(funcionario.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}