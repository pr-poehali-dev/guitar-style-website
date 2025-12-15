import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import StylesSection, { guitarStyles } from '@/components/StylesSection';
import TechniquesSection from '@/components/TechniquesSection';
import ExercisesSection, { exercises } from '@/components/ExercisesSection';

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

      <StylesSection activeStyle={activeStyle} setActiveStyle={setActiveStyle} />

      <TechniquesSection activeStyle={activeStyle} />

      <ExercisesSection 
        currentExercise={currentExercise} 
        setCurrentExercise={setCurrentExercise}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
      />

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
