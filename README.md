# Patient Assessment Application

A modern web application for managing patient assessments, built with Next.js, tRPC, and TypeScript. Live demo: [patient-assessment-one.vercel.app](https://patient-assessment-one.vercel.app)

## Technologies Used

### Backend
- Next.js with App Router
- tRPC for type-safe APIs
- Prisma as ORM
- PostgreSQL for database

### Frontend
- Next.js
- React
- Tailwind CSS
- shadcn/ui components
- Radix UI

### Authentication
- NextAuth.js

### Development & Deployment
- Docker for local development
- Vercel for hosting
- Biome.js for code formatting

## Getting Started

### Prerequisites
- Node.js 18 or higher
- Docker and Docker Compose
- npm or yarn
- Git

### Installation Steps

1. Clone the repository
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then edit `.env` with your configuration:
- Database connection details
- NextAuth secret and providers
- Other required environment variables

4. Start the database using Docker Compose
```bash
docker compose up -d
```

5. Run database migrations
```bash
npx prisma migrate dev
```

6. Start the development server
```bash
npm run dev
```

The application should now be running at `http://localhost:3000`

## Project Structure

```
.
├── .next/                    # Next.js build output
├── node_modules/            # Project dependencies
├── prisma/                  # Database configuration
│   ├── migrations/         # Database migrations
│   ├── schema.prisma      # Prisma schema
│   └── seed.ts            # Database seeding
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── _components/  # Shared UI components
│   │   │   ├── latest-assessments.tsx
│   │   │   ├── new-assessment-form.tsx
│   │   │   └── questions.tsx
│   │   ├── api/         # API routes
│   │   │   ├── auth/    # Authentication endpoints
│   │   │   └── trpc/    # tRPC endpoints
│   │   ├── assessment/  # Assessment pages
│   │   │   └── page.tsx
│   │   └── login/      # Login pages
│   │       ├── actions.ts
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/ui/   # UI component library
│   ├── hooks/          # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── lib/           # Utility libraries
│   │   └── utils.ts
│   ├── server/        # Server-side code
│   │   └── api/      # API definitions
│   │       ├── routers/
│   │       │   ├── app.ts
│   │       │   ├── assessment.ts
│   │       │   └── trpc.ts
│   │       ├── auth/
│   │       └── db.ts
│   └── styles/       # Global styles
│       └── globals.css
├── .env              # Environment variables
├── .env.example      # Environment variables example
├── .gitignore
├── biome.json       # Biome configuration
├── CHANGELOG.md     # Project changelog
├── components.json  # UI components configuration
├── docker-compose.yml # Docker configuration
├── next-env.d.ts    # Next.js TypeScript declarations
├── next.config.ts   # Next.js configuration
├── package.json     # Project dependencies and scripts
└── package-lock.json
```

## Development Assumptions

1. Users have basic knowledge of Next.js and React
2. Development environment supports Docker
3. PostgreSQL is the preferred database
4. Authentication is handled through NextAuth.js
5. The application will be deployed on Vercel

## Development Challenges & Solutions

1. **Type-safe API Communication**
   - Challenge: Ensuring type safety between frontend and backend
   - Solution: Implemented tRPC for end-to-end type safety

2. **Authentication Flow**
   - Challenge: Managing user sessions and authentication state
   - Solution: Integrated NextAuth.js with custom configurations

3. **Database Management**
   - Challenge: Local development database setup
   - Solution: Migrated to Docker Compose for consistent development environment

4. **UI Component Architecture**
   - Challenge: Building a consistent and maintainable UI
   - Solution: Adopted shadcn/ui components with Radix UI primitives

## Recent Improvements

1. **UI Enhancements**
   - Complete UI overhaul with modern design
   - New layout implementation
   - Integration of shadcn/ui components

2. **Development Workflow**
   - Migrated from Prettier to Biome.js
   - Improved code formatting and linting
   - Streamlined development setup with Docker Compose

3. **Authentication**
   - Enhanced user session handling
   - Fixed authentication flow issues

4. **Code Organization**
   - Implemented custom hooks for backend integration
   - Improved project structure
   - Removed unused components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.