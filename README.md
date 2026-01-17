# SokoHost - Digital Products Marketplace

Open-source marketplace platform for buying and selling digital products (ebooks, templates, courses, music, code, etc.).

## Features

? **Buyer Features**
- Browse and search digital products
- Secure payment with Stripe
- Download purchased products
- Leave reviews and ratings
- Manage purchase history

? **Seller Features**
- Upload and sell digital products
- Track sales and revenue
- Manage product listings
- View analytics

? **Technical Features**
- Built with Next.js (Frontend) and Express.js (Backend)
- PostgreSQL database via Supabase
- Secure JWT authentication
- Stripe payment integration
- RESTful API
- Fully open-source (MIT License)

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Axios** - HTTP client
- **Stripe React** - Payment UI

### Backend
- **Express.js** - Node.js framework
- **Supabase** - PostgreSQL database
- **JWT** - Authentication
- **Stripe API** - Payment processing
- **Bcrypt** - Password hashing

### Infrastructure
- **Vercel** - Frontend hosting (free tier)
- **Railway** - Backend hosting (free tier)
- **Supabase** - Database hosting (free tier)
- **Stripe** - Payment processing

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### 1. Clone the Repository

\\\\\\ash
git clone https://github.com/Manmout/sokohost.git
cd sokohost
\\\\\\

### 2. Setup Backend

\\\\\\ash
cd backend
npm install

# Create .env file
cp .env.example .env

# Add your environment variables:
# - SUPABASE_URL
# - SUPABASE_KEY
# - JWT_SECRET
# - STRIPE_SECRET_KEY
# - etc.

# Start backend server
npm run dev
\\\\\\

Backend will run on \\http://localhost:5000\\

### 3. Setup Frontend

\\\\\\ash
cd ../frontend
npm install

# Create .env.local file
cp .env.local.example .env.local

# Add your environment variables:
# - NEXT_PUBLIC_API_URL
# - NEXT_PUBLIC_STRIPE_KEY

# Start frontend development server
npm run dev
\\\\\\

Frontend will run on \\http://localhost:3000\\

### 4. Setup Database

1. Create a free Supabase account at https://supabase.com
2. Create a new project
3. In the SQL editor, run the contents of \\database/schema.sql\\
4. Optionally run \\database/seed.sql\\ for demo data
5. Copy your Supabase URL and anon key to backend \\.env\\

### 5. Setup Stripe

1. Create a free Stripe account at https://stripe.com
2. Get your API keys from the dashboard
3. Add them to backend \\.env\\ file

## API Documentation

### Authentication
- POST \\/api/auth/register\\ - Register new user
- POST \\/api/auth/login\\ - Login user

### Products
- GET \\/api/products\\ - List all products
- GET \\/api/products/:id\\ - Get product details
- POST \\/api/products\\ - Create new product (auth required)
- PUT \\/api/products/:id\\ - Update product (auth required)
- DELETE \\/api/products/:id\\ - Delete product (auth required)

### Orders
- POST \\/api/orders/create-intent\\ - Create Stripe payment intent
- POST \\/api/orders/confirm\\ - Confirm payment and create order
- GET \\/api/orders\\ - Get user's orders (auth required)

### Downloads
- GET \\/api/downloads/:product_id\\ - Get download link (auth required)

### Users
- GET \\/api/users/profile\\ - Get current user profile (auth required)
- PUT \\/api/users/profile\\ - Update user profile (auth required)

## Project Structure

\\\\\\
sokohost/
+-- backend/
¦   +-- src/
¦   ¦   +-- routes/        # API routes
¦   ¦   +-- middleware/    # Express middleware
¦   ¦   +-- config/        # Configuration files
¦   ¦   +-- utils/         # Utility functions
¦   ¦   +-- index.js       # Main server file
¦   +-- package.json
¦   +-- .env.example
+-- frontend/
¦   +-- app/               # Next.js app directory
¦   +-- components/        # React components
¦   +-- lib/              # Utility functions
¦   +-- styles/           # CSS files
¦   +-- package.json
¦   +-- .env.local.example
+-- database/
¦   +-- schema.sql        # Database schema
¦   +-- seed.sql          # Demo data
+-- README.md
\\\\\\

## Deployment

### Deploy Frontend to Vercel

\\\\\\ash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\\\\\\

### Deploy Backend to Railway

1. Go to https://railway.app
2. Connect your GitHub repository
3. Add environment variables
4. Deploy

## Environment Variables

### Backend (.env)
\\\\\\
PORT=5000
NODE_ENV=development
SUPABASE_URL=...
SUPABASE_KEY=...
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=...
STRIPE_PUBLIC_KEY=...
FRONTEND_URL=http://localhost:3000
\\\\\\

### Frontend (.env.local)
\\\\\\
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_KEY=...
\\\\\\

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Support

For support, open an issue on GitHub: https://github.com/Manmout/sokohost/issues

## Roadmap

- [ ] User dashboard
- [ ] Seller analytics
- [ ] Product reviews and ratings
- [ ] Search and filtering improvements
- [ ] Email notifications
- [ ] Refund system
- [ ] Multiple payment methods
- [ ] Product bundles
- [ ] Affiliate system

---

**Made with ?? by the SokoHost community**
