/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Mount = {
    /**
     * Container path.
     */
    Target?: string;
    /**
     * Mount source (e.g. a volume name, a host path).
     */
    Source?: string;
    /**
     * The mount type. Available types:
 *
 * - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container.
 * - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.
 * - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
 * - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container.
 * - `cluster` a Swarm cluster volume
 * 
     */
    Type?: 'bind' | 'volume' | 'tmpfs' | 'npipe' | 'cluster';
    /**
     * Whether the mount should be read-only.
     */
    ReadOnly?: boolean;
    /**
     * The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.
     */
    Consistency?: string;
    /**
     * Optional configuration for the `bind` type.
     */
    BindOptions?: {
/**
 * A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.
 */
Propagation?: 'private' | 'rprivate' | 'shared' | 'rshared' | 'slave' | 'rslave';
/**
 * Disable recursive bind mount.
 */
NonRecursive?: boolean;
/**
 * Create mount point on host if missing
 */
CreateMountpoint?: boolean;
};
    /**
     * Optional configuration for the `volume` type.
     */
    VolumeOptions?: {
/**
 * Populate volume with data from the target.
 */
NoCopy?: boolean;
/**
 * User-defined key/value metadata.
 */
Labels?: Record<string, string>;
/**
 * Map of driver specific options
 */
DriverConfig?: {
/**
 * Name of the driver to use to create the volume.
 */
Name?: string;
/**
 * key/value map of driver specific options.
 */
Options?: Record<string, string>;
};
};
    /**
     * Optional configuration for the `tmpfs` type.
     */
    TmpfsOptions?: {
/**
 * The size for the tmpfs mount in bytes.
 */
SizeBytes?: number;
/**
 * The permission mode for the tmpfs mount in an integer.
 */
Mode?: number;
};
};
