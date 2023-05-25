/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClusterVolumeSpec } from './ClusterVolumeSpec';
import type { ObjectVersion } from './ObjectVersion';
import type { Topology } from './Topology';

/**
 * Options and information specific to, and only present on, Swarm CSI
 * cluster volumes.
 * 
 */
export type ClusterVolume = {
    /**
     * The Swarm ID of this volume. Because cluster volumes are Swarm
 * objects, they have an ID, unlike non-cluster volumes. This ID can
 * be used to refer to the Volume instead of the name.
 * 
     */
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    Spec?: ClusterVolumeSpec;
    /**
     * Information about the global status of the volume.
 * 
     */
    Info?: {
/**
 * The capacity of the volume in bytes. A value of 0 indicates that
 * the capacity is unknown.
 * 
 */
CapacityBytes?: number;
/**
 * A map of strings to strings returned from the storage plugin when
 * the volume is created.
 * 
 */
VolumeContext?: Record<string, string>;
/**
 * The ID of the volume as returned by the CSI storage plugin. This
 * is distinct from the volume's ID as provided by Docker. This ID
 * is never used by the user when communicating with Docker to refer
 * to this volume. If the ID is blank, then the Volume has not been
 * successfully created in the plugin yet.
 * 
 */
VolumeID?: string;
/**
 * The topology this volume is actually accessible from.
 * 
 */
AccessibleTopology?: Array<Topology>;
};
    /**
     * The status of the volume as it pertains to its publishing and use on
 * specific nodes
 * 
     */
    PublishStatus?: Array<{
/**
 * The ID of the Swarm node the volume is published on.
 * 
 */
NodeID?: string;
/**
 * The published state of the volume.
 * * `pending-publish` The volume should be published to this node, but the call to the controller plugin to do so has not yet been successfully completed.
 * * `published` The volume is published successfully to the node.
 * * `pending-node-unpublish` The volume should be unpublished from the node, and the manager is awaiting confirmation from the worker that it has done so.
 * * `pending-controller-unpublish` The volume is successfully unpublished from the node, but has not yet been successfully unpublished on the controller.
 * 
 */
State?: 'pending-publish' | 'published' | 'pending-node-unpublish' | 'pending-controller-unpublish';
/**
 * A map of strings to strings returned by the CSI controller
 * plugin when a volume is published.
 * 
 */
PublishContext?: Record<string, string>;
}>;
};
