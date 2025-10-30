import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Building2',
      title: 'Строительство зданий',
      description: 'Возведение жилых и коммерческих объектов любой сложности'
    },
    {
      icon: 'Hammer',
      title: 'Ремонт и отделка',
      description: 'Капитальный и косметический ремонт помещений под ключ'
    },
    {
      icon: 'HardHat',
      title: 'Проектирование',
      description: 'Разработка проектной документации с учетом всех норм'
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Модернизация и перепланировка существующих объектов'
    },
    {
      icon: 'Home',
      title: 'Частное строительство',
      description: 'Строительство коттеджей, дач и загородных домов'
    },
    {
      icon: 'Truck',
      title: 'Материалы и логистика',
      description: 'Поставка стройматериалов и организация доставки'
    }
  ];

  const advantages = [
    { icon: 'Award', text: 'Более 15 лет на рынке' },
    { icon: 'Users', text: 'Опытная команда специалистов' },
    { icon: 'CheckCircle2', text: 'Гарантия качества работ' },
    { icon: 'Clock', text: 'Соблюдение сроков' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/e79d5bf6-8ec0-42f7-bef3-1fae3af29fec.png" 
            alt="ProfiES" 
            className="h-12"
          />
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold">О компании</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-semibold">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-semibold">Контакты</a>
          </nav>
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
            <Icon name="Phone" size={20} />
            +7 (495) 123-45-67
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Профессиональное <br />
            <span className="text-primary">строительство</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реализуем строительные проекты любой сложности с гарантией качества и в срок
          </p>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">О компании</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              <strong className="text-primary font-bold">Профиес</strong> — надежная строительная компания, 
              специализирующаяся на возведении жилых и коммерческих объектов. 
              Мы предлагаем полный цикл строительных услуг от проектирования до сдачи объекта под ключ.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name={advantage.icon} size={32} className="mx-auto mb-4 text-primary" />
                  <p className="font-semibold text-sm">{advantage.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="flex items-start gap-4">
              <Icon name="Phone" size={24} className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Телефон</p>
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Mail" size={24} className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@profies.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@profies.ru
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="MapPin" size={24} className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">
                  г. Москва, ул. Строительная, д. 15
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Clock" size={24} className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Режим работы</p>
                <p className="text-muted-foreground">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб-Вс: выходной
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/e79d5bf6-8ec0-42f7-bef3-1fae3af29fec.png" 
            alt="ProfiES" 
            className="h-10 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-gray-400">
            © 2024 Профиес. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;