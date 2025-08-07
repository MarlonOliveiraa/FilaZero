import { useState } from "react";
import { BarChart3, Download, Calendar, Filter, TrendingUp, Users, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { toast } from "@/hooks/use-toast";

// Dados mock para os relatórios
const dadosComparecimento = [
  { nome: 'Compareceu', valor: 87, cor: '#3b82f6' },
  { nome: 'Não compareceu', valor: 13, cor: '#ef4444' },
];

const dadosAtendimentoSemanal = [
  { dia: 'Seg', senhas: 45, tempo: 12, comparecimento: 89 },
  { dia: 'Ter', senhas: 52, tempo: 15, comparecimento: 85 },
  { dia: 'Qua', senhas: 38, tempo: 10, comparecimento: 92 },
  { dia: 'Qui', senhas: 61, tempo: 18, comparecimento: 81 },
  { dia: 'Sex', senhas: 48, tempo: 14, comparecimento: 88 },
  { dia: 'Sab', senhas: 29, tempo: 8, comparecimento: 95 },
];

const dadosHorariosPico = [
  { hora: '08:00', senhas: 12 },
  { hora: '09:00', senhas: 25 },
  { hora: '10:00', senhas: 18 },
  { hora: '11:00', senhas: 32 },
  { hora: '12:00', senhas: 8 },
  { hora: '13:00', senhas: 5 },
  { hora: '14:00', senhas: 28 },
  { hora: '15:00', senhas: 35 },
  { hora: '16:00', senhas: 22 },
  { hora: '17:00', senhas: 15 },
];

const dadosAvaliacoes = [
  { nota: '5⭐', quantidade: 67 },
  { nota: '4⭐', quantidade: 23 },
  { nota: '3⭐', quantidade: 8 },
  { nota: '2⭐', quantidade: 2 },
  { nota: '1⭐', quantidade: 0 },
];

export default function Relatorios() {
  const [filtros, setFiltros] = useState({
    dataInicio: new Date(),
    dataFim: new Date(),
    status: 'todos',
    periodo: 'semanal'
  });

  const exportarRelatorio = (tipo: string) => {
    toast({
      title: "Exportando relatório",
      description: `Relatório ${tipo} será baixado em instantes.`,
    });
  };

  const aplicarFiltros = () => {
    toast({
      title: "Filtros aplicados",
      description: "Os dados foram atualizados conforme os filtros selecionados.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Módulo de Relatórios</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => exportarRelatorio('completo')}>
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
          <Button variant="outline" onClick={() => exportarRelatorio('excel')}>
            <Download className="h-4 w-4 mr-2" />
            Exportar Excel
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Relatório
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Data Início</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Data Fim</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Status</Label>
              <Select value={filtros.status} onValueChange={(value) => setFiltros(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="compareceu">Compareceu</SelectItem>
                  <SelectItem value="ausente">Ausente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Período</Label>
              <Select value={filtros.periodo} onValueChange={(value) => setFiltros(prev => ({ ...prev, periodo: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diario">Diário</SelectItem>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="mensal">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={aplicarFiltros}>
              Aplicar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Indicadores de Desempenho */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Senhas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">273</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação à semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">13.4 min</div>
            <p className="text-xs text-muted-foreground">
              -2.1 min vs semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Comparecimento</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              +3% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-xs text-muted-foreground">
              +0.3 vs mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atendimento Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosAtendimentoSemanal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="senhas" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxa de Comparecimento</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dadosComparecimento}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ nome, valor }) => `${nome}: ${valor}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {dadosComparecimento.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Horários de Pico</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosHorariosPico}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="senhas" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Avaliações</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosAvaliacoes} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="nota" type="category" />
                <Tooltip />
                <Bar dataKey="quantidade" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Relatório Detalhado */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Relatório Detalhado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">Melhor Dia</h4>
                <p className="text-2xl font-bold text-blue-600">Quinta-feira</p>
                <p className="text-sm text-blue-700">61 senhas atendidas</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900">Melhor Horário</h4>
                <p className="text-2xl font-bold text-green-600">15:00</p>
                <p className="text-sm text-green-700">Pico de 35 senhas</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900">Maior Eficiência</h4>
                <p className="text-2xl font-bold text-purple-600">Sábado</p>
                <p className="text-sm text-purple-700">95% comparecimento</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Resumo Semanal</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total de senhas emitidas:</span>
                  <Badge variant="outline">273</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Senhas digitais:</span>
                  <Badge variant="outline">187 (68%)</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Senhas presenciais:</span>
                  <Badge variant="outline">86 (32%)</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Tempo médio de espera:</span>
                  <Badge variant="outline">13.4 min</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de comparecimento:</span>
                  <Badge variant="outline">87%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}