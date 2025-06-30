# KenyaAI Jobs - replit.md

## Overview

Wira AI Jobs is a modern full-stack web application designed to empower Kenyan professionals with AI-powered career tools. The platform provides services including resume optimization, job matching, interview coaching, and application tracking. Built with a React frontend and Express.js backend, the application utilizes modern web technologies to deliver a seamless user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom Kenyan-themed color palette
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Connection**: Neon Database serverless PostgreSQL
- **Migrations**: Drizzle Kit for database schema management
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development

## Key Components

### Shared Schema
- **Location**: `shared/schema.ts`
- **Purpose**: Centralized data models and validation schemas
- **Tables**: Users and Contacts tables with Zod validation
- **Type Safety**: Full TypeScript integration with Drizzle ORM

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Landing page with animated counters and CTAs
- **Features Section**: AI-powered service highlights
- **Services Section**: Detailed service offerings with visual cards
- **Testimonials**: Success stories with dynamic statistics
- **Contact Form**: Lead capture with validation and submission handling
- **UI Components**: Comprehensive component library based on Radix UI

### Backend Services
- **Contact Management**: API endpoints for contact form submission and retrieval
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Request Logging**: Detailed API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **State Management**: TanStack Query manages server state and caching
3. **API Communication**: HTTP requests sent to Express.js backend via fetch API
4. **Request Processing**: Express middleware handles parsing, logging, and validation
5. **Data Persistence**: Drizzle ORM manages database operations with type safety
6. **Response Handling**: JSON responses sent back to frontend with proper error handling
7. **UI Updates**: React components re-render based on updated state

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **wouter**: Lightweight React router
- **framer-motion**: Animation library
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Server**: Vite development server with HMR
- **Database**: In-memory storage for rapid development
- **Port Configuration**: Dynamic port assignment
- **Hot Reload**: Full-stack hot reload with Vite middleware

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static file serving from built frontend
- **Environment**: Production configuration with PostgreSQL database

### Database Management
- **Schema**: Managed via Drizzle Kit migrations
- **Connection**: Environment variable-based configuration
- **Deployment**: Push schema changes with `npm run db:push`

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run check`: TypeScript type checking
- `npm run db:push`: Database schema deployment

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```