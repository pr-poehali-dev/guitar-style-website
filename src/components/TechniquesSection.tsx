import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { guitarStyles } from './StylesSection';

interface TechniquesSectionProps {
  activeStyle: typeof guitarStyles[0];
}

export default function TechniquesSection({ activeStyle }: TechniquesSectionProps) {
  return (
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
  );
}
