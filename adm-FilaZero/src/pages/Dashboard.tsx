import { Users, Clock, TrendingUp, Star, Calendar, AlertTriangle } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Dados mock para os gráficos
const horariosPico = [
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

const tempoEspera = [
  { dia: 'Seg', tempo: 12 },
  { dia: 'Ter', tempo: 15 },
  { dia: 'Qua', tempo: 8 },
  { dia: 'Qui', tempo: 18 },
  { dia: 'Sex', tempo: 14 },
  { dia: 'Sab', tempo: 10 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Badge variant="secondary" className="text-sm">
          Hoje: {new Date().toLocaleDateString('pt-BR')}
        </Badge>
      </div>

      {/* Cards de Métricas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Senhas Emitidas Hoje"
          value="127"
          icon={Users}
          description="Digital: 89 | Presencial: 38"
          trend={{ value: 12, label: "vs ontem" }}
        />
        <MetricCard
          title="Tempo Médio de Espera"
          value="14 min"
          icon={Clock}
          description="Baseado nas últimas 2 horas"
          trend={{ value: -5, label: "vs ontem" }}
        />
        <MetricCard
          title="Taxa de Comparecimento"
          value="87%"
          icon={TrendingUp}
          description="110 de 127 senhas"
          trend={{ value: 3, label: "vs semana passada" }}
        />
        <MetricCard
          title="Avaliação Média"
          value="4.2"
          icon={Star}
          description="Baseado em 45 avaliações"
          trend={{ value: 8, label: "vs mês passado" }}
        />
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Horários de Pico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={horariosPico}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="senhas" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Tempo de Espera Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tempoEspera}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="tempo" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Feedbacks Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Feedbacks Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 1, nome: "Maria Silva", avaliacao: 5, comentario: "Atendimento excelente, muito rápido!", tempo: "há 2 horas" },
              { id: 2, nome: "João Santos", avaliacao: 4, comentario: "Bom serviço, poderia ser mais rápido.", tempo: "há 3 horas" },
              { id: 3, nome: "Ana Costa", avaliacao: 5, comentario: "Adorei o sistema de senhas, muito prático!", tempo: "há 4 horas" },
            ].map((feedback) => (
              <div key={feedback.id} className="flex items-start justify-between p-3 bg-muted/20 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{feedback.nome}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < feedback.avaliacao ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{feedback.comentario}</p>
                </div>
                <span className="text-xs text-muted-foreground">{feedback.tempo}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alertas */}
      <Card className="border-warning">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            Alertas do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span>Tempo de espera acima da média nas últimas 30 min</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sistema funcionando normalmente</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}