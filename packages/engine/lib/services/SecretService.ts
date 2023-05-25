/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdResponse } from '../models/IdResponse';
import type { Secret } from '../models/Secret';
import type { SecretSpec } from '../models/SecretSpec';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecretService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List secrets
     * @returns Secret no error
     * @throws ApiError
     */
    public secretList({
filters,
}: {
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the secrets list.
 *
 * Available filters:
 *
 * - `id=<secret id>`
 * - `label=<key> or label=<key>=value`
 * - `name=<secret name>`
 * - `names=<secret name>`
 * 
 */
filters?: string,
}): CancelablePromise<Array<Secret>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/secrets',
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
     * Create a secret
     * @returns IdResponse no error
     * @throws ApiError
     */
    public secretCreate({
body,
}: {
body?: SecretSpec,
}): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/secrets/create',
            body: body,
            errors: {
                409: `name conflicts with an existing object`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Inspect a secret
     * @returns Secret no error
     * @throws ApiError
     */
    public secretInspect({
id,
}: {
/**
 * ID of the secret
 */
id: string,
}): CancelablePromise<Secret> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/secrets/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `secret not found`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Delete a secret
     * @returns void 
     * @throws ApiError
     */
    public secretDelete({
id,
}: {
/**
 * ID of the secret
 */
id: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/secrets/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `secret not found`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Update a Secret
     * @returns any no error
     * @throws ApiError
     */
    public secretUpdate({
id,
version,
body,
}: {
/**
 * The ID or name of the secret
 */
id: string,
/**
 * The version number of the secret object being updated. This is
 * required to avoid conflicting writes.
 * 
 */
version: number,
/**
 * The spec of the secret to update. Currently, only the Labels field
 * can be updated. All other fields must remain unchanged from the
 * [SecretInspect endpoint](#operation/SecretInspect) response values.
 * 
 */
body?: SecretSpec,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/secrets/{id}/update',
            path: {
                'id': id,
            },
            query: {
                'version': version,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such secret`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
