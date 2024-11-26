# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
