/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClusterVolumeSpec } from '../models/ClusterVolumeSpec';
import type { Volume } from '../models/Volume';
import type { VolumeCreateOptions } from '../models/VolumeCreateOptions';
import type { VolumeListResponse } from '../models/VolumeListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VolumeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List volumes
     * @returns VolumeListResponse Summary volume data that matches the query
     * @throws ApiError
     */
    public volumeList({
filters,
}: {
/**
 * JSON encoded value of the filters (a `map[string][]string`) to
 * process on the volumes list. Available filters:
 *
 * - `dangling=<boolean>` When set to `true` (or `1`), returns all
 * volumes that are not in use by a container. When set to `false`
 * (or `0`), only volumes that are in use by one or more
 * containers are returned.
 * - `driver=<volume-driver-name>` Matches volumes based on their driver.
 * - `label=<key>` or `label=<key>:<value>` Matches volumes based on
 * the presence of a `label` alone or a `label` and a value.
 * - `name=<volume-name>` Matches all or part of a volume name.
 * 
 */
filters?: string,
}): CancelablePromise<VolumeListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volumes',
            query: {
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Create a volume
     * @returns Volume The volume was created successfully
     * @throws ApiError
     */
    public volumeCreate({
volumeConfig,
}: {
/**
 * Volume configuration
 */
volumeConfig: VolumeCreateOptions,
}): CancelablePromise<Volume> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volumes/create',
            body: volumeConfig,
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Inspect a volume
     * @returns Volume No error
     * @throws ApiError
     */
    public volumeInspect({
name,
}: {
/**
 * Volume name or ID
 */
name: string,
}): CancelablePromise<Volume> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volumes/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `No such volume`,
                500: `Server error`,
            },
        });
    }

    /**
     * "Update a volume. Valid only for Swarm cluster volumes"
 * 
     * @returns any no error
     * @throws ApiError
     */
    public volumeUpdate({
name,
version,
body,
}: {
/**
 * The name or ID of the volume
 */
name: string,
/**
 * The version number of the volume being updated. This is required to
 * avoid conflicting writes. Found in the volume's `ClusterVolume`
 * field.
 * 
 */
version: number,
/**
 * The spec of the volume to update. Currently, only Availability may
 * change. All other fields must remain unchanged.
 * 
 */
body?: {
Spec?: ClusterVolumeSpec;
},
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/volumes/{name}',
            path: {
                'name': name,
            },
            query: {
                'version': version,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such volume`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Remove a volume
     * Instruct the driver to remove the volume.
     * @returns void 
     * @throws ApiError
     */
    public volumeDelete({
name,
force = false,
}: {
/**
 * Volume name or ID
 */
name: string,
/**
 * Force the removal of the volume
 */
force?: boolean,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/volumes/{name}',
            path: {
                'name': name,
            },
            query: {
                'force': force,
            },
            errors: {
                404: `No such volume or volume driver`,
                409: `Volume is in use and cannot be removed`,
                500: `Server error`,
            },
        });
    }

    /**
     * Delete unused volumes
     * @returns any No error
     * @throws ApiError
     */
    public volumePrune({
filters,
}: {
/**
 * Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
 *
 * Available filters:
 * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
 * - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.
 * 
 */
filters?: string,
}): CancelablePromise<{
/**
 * Volumes that were deleted
 */
VolumesDeleted?: Array<string>;
/**
 * Disk space reclaimed in bytes
 */
SpaceReclaimed?: number;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volumes/prune',
            query: {
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

}
