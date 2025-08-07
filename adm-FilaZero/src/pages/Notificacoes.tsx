import { useState } from "react";
import { Bell, MessageSquare, Settings, Save, Play, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

interface ConfigNotificacao {
  id: string;
  tipo: 'proximoFila' | 'boasVindas' | 'atraso' | 'pausa';
  nome: string;
  mensagem: string;
  ativo: boolean;
  condicao?: string;
}

const notificacoesMock: ConfigNotificacao[] = [
  {
    id: '1',
    tipo: 'proximoFila',
    nome: 'Você é o próximo',
    mensagem: 'Olá {nome}, você é o próximo na fila! Por favor, dirija-se ao atendimento.',
    ativo: true,
    condicao: 'Próximo na fila'
  },
  {
    id: '2',
    tipo: 'proximoFila',
    nome: 'Faltam 3 pessoas',
    mensagem: 'Olá {nome}, faltam apenas 3 pessoas para o seu atendimento. Tempo estimado: {tempo} minutos.',
    ativo: true,
    condicao: '3 pessoas na frente'
  },
  {
    id: '3',
    tipo: 'boasVindas',
    nome: 'Mensagem de boas-vindas',
    mensagem: 'Bem-vindo(a) {nome}! Sua senha {senha} foi gerada com sucesso. Acompanhe o painel para ser chamado.',
    ativo: true,
    condicao: 'Ao gerar senha'
  },
  {
    id: '4',
    tipo: 'atraso',
    nome: 'Alerta de atraso',
    mensagem: 'Olá {nome}, informamos que estamos com um pequeno atraso no atendimento. Tempo estimado: {tempo} minutos.',
    ativo: true,
    condicao: 'Atraso > 15 min'
  },
  {
    id: '5',
    tipo: 'pausa',
    nome: 'Pausa no atendimento',
    mensagem: 'Informamos que o atendimento está pausado para {motivo}. Retornamos em {tempo} minutos.',
    ativo: true,
    condicao: 'Durante pausas'
  }
];

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState<ConfigNotificacao[]>(notificacoesMock);
  const [editando, setEditando] = useState<string | null>(null);
  const [configuracoes, setConfiguracoes] = useState({
    sms: true,
    email: false,
    whatsapp: true,
    push: true,
    intervaloLembrete: 10
  });

  const atualizarNotificacao = (id: string, updates: Partial<ConfigNotificacao>) => {
    setNotificacoes(prev => prev.map(n => 
      n.id === id ? { ...n, ...updates } : n
    ));
    setEditando(null);
    toast({
      title: "Notificação atualizada",
      description: "As configurações foram salvas com sucesso.",
    });
  };

  const testarNotificacao = (notificacao: ConfigNotificacao) => {
    toast({
      title: "Teste enviado",
      description: `Mensagem "${notificacao.nome}" enviada com sucesso!`,
    });
  };

  const salvarConfiguracoes = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas.",
    });
  };

  const getTipoColor = (tipo: string) => {
    switch(tipo) {
      case 'proximoFila': return 'bg-blue-500';
      case 'boasVindas': return 'bg-green-500';
      case 'atraso': return 'bg-yellow-500';
      case 'pausa': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTipoNome = (tipo: string) => {
    switch(tipo) {
      case 'proximoFila': return 'Fila';
      case 'boasVindas': return 'Boas-vindas';
      case 'atraso': return 'Atraso';
      case 'pausa': return 'Pausa';
      default: return 'Outro';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Configuração de Notificações</h2>
        <Badge variant="outline" className="text-sm">
          <Bell className="h-3 w-3 mr-1" />
          {notificacoes.filter(n => n.ativo).length} ativas
        </Badge>
      </div>

      <Tabs defaultValue="mensagens" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mensagens">Mensagens</TabsTrigger>
          <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="mensagens" className="space-y-4">
          {notificacoes.map((notificacao) => (
            <Card key={notificacao.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getTipoColor(notificacao.tipo)}`}></div>
                    <span>{notificacao.nome}</span>
                    <Badge variant="outline" className="text-xs">
                      {getTipoNome(notificacao.tipo)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={notificacao.ativo}
                      onCheckedChange={(checked) => atualizarNotificacao(notificacao.id, { ativo: checked })}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditando(editando === notificacao.id ? null : notificacao.id)}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => testarNotificacao(notificacao)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {editando === notificacao.id ? (
                  <div className="space-y-4">
                    <div>
                      <Label>Nome da Notificação</Label>
                      <Input 
                        value={notificacao.nome}
                        onChange={(e) => atualizarNotificacao(notificacao.id, { nome: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Mensagem</Label>
                      <Textarea 
                        value={notificacao.mensagem}
                        onChange={(e) => atualizarNotificacao(notificacao.id, { mensagem: e.target.value })}
                        rows={3}
                        placeholder="Digite a mensagem. Use {nome}, {senha}, {tempo} como variáveis"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        onClick={() => setEditando(null)}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Salvar
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setEditando(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Condição:</span>
                      <Badge variant="secondary" className="text-xs">
                        {notificacao.condicao}
                      </Badge>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm">{notificacao.mensagem}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="configuracoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Canais de Notificação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms">SMS</Label>
                  <p className="text-sm text-muted-foreground">Enviar notificações via SMS</p>
                </div>
                <Switch 
                  id="sms"
                  checked={configuracoes.sms}
                  onCheckedChange={(checked) => setConfiguracoes(prev => ({ ...prev, sms: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <p className="text-sm text-muted-foreground">Enviar notificações por e-mail</p>
                </div>
                <Switch 
                  id="email"
                  checked={configuracoes.email}
                  onCheckedChange={(checked) => setConfiguracoes(prev => ({ ...prev, email: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <p className="text-sm text-muted-foreground">Enviar notificações via WhatsApp</p>
                </div>
                <Switch 
                  id="whatsapp"
                  checked={configuracoes.whatsapp}
                  onCheckedChange={(checked) => setConfiguracoes(prev => ({ ...prev, whatsapp: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Notificações push no navegador</p>
                </div>
                <Switch 
                  id="push"
                  checked={configuracoes.push}
                  onCheckedChange={(checked) => setConfiguracoes(prev => ({ ...prev, push: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Configurações Avançadas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="intervalo">Intervalo de lembrete (minutos)</Label>
                <Input 
                  id="intervalo"
                  type="number"
                  value={configuracoes.intervaloLembrete}
                  onChange={(e) => setConfiguracoes(prev => ({ ...prev, intervaloLembrete: parseInt(e.target.value) }))}
                  min="5"
                  max="60"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Frequência de envio de lembretes para pessoas na fila
                </p>
              </div>
              <Button onClick={salvarConfiguracoes}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}