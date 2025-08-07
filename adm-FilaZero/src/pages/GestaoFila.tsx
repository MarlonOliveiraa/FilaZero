import { useState } from "react";
import { Plus, Play, SkipForward, Clock, Users, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface Senha {
  id: string;
  numero: string;
  tipo: 'digital' | 'presencial';
  nome: string;
  chegada: Date;
  status: 'aguardando' | 'chamando' | 'atendendo' | 'concluido';
  prioridade: 'normal' | 'preferencial';
}

const senhasMock: Senha[] = [
  { id: '1', numero: 'A001', tipo: 'digital', nome: 'Maria Silva', chegada: new Date(Date.now() - 900000), status: 'aguardando', prioridade: 'normal' },
  { id: '2', numero: 'P002', tipo: 'presencial', nome: 'João Santos', chegada: new Date(Date.now() - 1800000), status: 'aguardando', prioridade: 'preferencial' },
  { id: '3', numero: 'A003', tipo: 'digital', nome: 'Ana Costa', chegada: new Date(Date.now() - 600000), status: 'chamando', prioridade: 'normal' },
  { id: '4', numero: 'A004', tipo: 'digital', nome: 'Carlos Oliveira', chegada: new Date(Date.now() - 300000), status: 'aguardando', prioridade: 'normal' },
  { id: '5', numero: 'P005', tipo: 'presencial', nome: 'Lucia Santos', chegada: new Date(Date.now() - 1200000), status: 'aguardando', prioridade: 'preferencial' },
];

export default function GestaoFila() {
  const [senhas, setSenhas] = useState<Senha[]>(senhasMock);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novaPrioridade, setNovaPrioridade] = useState<'normal' | 'preferencial'>('normal');

  const proximaSenha = senhas.find(s => s.status === 'aguardando');
  const senhaAtual = senhas.find(s => s.status === 'chamando' || s.status === 'atendendo');

  const chamarProximo = () => {
    if (proximaSenha) {
      setSenhas(prev => prev.map(s => 
        s.id === proximaSenha.id 
          ? { ...s, status: 'chamando' as const }
          : s.status === 'chamando' || s.status === 'atendendo'
          ? { ...s, status: 'concluido' as const }
          : s
      ));
      toast({
        title: "Senha chamada",
        description: `Senha ${proximaSenha.numero} - ${proximaSenha.nome}`,
      });
    }
  };

  const pularSenha = () => {
    if (senhaAtual) {
      setSenhas(prev => prev.map(s => 
        s.id === senhaAtual.id 
          ? { ...s, status: 'aguardando' as const }
          : s
      ));
      toast({
        title: "Senha adiada",
        description: `Senha ${senhaAtual.numero} foi colocada no final da fila`,
      });
    }
  };

  const adicionarSenha = () => {
    if (!novoNome.trim()) return;
    
    const novaId = (senhas.length + 1).toString();
    const novoNumero = `P${String(senhas.filter(s => s.tipo === 'presencial').length + 1).padStart(3, '0')}`;
    
    const novaSenha: Senha = {
      id: novaId,
      numero: novoNumero,
      tipo: 'presencial',
      nome: novoNome,
      chegada: new Date(),
      status: 'aguardando',
      prioridade: novaPrioridade,
    };

    setSenhas(prev => [...prev, novaSenha]);
    setNovoNome('');
    setNovaPrioridade('normal');
    setDialogOpen(false);
    
    toast({
      title: "Senha adicionada",
      description: `Senha ${novoNumero} - ${novoNome}`,
    });
  };

  const formatarTempo = (data: Date) => {
    const diff = Date.now() - data.getTime();
    const minutos = Math.floor(diff / 60000);
    return `${minutos}min`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestão da Fila</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Senha
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Senha Presencial</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome do Cliente</Label>
                <Input 
                  id="nome"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Digite o nome do cliente"
                />
              </div>
              <div>
                <Label htmlFor="prioridade">Prioridade</Label>
                <Select value={novaPrioridade} onValueChange={(v) => setNovaPrioridade(v as 'normal' | 'preferencial')}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="preferencial">Preferencial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={adicionarSenha} className="w-full">
                Adicionar Senha
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Controles da Fila */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Controle de Atendimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button 
                onClick={chamarProximo}
                disabled={!proximaSenha}
                className="flex-1"
              >
                <Play className="h-4 w-4 mr-2" />
                Chamar Próximo
              </Button>
              <Button 
                variant="outline"
                onClick={pularSenha}
                disabled={!senhaAtual}
              >
                <SkipForward className="h-4 w-4 mr-2" />
                Pular
              </Button>
            </div>
            
            {senhaAtual && (
              <div className="p-3 bg-primary/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Senha Atual: {senhaAtual.numero}</p>
                    <p className="text-sm text-muted-foreground">{senhaAtual.nome}</p>
                  </div>
                  <Badge variant={senhaAtual.prioridade === 'preferencial' ? 'default' : 'secondary'}>
                    {senhaAtual.prioridade}
                  </Badge>
                </div>
              </div>
            )}
            
            {proximaSenha && (
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Próxima: {proximaSenha.numero} - {proximaSenha.nome}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Estatísticas da Fila
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Pessoas na fila:</span>
                <span className="font-medium">{senhas.filter(s => s.status === 'aguardando').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Senhas digitais:</span>
                <span className="font-medium">{senhas.filter(s => s.tipo === 'digital').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Senhas presenciais:</span>
                <span className="font-medium">{senhas.filter(s => s.tipo === 'presencial').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Preferenciais:</span>
                <span className="font-medium">{senhas.filter(s => s.prioridade === 'preferencial').length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista da Fila */}
      <Card>
        <CardHeader>
          <CardTitle>Fila Atual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {senhas.filter(s => s.status !== 'concluido').map((senha) => (
              <div key={senha.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                senha.status === 'chamando' ? 'bg-primary/10 border-primary' : 
                senha.status === 'atendendo' ? 'bg-success/10 border-success' : 
                'bg-muted/20'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-medium">{senha.numero}</span>
                  </div>
                  <div>
                    <p className="font-medium">{senha.nome}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{formatarTempo(senha.chegada)}</span>
                      <Badge variant="outline" className="text-xs">
                        {senha.tipo}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {senha.prioridade === 'preferencial' && (
                    <Badge variant="default" className="text-xs">
                      Preferencial
                    </Badge>
                  )}
                  {senha.status === 'chamando' && (
                    <Badge variant="default" className="text-xs animate-pulse">
                      Chamando
                    </Badge>
                  )}
                  {senha.status === 'atendendo' && (
                    <Badge className="text-xs bg-success">
                      Atendendo
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}