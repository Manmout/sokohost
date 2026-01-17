# 📖 Setup Guide

## Prérequis

- Node.js 18+ (https://nodejs.org/)
- npm ou yarn
- Compte Supabase (https://supabase.com)
- Compte Stripe (https://stripe.com)

## 1️⃣ Supabase Setup

1. Créez un projet sur supabase.com
2. Allez dans **Settings → API**
3. Copiez :
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `SUPABASE_SERVICE_KEY`

4. Exécutez le script SQL de `docs/database.sql`

## 2️⃣ Stripe Setup

1. Créez un compte sur stripe.com
2. Allez dans **Developers → API Keys**
3. Copiez :
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
4. Configurez les webhooks

## 3️⃣ Installation Backend
```bash
cd backend
npm install
cp .env.example .env
# Remplir .env avec vos clés
npm run dev
```

Vérifier: http://localhost:5000/health

## 4️⃣ Installation Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
# Remplir .env.local
npm run dev
```

Vérifier: http://localhost:3000

## 5️⃣ Créer un compte de test

1. Allez sur http://localhost:3000
2. Cliquez **S'inscrire**
3. Remplissez les informations

## ⚙️ Variables d'Environnement

### Backend `.env`
```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=your_key
SUPABASE_SERVICE_KEY=your_service_key

STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

SENDER_EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_password
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

**Setup terminé ? Explorez le code !**
