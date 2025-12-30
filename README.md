# NullMuseum �

Коллекция скриншотов с ошибками NULL из различных программ и систем. Галерея создана сообществом для документирования этих интересных багов!

> A collection of NULL error screenshots from various programs and systems. Community-driven gallery documenting these interesting bugs!

## 🌐 Languages / Языки

- [English](#english-version) 
- [Русский](#русская-версия)

---

## English Version

### About the Project

**NullMuseum** is a community-driven gallery collecting screenshots of NULL errors, null pointer exceptions, and NULL-related bugs from various software and systems. It's a fascinating collection showing how the absence of value manifests across different platforms and applications.

### ✨ Features

- 📱 **Fully Responsive** - Beautiful on mobile, tablet, and desktop
- 🐛 **Community Driven** - Anyone can contribute via pull requests
- ⚡ **Lightning Fast** - Built with VitePress and Vue 3
- 🔍 **Lightbox Viewer** - Click any screenshot for a full-screen view
- 🌍 **Multilingual** - Available in English and Russian

 

### 🚀 How to Contribute

Found a NULL error in a program or system? Share it with the community!

#### Quick Guide

1. **Fork** this repository
2. **Add** your screenshot to `public/gallery/`
   - Formats: JPG, PNG, WebP
   - Max size: 5MB
   - Naming: `program-name-error.png` (lowercase with hyphens)
3. **Commit** with a descriptive message
4. **Submit** a pull request

#### Detailed Instructions

See our full [Contribution Guide](./contribute.md) for step-by-step instructions.

#### Screenshot Requirements

✅ **Do Submit:**
- Clear screenshots showing NULL errors
- Screenshots from any program or system
- Images under 5MB
- Screenshots with personal info removed

❌ **Don't Submit:**
- Blurry or unclear screenshots
- Images with personal/sensitive data
- Unrelated content
- Duplicates of existing screenshots

### 📁 Project Structure

```
null-reports/
├── .vitepress/
│   ├── config.mts          # VitePress config with i18n
│   └── theme/
│       ├── components/
│       │   └── ImageGallery.vue  # Gallery component
│       └── style.css        # Responsive styles
├── public/
│   └── gallery/             # 📸 Screenshots go here!
├── ru/                      # Russian translations
│   ├── index.md
│   └── contribute.md
├── index.md                 # English homepage
├── contribute.md            # English contribution guide
└── README.md                # This file
```

### 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 📄 License

MIT License - feel free to use this for your own projects!

---

## Русская версия

### О проекте

**NullMuseum** — это галерея, созданная сообществом для сбора скриншотов с NULL ошибками, исключениями null pointer и багами, связанными с NULL в различных программах и системах. Это увлекательная коллекция, показывающая, как отсутствие значения проявляется на разных платформах и в приложениях.

### ✨ Возможности

- 📱 **Адаптивный дизайн** - Отлично выглядит на мобильных, планшетах и компьютерах
- 🐛 **Создано сообществом** - Любой может добавить свои скриншоты через pull request
- ⚡ **Быстрая загрузка** - Создано на VitePress и Vue 3
- 🔍 **Просмотр в полный экран** - Нажмите на любой скриншот для увеличения
- 🌍 **Мультиязычность** - Доступен на английском и русском языках

### 🚀 Как добавить свой скриншот

Нашли NULL ошибку в программе или системе? Поделитесь ею с сообществом!

#### Краткая инструкция

1. **Сделайте Fork** этого репозитория
2. **Добавьте** свой скриншот в `public/gallery/`
   - Форматы: JPG, PNG, WebP
   - Макс. размер: 5MB
   - Имя файла: `название-программы-ошибка.png` (в нижнем регистре с дефисами)
3. **Сделайте commit** с описательным сообщением
4. **Отправьте** pull request

#### Подробная инструкция

См. полное [Руководство по добавлению скриншотов](./ru/contribute.md) с пошаговыми инструкциями.

#### Требования к скриншотам

✅ **Присылайте:**
- Чёткие скриншоты с NULL ошибками
- Скриншоты из любых программ или систем
- Изображения размером до 5MB
- Скриншоты без личной информации

❌ **Не присылайте:**
- Размытые или нечёткие скриншоты
- Изображения с личными/конфиденциальными данными
- Несвязанный контент
- Дубликаты существующих скриншотов

### �️ Локальная разработка

```bash
# Установите зависимости
npm install

# Запустите сервер разработки
npm run dev

# Соберите для продакшена
npm run build
```

### 📄 Лицензия

Лицензия MIT - используйте свободно для своих проектов!

---

**Присоединяйтесь к документированию NULL ошибок! / Join us in documenting NULL errors!** 🐛
