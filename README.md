# OpenChat by Svetra

Minimalist yapılı, koyu temalı bir AI sohbet arayüzü.

## Teknolojiler

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Dil**: TypeScript
- **Stil**: Tailwind CSS 4 + Custom CSS
- **Font**: [Geist Font](https://vercel.com/font) (Geist Sans & Geist Mono)
- **AI Entegrasyonu**: OpenRouter API (Streaming destekli)

## Kurulum

### 1. Bağımlılıkları yükleyin

```bash
npm install
```

### 2. Ortam değişkenlerini ayarlayın

Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
touch .env.local
```

### 3. API Anahtarı Ekleyin

`.env.local` dosyasına aşağıdaki değişkenleri ekleyin:

```env
# OpenRouter API Anahtarınız (https://openrouter.ai/keys adresinden alabilirsiniz)
NEXT_PUBLIC_OPENROUTER_API_KEY=sk-or-v1-xxxxx...

# Kullanılacak model (opsiyonel, varsayılan: openai/gpt-4o-mini)
NEXT_PUBLIC_DEFAULT_MODEL=openai/gpt-4o-mini
```

OpenRouter'dan API anahtarı almak için:
1. [openrouter.ai](https://openrouter.ai) adresine gidin
2. Hesap oluşturun veya giriş yapın
3. [API Keys](https://openrouter.ai/keys) sayfasına gidin
4. Yeni bir anahtar oluşturun

### 4. Projeyi çalıştırın

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Site Yapısı

```
┌─────────────────────────────────────────┐
│  Navbar (OpenChat by Svetra | Links ▼)  │
├─────────────────────────────────────────┤
│                                         │
│  [Ana İçerik Alanı]                     │
│                                         │
│  - Sohbet başlangıcında:               │
│    "What can I help with?" başlığı       │
│    + Öneri butonları                    │
│                                         │
│  - Sohbet sırasında:                    │
│    Mesaj listesi (siz + Svetra)         │
│    + Streaming yanıtlar                 │
│                                         │
├─────────────────────────────────────────┤
│  [Mesaj Giriş Alanı]                    │
│  ┌─────────────────────────────────┐    │
│  │ Ask anything...             [⬆] │    │
│  └─────────────────────────────────┘    │
│                                         │
│                              [New Chat]  │  ← Sabit buton
└─────────────────────────────────────────┘
```

## Özellikler

- **Minimalist Tasarım**: Sade, dikkat dağıtmayan arayüz
- **Koyu Tema**: Göz yorgunluğunu azaltan siyah arka plan
- **Streaming Yanıtlar**: AI yanıtları anlık olarak ekrana yazılır (typewriter efekti)
- **Markdown Desteği**: Kod blokları, kalın/italik metin, listeler
- **Öneri Butonları**: Hızlı başlangıç için örnek komutlar
- **Yeni Sohbet**: Sohbet geçmişini temizleyip sıfırlama
- **Responsive**: Mobil ve masaüstü uyumlu

## Kullanım

1. API anahtarınızı `.env.local` dosyasına ekleyin
2. Siteyi açın
3. Mesajınızı yazın ve Enter veya gönder butonuna tıklayın
4. Svetra'nın yanıtını streaming olarak izleyin
5. Yeni sohbet için sağ alt köşedeki "New Chat" butonuna tıklayın

## Geliştirme

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Lint
npm run lint
```

## Notlar

- API anahtarı tarayıcıya gönderilir (`NEXT_PUBLIC_` prefix), bu nedenle hassas anahtarlar için yetki sınırlı modeller kullanmanız önerilir
- Varsayılan model `openai/gpt-4o-mini`'dir; `.env.local` dosyasında değiştirebilirsiniz
- Tüm sohbet geçmişi tarayıcıda tutulur, sunucuda saklanmaz