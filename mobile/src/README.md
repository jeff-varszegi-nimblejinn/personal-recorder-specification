# Mobile App Source Structure

This directory contains the source code for the WitnessGuard React Native mobile application.

## Directory Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/       # Generic components (Button, Input, Card, etc.)
│   ├── recording/    # Recording-related components
│   ├── emergency/    # Panic button, emergency overlay
│   └── artifacts/    # Notes, tags, snapshots display
│
├── screens/          # Full-screen views (navigation targets)
│   ├── home/         # Main dashboard
│   ├── record/       # Recording interface
│   ├── artifacts/    # Browse recordings, notes, snapshots
│   ├── circles/      # Circle management
│   ├── settings/     # User preferences
│   └── auth/         # Login, registration
│
├── services/         # Core business logic services
│   ├── camera/       # Camera management, pre-warming, buffer
│   ├── audio/        # Audio recording
│   ├── location/     # GPS tracking
│   ├── network/      # API client, streaming
│   ├── storage/      # Local encrypted storage
│   ├── heartbeat/    # Check-in service
│   └── emergency/    # Panic button, 911 integration
│
├── store/            # Redux state management
│   ├── slices/       # Redux Toolkit slices
│   └── middleware/   # Custom middleware
│
├── hooks/            # Custom React hooks
│
├── utils/            # Utility functions
│   ├── encryption/   # Crypto utilities
│   ├── formatting/   # Date, text formatting
│   └── validation/   # Input validation
│
├── navigation/       # React Navigation setup
│
├── constants/        # App-wide constants
│
├── assets/           # Static assets (images, fonts)
│
└── types/            # App-specific TypeScript types
```

## Conventions

### Component Structure
Each component directory should contain:
- `ComponentName.tsx` - The component implementation
- `ComponentName.styles.ts` - StyleSheet definitions
- `ComponentName.test.tsx` - Unit tests
- `index.ts` - Re-export for clean imports

### Service Structure
Each service should:
- Be a singleton or use dependency injection
- Expose a clean interface
- Handle its own error cases with Result types
- Be testable in isolation
