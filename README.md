# WitnessGuard

> "Evidence that cannot be deleted, confiscated, or suppressed; help that cannot be blocked or delayed."

Personal recording and emergency-response system for legal observers, witnesses, and individuals in vulnerable situations.

## Project Structure

```
witness-guard/
├── mobile/              # React Native mobile application
├── service/             # Backend API services (Node.js/Fastify)
├── shared/              # Shared TypeScript types and utilities
├── web/                 # Web dashboard (future)
├── docs/                # Documentation and specifications
└── tools/               # Build scripts, dev utilities
```

## Quick Start

### Prerequisites

- Node.js 20+ LTS
- pnpm (recommended) or npm
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Development Setup

```bash
# Install dependencies for all packages
pnpm install

# Start mobile app development
cd mobile
pnpm start           # Start Metro bundler
pnpm android         # Run on Android emulator
pnpm ios             # Run on iOS simulator (macOS only)

# Start backend services
cd service
pnpm dev             # Start API server with hot reload
```

### Rapid Development

- **Hot Reload**: Edit code, see changes in ~1-2 seconds
- **Metro Bundler**: JavaScript bundler for React Native
- **Flipper**: Debug tool for network, state, and logs

## Documentation

- [Technical Specification](./TECHNICAL_SPECIFICATION.md)
- [Architecture Decision Records](./docs/adr/) (coming soon)

## License

Apache 2.0
