/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * BuildCache contains information about a build cache record.
 * 
 */
export type BuildCache = {
    /**
     * Unique ID of the build cache record.
 * 
     */
    ID?: string;
    /**
     * ID of the parent build cache record.
 *
 * > **Deprecated**: This field is deprecated, and omitted if empty.
 * 
     */
    Parent?: string | null;
    /**
     * List of parent build cache record IDs.
 * 
     */
    Parents?: Array<string> | null;
    /**
     * Cache record type.
 * 
     */
    Type?: 'internal' | 'frontend' | 'source.local' | 'source.git.checkout' | 'exec.cachemount' | 'regular';
    /**
     * Description of the build-step that produced the build cache.
 * 
     */
    Description?: string;
    /**
     * Indicates if the build cache is in use.
 * 
     */
    InUse?: boolean;
    /**
     * Indicates if the build cache is shared.
 * 
     */
    Shared?: boolean;
    /**
     * Amount of disk space used by the build cache (in bytes).
 * 
     */
    Size?: number;
    /**
     * Date and time at which the build cache was created in
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
 * 
     */
    CreatedAt?: string;
    /**
     * Date and time at which the build cache was last used in
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
 * 
     */
    LastUsedAt?: string | null;
    UsageCount?: number;
};
