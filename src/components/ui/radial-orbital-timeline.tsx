import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Activity,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export interface TimelineItem {
  id: string | number;
  title: string;
  stage?: string;
  description: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'upcoming' | string;
  energy?: number; // 0 - 100 (nível de maturidade/progresso)
  duration?: string;
  deliverables?: string[];
  metrics?: string;
  connectedTo?: (string | number)[];
}

export interface RadialOrbitalTimelineProps {
  items: TimelineItem[];
  className?: string;
  radiusX?: number; // 260px padrão para perspectiva dinâmica
  radiusY?: number; // 170px padrão para elipse espacial
  autoRotateInterval?: number;
  initialActiveId?: string | number;
  onSelectNode?: (item: TimelineItem) => void;
}

export interface NodePosition {
  x: number;
  y: number;
  angleDeg: number;
  angleRad: number;
  zIndex: number;
  opacity: number;
  scale: number;
}

/**
 * Função utilitária com cálculos trigonométricos para posicionamento elíptico dos nós
 */
export function calculateNodePosition(
  index: number,
  total: number,
  rotationDeg: number,
  radiusX: number = 260,
  radiusY: number = 170
): NodePosition {
  const angleDeg = (index * (360 / total) + rotationDeg) % 360;
  const angleRad = (angleDeg * Math.PI) / 180;

  // Coordenadas elípticas
  const x = radiusX * Math.cos(angleRad);
  const y = radiusY * Math.sin(angleRad);

  // Fator de profundidade 3D (0 no fundo da órbita, 1 na frente inferior)
  const depthFactor = (y + radiusY) / (2 * radiusY);

  // zIndex superior na frente da órbita
  const zIndex = Math.round(100 + y);

  // Opacidade mínima ajustada para garantir contraste legível mesmo nos nós de trás
  const opacity = 0.7 + 0.3 * depthFactor;

  // Escala proporcional à distância
  const scale = 0.88 + 0.22 * depthFactor;

  return { x, y, angleDeg, angleRad, zIndex, opacity, scale };
}

