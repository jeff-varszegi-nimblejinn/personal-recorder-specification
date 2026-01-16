/**
 * Shared Types Index
 *
 * This file will export all domain model types once we define them together.
 * For now, it exports placeholder types to establish the structure.
 *
 * Domain models to be defined:
 * - User & UserSettings
 * - Circle & CircleMember
 * - Recording (video/audio)
 * - Snapshot
 * - Note
 * - Tag
 * - Location types
 * - Emergency types
 * - API types
 */

// =============================================================================
// PLACEHOLDER - We will define these together
// =============================================================================

/**
 * Placeholder type - will be replaced with actual domain models
 */
export interface Placeholder {
  _note: 'Domain models will be defined collaboratively';
}

// =============================================================================
// UTILITY TYPES (These are stable and can be used now)
// =============================================================================

/**
 * Makes all properties of T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extracts the element type from an array type
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Creates a type with required id and optional other fields
 */
export type WithId<T> = T & { id: string };

/**
 * Timestamps commonly attached to database entities
 */
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Soft-delete timestamp
 */
export interface SoftDeletable {
  deletedAt?: Date;
}

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  meta?: {
    requestId: string;
    timestamp: string;
  };
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// =============================================================================
// BRANDED TYPES (Type-safe ID handling)
// =============================================================================

/**
 * Branded type helper - creates nominal types for IDs
 * This prevents accidentally passing a UserId where a CircleId is expected
 */
declare const brand: unique symbol;
export type Brand<T, TBrand extends string> = T & { [brand]: TBrand };

/**
 * UUID string branded for specific entity types
 * We'll define specific ID types (UserId, CircleId, etc.) when we create domain models
 */
export type EntityId<TEntity extends string> = Brand<string, TEntity>;

// =============================================================================
// RESULT TYPE (For error handling without exceptions)
// =============================================================================

/**
 * Result type for operations that can fail
 * Prefer this over throwing exceptions for expected error cases
 */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

/**
 * Helper to create success result
 */
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

/**
 * Helper to create error result
 */
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

/**
 * Unwrap a result, throwing if it's an error
 */
export function unwrap<T, E>(result: Result<T, E>): T {
  if (result.ok) {
    return result.value;
  }
  throw result.error;
}
