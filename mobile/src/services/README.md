# Services

Core business logic services for the WitnessGuard mobile app.

## Service Architecture

Each service is responsible for a specific domain and follows these principles:

1. **Single Responsibility**: One service, one domain
2. **Interface-First**: Define the contract before implementation
3. **Result Types**: Return `Result<T, E>` instead of throwing for expected errors
4. **Testability**: Services can be mocked/stubbed in tests
5. **Platform Abstraction**: Hide platform-specific code behind interfaces

## Planned Services

### CameraService
- Camera hardware lifecycle management
- Pre-warming (COLD → WARM → HOT states)
- Rolling buffer management
- Snapshot capture
- Video recording with configurable quality

### AudioService
- Microphone access and recording
- Voice-only recording mode
- Audio buffer management

### LocationService
- GPS tracking with configurable accuracy
- Location history
- Geofence monitoring (future)
- Battery-aware accuracy adjustment

### NetworkService
- REST API client
- WebRTC streaming
- Offline queue for failed uploads
- Connection state monitoring

### StorageService
- Encrypted local database (SQLite)
- Encrypted file storage for media
- Secure keychain for encryption keys
- Cache management

### HeartbeatService
- Periodic check-in signals
- Missed check-in detection
- Escalation triggers

### EmergencyService
- Panic button handling
- 911 quick-dial overlay
- Circle alerting
- Recording state coordination

### TagService
- Tag CRUD operations
- Usage tracking for smart sorting
- System tags management

### NoteService
- Note CRUD operations
- Attachment to recordings/snapshots
- Voice-to-text integration (future)
