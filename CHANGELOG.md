# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.10] - 2024-11-28

### Added

- New application layout design
- Additional UI libraries and dependencies
  (list the specific libraries added)

### Changed

- Completed final UI styling and components
- Enhanced user interface design
- Improved overall layout structure

### Fixed

- Resolved authentication flow issues
- Fixed user session handling

## [0.0.9] - 2024-11-28

### Added

- Created custom hooks for backend integration
- Implemented UI-backend data connectivity
- Added Biome.js for code formatting and linting

### Changed

- Enhanced UI component styling and functionality
- Migrated from Prettier to Biome.js for code formatting
- Applied consistent code formatting across the entire application

### Removed

- Prettier configuration and dependencies

## [0.0.8] - 2024-11-27

### Added

- Implemented new home page design in page.tsx
- Enhanced sidebar navigation functionality

### Changed

- Applied consistent formatting across the application
- Improved sidebar navigation structure and styling

### Removed

- Unused navigation components:
  - team-switcher.tsx
  - nav-user.tsx
  - nav-projects.tsx
  - nav-main.tsx

### Fixed

- Corrected breadcrumb navigation links

## [0.0.7] - 2024-11-27

### Added

- Integrated shadcn/ui component library
- Installed Radix UI as a dependency
- Created initial UI component structure
- Generated core UI components:
  - Avatar
  - Badge
  - Breadcrumbs
  - Button
  - Collapsable
  - Card
  - Dropdown-menu
  - Input
  - Separator
  - Sheet
  - Skeleton
  - Tabs
  - Toggle-group
  - Toogle
  - Tooltip

### Changed

- Implemented basic application layout and styling

## [0.0.6] - 2024-11-26

### Changed

- Updated env.ts configuration for production deployment
- Migrated from start-database.sh script to docker-compose for improved database management

### Removed

- Deprecated start-database.sh script

## [0.0.5] - 2024-11-26

### Added

- Initial deployment to Vercel platform

### Changed

- Migrated env.js to env.ts for improved type safety
- Converted next.config.js to next.config.ts

## [0.0.4] - 2024-11-26

### Added

- New assessment list component at ~/app/\_components/assessment-list.tsx
- New assessment creation form at ~/app/\_components/create-assessment-form.tsx

## [0.0.3] - 2024-11-26

### Changed

- Relocated router configuration from root to /routers/appRouter.ts for better project structure

## [0.0.2] - 2024-11-26

### Changed

- Migrated schema from post.ts to assessment.ts for assessment functionality
- Updated root.ts routing to support assessment operations

### Fixed

- Resolved ESLint warnings and code style issues

## [0.0.1] - 2024-11-26

### Added

- Set up initial Prisma schema and database configuration
- Implemented first database migrations
- Created base schema structure for the application

## [0.0.0] - 2024-11-26

### Added

- Initial project setup and repository creation
- Basic project structure and dependencies
- Core configuration files
