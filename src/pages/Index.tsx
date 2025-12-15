import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const guitarStyles = [
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

const exercises = [
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

export default function Index() {
  const [activeStyle, setActiveStyle] = useState(guitarStyles[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(exercises[0]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music4" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">Guitar Styles</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#styles" className="hover:text-primary transition-colors">Стили</a>
              <a href="#techniques" className="hover:text-primary transition-colors">Техники</a>
              <a href="#exercises" className="hover:text-primary transition-colors">Упражнения</a>
              <a href="#lessons" className="hover:text-primary transition-colors">Уроки</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-4 py-2" variant="secondary">
              <Icon name="Guitar" size={20} className="mr-2" />
              Освой гитару на новом уровне
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Стили игры на гитаре
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Изучай техники, практикуйся интерактивно и развивай свой уникальный стиль
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Посмотреть уроки
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

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

      <section id="techniques" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Изучи техники</h2>
            <p className="text-xl text-muted-foreground">Техники для стиля {activeStyle.name}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-lg ${activeStyle.color}`}>
                    <Icon name={activeStyle.icon as any} size={40} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{activeStyle.name}</CardTitle>
                    <CardDescription className="text-lg">{activeStyle.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={activeStyle.techniques[0]} className="w-full">
                  <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${activeStyle.techniques.length}, 1fr)` }}>
                    {activeStyle.techniques.map((tech) => (
                      <TabsTrigger key={tech} value={tech}>{tech}</TabsTrigger>
                    ))}
                  </TabsList>
                  {activeStyle.techniques.map((tech) => (
                    <TabsContent key={tech} value={tech} className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">{tech}</h3>
                        <p className="text-muted-foreground">
                          Техника {tech} является ключевой для стиля {activeStyle.name}. 
                          Регулярная практика этого приема поможет развить характерное звучание.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <Card className="bg-background">
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <Icon name="Target" size={20} />
                                Цель техники
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">Развитие характерного звучания и экспрессии в стиле {activeStyle.name}</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-background">
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <Icon name="Clock" size={20} />
                                Время практики
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">Рекомендуется 15-20 минут ежедневной практики</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      <section id="lessons" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программа обучения</h2>
            <p className="text-xl text-muted-foreground">Структурированный путь от новичка до мастера</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <Badge>Уровень 1</Badge>
                </div>
                <CardTitle>Основы гитары</CardTitle>
                <CardDescription>Базовые аккорды, бой и переборы</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Постановка рук</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Базовые аккорды</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Ритм-гитара</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <Badge>Уровень 2</Badge>
                </div>
                <CardTitle>Продвинутые техники</CardTitle>
                <CardDescription>Развитие скорости и точности</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Барре-аккорды</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Соло-техники</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Импровизация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Icon name="Flame" size={24} className="text-secondary" />
                  </div>
                  <Badge>Уровень 3</Badge>
                </div>
                <CardTitle>Стилистика</CardTitle>
                <CardDescription>Углубление в выбранный стиль</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Характерные приемы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Звукоизвлечение</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Композиция</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-destructive/20">
                    <Icon name="Crown" size={24} className="text-destructive" />
                  </div>
                  <Badge>Мастер</Badge>
                </div>
                <CardTitle>Профессионал</CardTitle>
                <CardDescription>Развитие собственного стиля</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-destructive" />
                    <span>Авторская музыка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-destructive" />
                    <span>Студийная работа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-destructive" />
                    <span>Выступления</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Music4" size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">Guitar Styles</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Обучение игре на гитаре с интерактивными упражнениями
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Music" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              © 2025 Guitar Styles. Играй с душой 🎸
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
