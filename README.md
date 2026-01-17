# 🚀 SokoHost - Plateforme Digital Open-Source

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Manmout/sokohost)](https://github.com/Manmout/sokohost)

Une plateforme **100% gratuite et open-source** pour vendre et acheter des produits digitaux.

## ✨ Features

- ✅ **100% Gratuit** - Zéro coûts, zéro frais cachés
- ✅ **Open Source** - Code public (MIT License)
- ✅ **Paiement Sécurisé** - Stripe intégré
- ✅ **Dashboard Vendeur** - Gérez produits et ventes
- ✅ **Multi-catégories** - Ebooks, Templates, Cours, Code, Musique

## 🚀 Quick Start

### Prérequis
- Node.js 18+
- npm
- Compte Supabase (gratuit)
- Compte Stripe (gratuit)

### Installation
```bash
# Clone
git clone https://github.com/Manmout/sokohost.git
cd sokohost

# Backend
cd backend
npm install
cp .env.example .env
# Remplir .env avec vos clés
npm run dev

# Frontend (autre terminal)
cd ../frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:5000

## 📚 Documentation

- [Setup Guide](docs/setup.md)
- [API Documentation](docs/api.md)
- [Database Schema](docs/database.sql)
- [Contributing](CONTRIBUTING.md)

## 🛠 Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Next.js 14 + Tailwind |
| Backend | Node.js + Express |
| Database | PostgreSQL (Supabase) |
| Payment | Stripe |
| Auth | JWT |

## 💰 Modèle Économique

- **Vendeurs** : Gratuit (frais Stripe seulement)
- **Acheteurs** : Gratuit (paiement direct)
- **Nous** : 10% sur frais Stripe

## 🤝 Contributing

Les contributions sont bienvenues !
```bash
git checkout -b feature/awesome
git commit -m "feat: add awesome feature"
git push origin feature/awesome
```

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

## 📝 License

MIT - Voir [LICENSE](LICENSE)

## 📞 Support

- 📖 [Documentation](docs/)
- 🐛 [Issues](https://github.com/Manmout/sokohost/issues)
- 💬 [Discussions](https://github.com/Manmout/sokohost/discussions)

---

**Made with ❤️ by [Manmout](https://github.com/Manmout)**
