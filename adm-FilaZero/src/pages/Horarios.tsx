import { useState } from "react";
import { Clock, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface Horario {
  id: string;
  dia: string;
  inicio: string;
  fim: string;
  ativo: boolean;
  limiteSenhas: number;
  pausas: Pausa[];
}

interface Pausa {
  id: string;
  inicio: string;
  fim: string;
  descricao: string;
}

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const horariosMock: Horario[] = [
  { id: '1', dia: 'Segunda', inicio: '08:00', fim: '18:00', ativo: true, limiteSenhas: 100, pausas: [{ id: '1', inicio: '12:00', fim: '13:00', descricao: 'Almoço' }] },
  { id: '2', dia: 'Terça', inicio: '08:00', fim: '18:00', ativo: true, limiteSenhas: 100, pausas: [{ id: '2', inicio: '12:00', fim: '13:00', descricao: 'Almoço' }] },
  { id: '3', dia: 'Quarta', inicio: '08:00', fim: '18:00', ativo: true, limiteSenhas: 100, pausas: [{ id: '3', inicio: '12:00', fim: '13:00', descricao: 'Almoço' }] },
  { id: '4', dia: 'Quinta', inicio: '08:00', fim: '18:00', ativo: true, limiteSenhas: 100, pausas: [{ id: '4', inicio: '12:00', fim: '13:00', descricao: 'Almoço' }] },
  { id: '5', dia: 'Sexta', inicio: '08:00', fim: '18:00', ativo: true, limiteSenhas: 100, pausas: [{ id: '5', inicio: '12:00', fim: '13:00', descricao: 'Almoço' }] },
  { id: '6', dia: 'Sábado', inicio: '08:00', fim: '12:00', ativo: true, limiteSenhas: 50, pausas: [] },
  { id: '7', dia: 'Domingo', inicio: '08:00', fim: '12:00', ativo: false, limiteSenhas: 0, pausas: [] },
];

export default function Horarios() {
  const [horarios, setHorarios] = useState<Horario[]>(horariosMock);
  const [editando, setEditando] = useState<string | null>(null);
  const [dialogPausaOpen, setDialogPausaOpen] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  const atualizarHorario = (id: string, updates: Partial<Horario>) => {
    setHorarios(prev => prev.map(h => 
      h.id === id ? { ...h, ...updates } : h
    ));
    setEditando(null);
    toast({
      title: "Horário atualizado",
      description: "As configurações foram salvas com sucesso.",
    });
  };

  const adicionarPausa = (horarioId: string, pausa: Omit<Pausa, 'id'>) => {
    const novaPausa: Pausa = {
      ...pausa,
      id: Date.now().toString(),
    };
    
    setHorarios(prev => prev.map(h => 
      h.id === horarioId 
        ? { ...h, pausas: [...h.pausas, novaPausa] }
        : h
    ));
    setDialogPausaOpen(false);
    toast({
      title: "Pausa adicionada",
      description: "Nova pausa foi configurada.",
    });
  };

  const removerPausa = (horarioId: string, pausaId: string) => {
    setHorarios(prev => prev.map(h => 
      h.id === horarioId 
        ? { ...h, pausas: h.pausas.filter(p => p.id !== pausaId) }
        : h
    ));
    toast({
      title: "Pausa removida",
      description: "A pausa foi removida da configuração.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Horários</h2>
        <Badge variant="outline" className="text-sm">
          <Clock className="h-3 w-3 mr-1" />
          Horário atual: {new Date().toLocaleTimeString('pt-BR')}
        </Badge>
      </div>

      <div className="grid gap-4">
        {horarios.map((horario) => (
          <Card key={horario.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {horario.dia}
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={horario.ativo}
                    onCheckedChange={(checked) => atualizarHorario(horario.id, { ativo: checked })}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditando(editando === horario.id ? null : horario.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {editando === horario.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Horário de Início</Label>
                      <Input 
                        type="time" 
                        value={horario.inicio}
                        onChange={(e) => atualizarHorario(horario.id, { inicio: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Horário de Fim</Label>
                      <Input 
                        type="time" 
                        value={horario.fim}
                        onChange={(e) => atualizarHorario(horario.id, { fim: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Limite de Senhas</Label>
                    <Input 
                      type="number" 
                      value={horario.limiteSenhas}
                      onChange={(e) => atualizarHorario(horario.id, { limiteSenhas: parseInt(e.target.value) })}
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
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Funcionamento:</span>
                      <Badge variant={horario.ativo ? "default" : "secondary"}>
                        {horario.ativo ? `${horario.inicio} - ${horario.fim}` : 'Fechado'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Limite:</span>
                      <Badge variant="outline">{horario.limiteSenhas} senhas</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Pausas:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setHorarioSelecionado(horario.id);
                          setDialogPausaOpen(true);
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {horario.pausas.map((pausa) => (
                        <div key={pausa.id} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <div>
                            <span className="text-sm font-medium">{pausa.descricao}</span>
                            <span className="text-xs text-muted-foreground ml-2">
                              {pausa.inicio} - {pausa.fim}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removerPausa(horario.id, pausa.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      {horario.pausas.length === 0 && (
                        <p className="text-sm text-muted-foreground">Nenhuma pausa configurada</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialog para adicionar pausa */}
      <Dialog open={dialogPausaOpen} onOpenChange={setDialogPausaOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Pausa</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            if (horarioSelecionado) {
              adicionarPausa(horarioSelecionado, {
                inicio: formData.get('inicio') as string,
                fim: formData.get('fim') as string,
                descricao: formData.get('descricao') as string,
              });
            }
          }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="descricao">Descrição</Label>
                <Input id="descricao" name="descricao" placeholder="Ex: Almoço, Reunião..." required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="inicio">Início</Label>
                  <Input id="inicio" name="inicio" type="time" required />
                </div>
                <div>
                  <Label htmlFor="fim">Fim</Label>
                  <Input id="fim" name="fim" type="time" required />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Adicionar Pausa
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}