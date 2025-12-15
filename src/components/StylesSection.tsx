import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const guitarStyles = [
  {
    id: 'rock',
    name: 'Rock',
    icon: 'Zap',
    color: 'bg-primary',
    description: 'Мощные риффы, драйв и энергия',
    techniques: ['Power Chords', 'Palm Muting', 'String Bending'],
    difficulty: 'Средний'
  },
  {
    id: 'blues',
    name: 'Blues',
    icon: 'Music',
    color: 'bg-accent',
    description: 'Душевная игра с пентатониками',
    techniques: ['Bending', 'Vibrato', 'Hammer-on/Pull-off'],
    difficulty: 'Средний'
  },
  {
    id: 'jazz',
    name: 'Jazz',
    icon: 'Music2',
    color: 'bg-secondary',
    description: 'Сложные аккорды и импровизация',
    techniques: ['7th Chords', 'Chord Melody', 'Arpeggios'],
    difficulty: 'Сложный'
  },
  {
    id: 'metal',
    name: 'Metal',
    icon: 'Flame',
    color: 'bg-destructive',
    description: 'Скорость, техника, тяжесть',
    techniques: ['Alternate Picking', 'Sweep Picking', 'Tapping'],
    difficulty: 'Сложный'
  },
  {
    id: 'funk',
    name: 'Funk',
    icon: 'Sparkles',
    color: 'bg-secondary',
    description: 'Ритм, грув и синкопы',
    techniques: ['Muting', 'Scratching', 'Chord Stabs'],
    difficulty: 'Средний'
  }
];

interface StylesSectionProps {
  activeStyle: typeof guitarStyles[0];
  setActiveStyle: (style: typeof guitarStyles[0]) => void;
}

export default function StylesSection({ activeStyle, setActiveStyle }: StylesSectionProps) {
  return (
    <section id="styles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Музыкальные стили</h2>
          <p className="text-xl text-muted-foreground">Выбери свой путь и начни практику</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guitarStyles.map((style, index) => (
            <Card 
              key={style.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 animate-slide-up ${
                activeStyle.id === style.id ? 'border-primary shadow-lg' : 'border-transparent'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveStyle(style)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-3 rounded-lg ${style.color} animate-pulse-glow`}>
                    <Icon name={style.icon as any} size={32} className="text-white" />
                  </div>
                  <Badge variant="secondary">{style.difficulty}</Badge>
                </div>
                <CardTitle className="text-2xl">{style.name}</CardTitle>
                <CardDescription className="text-base">{style.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Основные техники:</p>
                  {style.techniques.map((tech) => (
                    <Badge key={tech} variant="outline" className="mr-2 mb-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
