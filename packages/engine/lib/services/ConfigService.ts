/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Config } from '../models/Config';
import type { ConfigSpec } from '../models/ConfigSpec';
import type { IdResponse } from '../models/IdResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ConfigService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List configs
     * @returns Config no error
     * @throws ApiError
     */
    public configList({
filters,
}: {
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the configs list.
 *
 * Available filters:
 *
 * - `id=<config id>`
 * - `label=<key> or label=<key>=value`
 * - `name=<config name>`
 * - `names=<config name>`
 * 
 */
filters?: string,
}): CancelablePromise<Array<Config>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/configs',
            query: {
                'filters': filters,
            },
            errors: {
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Create a config
     * @returns IdResponse no error
     * @throws ApiError
     */
    public configCreate({
body,
}: {
body?: ConfigSpec,
}): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/configs/create',
            body: body,
            errors: {
                409: `name conflicts with an existing object`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Inspect a config
     * @returns Config no error
     * @throws ApiError
     */
    public configInspect({
id,
}: {
/**
 * ID of the config
 */
id: string,
}): CancelablePromise<Config> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/configs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `config not found`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Delete a config
     * @returns void 
     * @throws ApiError
     */
    public configDelete({
id,
}: {
/**
 * ID of the config
 */
id: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/configs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `config not found`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Update a Config
     * @returns any no error
     * @throws ApiError
     */
    public configUpdate({
id,
version,
body,
}: {
/**
 * The ID or name of the config
 */
id: string,
/**
 * The version number of the config object being updated. This is
 * required to avoid conflicting writes.
 * 
 */
version: number,
/**
 * The spec of the config to update. Currently, only the Labels field
 * can be updated. All other fields must remain unchanged from the
 * [ConfigInspect endpoint](#operation/ConfigInspect) response values.
 * 
 */
body?: ConfigSpec,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/configs/{id}/update',
            path: {
                'id': id,
            },
            query: {
                'version': version,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such config`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
