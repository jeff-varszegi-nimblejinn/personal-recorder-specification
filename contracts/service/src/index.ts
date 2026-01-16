/**
 * @witness-guard/shared
 *
 * Shared TypeScript types and utilities used across mobile, service, and web packages.
 *
 * This package contains:
 * - Domain model types (User, Circle, Recording, Note, Tag, etc.)
 * - API request/response types
 * - Shared constants and enums
 * - Validation schemas (future: Zod)
 * - Utility types
 */

// Re-export all types
export * from './types';

// Version for debugging
export const SHARED_VERSION = '0.1.0';
