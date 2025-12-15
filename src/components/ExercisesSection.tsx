import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const exercises = [
  {
    id: 'rhythm-1',
    name: 'Базовый ритм 4/4',
    pattern: '🎵 ▼ ▼ ▼ ▼',
    bpm: 80,
    description: 'Четыре удара вниз на четверть'
  },
  {
    id: 'rhythm-2',
    name: 'Ритм с акцентами',
    pattern: '🎵 ▼ ▲ ▼ ▲',
    bpm: 90,
    description: 'Чередование ударов вниз-вверх'
  },
  {
    id: 'rhythm-3',
    name: 'Синкопированный ритм',
    pattern: '🎵 ▼ - ▼ ▲ - ▲',
    bpm: 100,
    description: 'Ритм с паузами и акцентами'
  }
];

interface ExercisesSectionProps {
  currentExercise: typeof exercises[0];
  setCurrentExercise: (exercise: typeof exercises[0]) => void;
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function ExercisesSection({ currentExercise, setCurrentExercise, isPlaying, togglePlay }: ExercisesSectionProps) {
  return (
    <section id="exercises" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Интерактивные упражнения</h2>
          <p className="text-xl text-muted-foreground">Тренируй ритм и координацию</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {exercises.map((ex) => (
              <Card
                key={ex.id}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  currentExercise.id === ex.id ? 'border-2 border-primary' : ''
                }`}
                onClick={() => setCurrentExercise(ex)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{ex.name}</CardTitle>
                  <CardDescription>{ex.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{ex.bpm} BPM</Badge>
                    <span className="text-2xl">{ex.pattern}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{currentExercise.name}</CardTitle>
                  <CardDescription className="text-lg">{currentExercise.description}</CardDescription>
                </div>
                <Badge className="text-lg px-4 py-2">{currentExercise.bpm} BPM</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background/50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4 font-mono tracking-wider">
                  {currentExercise.pattern}
                </div>
                <p className="text-muted-foreground">Ритмический паттерн</p>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  onClick={togglePlay}
                  className={`text-lg px-8 ${isPlaying ? 'animate-pulse-glow' : ''}`}
                >
                  <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} className="mr-2" />
                  {isPlaying ? 'Играет...' : 'Запустить'}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="RotateCcw" size={24} className="mr-2" />
                  Сброс
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Target" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Точность</p>
                        <p className="text-2xl font-bold text-primary">85%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <Icon name="TrendingUp" size={24} className="text-accent" />
                      <div>
                        <p className="font-semibold">Прогресс</p>
                        <p className="text-2xl font-bold text-accent">+12%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