export function RadialOrbitalTimeline({
  items,
  className,
  radiusX = 260,
  radiusY = 170,
  autoRotateInterval = 40,
  initialActiveId,
  onSelectNode,
}: RadialOrbitalTimelineProps) {
  const [rotation, setRotation] = React.useState<number>(0);
  const [isRotating, setIsRotating] = React.useState<boolean>(true);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(true);
  const [activeId, setActiveId] = React.useState<string | number>(
    initialActiveId ?? items[0]?.id ?? 0
  );
  const [scaleFactor, setScaleFactor] = React.useState<number>(1);

  // Responsividade: adapta o fator de escala global para evitar scroll horizontal
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 420) {
        setScaleFactor(0.62);
      } else if (width < 640) {
        setScaleFactor(0.74);
      } else if (width < 768) {
        setScaleFactor(0.86);
      } else if (width < 1024) {
        setScaleFactor(0.94);
      } else {
        setScaleFactor(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeIndex = items.findIndex((item) => item.id === activeId);
  const activeItem = items[activeIndex >= 0 ? activeIndex : 0];

  const prevIndex = (activeIndex - 1 + items.length) % items.length;
  const nextIndex = (activeIndex + 1) % items.length;
  const prevItem = items[prevIndex];
  const nextItem = items[nextIndex];

  // Auto rotação contínua da órbita
  React.useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.25) % 360);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [isRotating, autoRotateInterval]);

  // Rotaciona trazendo o nó selecionado para a frente da elipse (90 graus / eixo Y positivo)
  const rotateToNode = (index: number) => {
    const itemAngle = (index * (360 / items.length)) % 360;
    const targetRotation = (90 - itemAngle + 360) % 360;
    setRotation(targetRotation);
  };

  const handleSelect = (item: TimelineItem, index: number) => {
    setActiveId(item.id);
    rotateToNode(index);
    setIsExpanded(true);
    onSelectNode?.(item);
  };

  const handleNext = () => {
    handleSelect(nextItem, nextIndex);
  };

  const handlePrev = () => {
    handleSelect(prevItem, prevIndex);
  };

  const handleReset = () => {
    setRotation(0);
    if (items.length > 0) {
      setActiveId(items[0].id);
      setIsExpanded(true);
      onSelectNode?.(items[0]);
    }
  };

  return (
    <div
      className={cn(
        'relative w-full min-h-[660px] lg:min-h-[740px] flex flex-col items-center justify-center bg-[#07111e] text-[#f8fafc] overflow-hidden rounded-3xl border border-[#1a3452] p-4 sm:p-8 select-none',
        className
      )}
    >
      {/* Background sutil com malha radial e glow temático */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e70bf15_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-[#1e70bf]/15 via-[#2983db]/10 to-transparent blur-[130px] rounded-full" />
      </div>

      {/* ÁREA ORBITAL RESPONSIVA COM PERSPECTIVA ELÍPTICA */}
      <div
        className="relative w-full max-w-4xl flex items-center justify-center transition-all duration-300 origin-center"
        style={{
          height: `${Math.round(400 * scaleFactor)}px`,
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center origin-center"
          style={{
            perspective: 1000,
            transform: `scale(${scaleFactor})`,
          }}
        >
          {/* Órbita Externa (Anel Elíptico de Apoio) */}
          <div
            className="absolute rounded-[50%] border border-[#1a3452]/40 pointer-events-none"
            style={{
              width: `${radiusX * 2 + 50}px`,
              height: `${radiusY * 2 + 50}px`,
            }}
          />

          {/* Órbita Principal Elíptica (260px horizontal x 170px vertical) */}
          <div
            className="absolute rounded-[50%] border border-[#1a3452] shadow-inner shadow-[#1e70bf]/10 pointer-events-none"
            style={{
              width: `${radiusX * 2}px`,
              height: `${radiusY * 2}px`,
            }}
          />

          {/* Órbita Interna (Anel Tracejado) */}
          <div
            className="absolute rounded-[50%] border border-[#1a3452]/35 border-dashed pointer-events-none"
            style={{
              width: `${radiusX * 2 - 60}px`,
              height: `${radiusY * 2 - 60}px`,
            }}
          />

          {/* Núcleo Central: Sun Quantum (#1e70bf a #2983db) */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1e70bf] via-[#2983db] to-[#0d1d2f] animate-pulse flex items-center justify-center z-20 shadow-xl shadow-[#1e70bf]/40 border border-[#2983db]/50">
            {/* Ondas expansivas animate-ping */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#2983db]/30 animate-ping opacity-60 pointer-events-none" />
            <div
              className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#1e70bf]/20 animate-ping opacity-40 pointer-events-none"
              style={{ animationDelay: '0.6s' }}
            />
            {/* Núcleo interno com branding Quantum */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
              <span className="text-[#07111e] font-black text-xs sm:text-sm tracking-tighter">
                &lt;Q&gt;
              </span>
            </div>
          </div>

          {/* NÓS EM ÓRBITA */}
          {items.map((item, index) => {
            const { x, y, zIndex, opacity, scale } = calculateNodePosition(
              index,
              items.length,
              rotation,
              radiusX,
              radiusY
            );

            const isSelected = item.id === activeId;
            const glowSize = Math.round(55 + (item.energy ?? 85) * 0.4);

            // Ajuste dinâmico da posição do rótulo para evitar sobreposições:
            // Nós na metade superior da elipse exibem o rótulo acima, nós na metade inferior exibem abaixo
            const isUpperHalf = y < 0;

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item, index)}
                className="absolute transition-transform duration-500 cursor-pointer group flex flex-col items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                  zIndex: isSelected ? 200 : zIndex,
                  opacity: isSelected ? 1 : opacity,
                }}
              >
                {/* Glow Radial Energético */}
                <div
                  className={cn(
                    'absolute rounded-full -inset-1 pointer-events-none transition-all duration-300',
                    isSelected && 'animate-pulse'
                  )}
                  style={{
                    background: isSelected
                      ? 'radial-gradient(circle, rgba(30, 112, 191, 0.6) 0%, rgba(41, 131, 219, 0.3) 45%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(30, 112, 191, 0.22) 0%, rgba(30, 112, 191, 0) 70%)',
                    width: `${glowSize}px`,
                    height: `${glowSize}px`,
                    left: `${-glowSize / 2 + 22}px`,
                    top: `${-glowSize / 2 + 22}px`,
                  }}
                />

                {/* Ícone / Botão do Nó */}
                <div
                  className={cn(
                    'w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform shadow-lg',
                    isSelected
                      ? 'bg-quantum-primary text-white border-2 border-white shadow-xl shadow-[#1e70bf]/70 ring-4 ring-[#2983db]/40 scale-115'
                      : 'bg-[#0d1d2f] text-slate-300 border-2 border-[#1a3452] group-hover:border-quantum-primary/80 group-hover:text-white group-hover:scale-105'
                  )}
                >
                  {item.icon ?? (
                    <span className="text-xs font-bold font-mono">
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Rótulo Legível e com Alto Contraste (anti-sobreposição) */}
                <div
                  className={cn(
                    'absolute whitespace-nowrap text-xs px-2.5 py-1 rounded-lg backdrop-blur-md transition-all duration-300 border shadow-md',
                    isUpperHalf ? 'bottom-13' : 'top-13',
                    isSelected
                      ? 'text-[#f8fafc] font-bold bg-[#0b1b2d] border-quantum-primary shadow-[#1e70bf]/25 ring-2 ring-[#2983db]/30 z-30'
                      : 'text-slate-300 font-medium bg-[#0d1d2f]/90 border-[#1a3452] group-hover:text-white group-hover:border-quantum-primary/60 z-10'
                  )}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BARRA DE CONTROLES DE INTERAÇÃO ORBITAL */}
      <div className="relative z-30 mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={handlePrev}
          title="Fase anterior"
          className="rounded-full w-9 h-9 border-[#1a3452] hover:border-quantum-primary text-slate-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant={isRotating ? 'default' : 'secondary'}
          size="sm"
          onClick={() => setIsRotating((prev) => !prev)}
          className="rounded-full px-4 gap-2 text-xs font-medium"
        >
          {isRotating ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pausar Órbita</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>Girar Órbita</span>
            </>
          )}
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={handleReset}
          title="Reiniciar rotação"
          className="rounded-full w-9 h-9 border-[#1a3452] hover:border-quantum-primary text-slate-300"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={handleNext}
          title="Próxima fase"
          className="rounded-full w-9 h-9 border-[#1a3452] hover:border-quantum-primary text-slate-300"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {activeItem && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="rounded-full px-3 gap-1.5 text-xs text-slate-300 border-[#1a3452]"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-quantum-primary" />
                <span>Ocultar Detalhes</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-quantum-primary" />
                <span>Ver Detalhes</span>
              </>
            )}
          </Button>
        )}
      </div>

      {/* CARD SHADCN EXPANDIDO COM MÉTRICAS CORPORATIVAS & TRANSIÇÕES DE NÓS (z-50) */}
      {activeItem && isExpanded && (
        <div className="relative z-50 w-full max-w-2xl mt-6 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
          <Card className="bg-[#0b1b2d]/95 border border-[#1e70bf]/40 shadow-2xl shadow-[#1e70bf]/15 backdrop-blur-xl relative overflow-hidden rounded-2xl">
            {/* Linha de brilho superior Quantum */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2983db] to-transparent" />

            <CardHeader className="pb-3">
              {/* Linha de status & metadados */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="quantum" className="font-mono uppercase tracking-widest text-[11px]">
                    {activeItem.stage ?? `Etapa ${activeIndex + 1}`}
                  </Badge>
                  {activeItem.duration && (
                    <span className="text-xs text-slate-400 font-medium">
                      • {activeItem.duration}
                    </span>
                  )}
                </div>

                {activeItem.status && (
                  <Badge
                    variant={
                      activeItem.status === 'completed'
                        ? 'success'
                        : activeItem.status === 'in-progress'
                        ? 'quantum'
                        : 'secondary'
                    }
                  >
                    {activeItem.status === 'completed'
                      ? 'Concluído'
                      : activeItem.status === 'in-progress'
                      ? 'Foco Ativo'
                      : 'Próximo Passo'}
                  </Badge>
                )}
              </div>

              {/* Título do nó */}
              <CardTitle className="text-xl sm:text-2xl text-[#f8fafc] flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-quantum-primary/20 border border-quantum-primary/30 flex items-center justify-center text-quantum-accent shrink-0">
                  {activeItem.icon ?? <Sparkles className="w-4 h-4" />}
                </span>
                {activeItem.title}
              </CardTitle>

              <CardDescription className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {activeItem.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-2 pb-5 space-y-4">
              {/* Barra de Progresso / Nível de Energia */}
              <div className="p-3 rounded-xl bg-[#07111e]/80 border border-[#1a3452] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-quantum-accent" />
                    Progresso & Nível de Maturidade da Etapa:
                  </span>
                  <span className="text-quantum-accent font-bold font-mono">
                    {activeItem.energy ?? 100}%
                  </span>
                </div>
                <div className="w-full bg-[#0d1d2f] rounded-full h-2 overflow-hidden border border-[#1a3452]/80">
                  <div
                    className="h-full bg-gradient-to-r from-[#1e70bf] to-[#2983db] rounded-full transition-all duration-700 shadow-sm shadow-[#1e70bf]"
                    style={{ width: `${activeItem.energy ?? 100}%` }}
                  />
                </div>
              </div>

              {/* Entregáveis Principais */}
              {activeItem.deliverables && activeItem.deliverables.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Entregáveis Principais:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeItem.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-300 bg-[#07111e]/70 px-3 py-2 rounded-lg border border-[#1a3452]/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-quantum-primary shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Métrica de Impacto */}
              {activeItem.metrics && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#07111e]/70 border border-[#1a3452] text-xs">
                  <span className="text-slate-400 font-medium">Métrica de Impacto:</span>
                  <span className="font-semibold text-quantum-accent">
                    {activeItem.metrics}
                  </span>
                </div>
              )}

              {/* Botões para Nós Conectados (Transição direta entre etapas) */}
              <div className="pt-3 border-t border-[#1a3452] flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrev}
                  className="w-full sm:w-auto text-xs gap-2 border-[#1a3452] hover:border-quantum-primary/60 text-slate-300"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-quantum-primary" />
                  <span className="truncate">Anterior: {prevItem.title}</span>
                </Button>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
                  <Layers className="w-3 h-3 text-quantum-primary" />
                  <span>Transição Contínua</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNext}
                  className="w-full sm:w-auto text-xs gap-2 border-[#1a3452] hover:border-quantum-primary/60 text-slate-300"
                >
                  <span className="truncate">Próximo: {nextItem.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-quantum-primary" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default RadialOrbitalTimeline;
