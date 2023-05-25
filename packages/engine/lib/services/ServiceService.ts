/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from '../models/Service';
import type { ServiceSpec } from '../models/ServiceSpec';
import type { ServiceUpdateResponse } from '../models/ServiceUpdateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List services
     * @returns Service no error
     * @throws ApiError
     */
    public serviceList({
filters,
status,
}: {
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the services list.
 *
 * Available filters:
 *
 * - `id=<service id>`
 * - `label=<service label>`
 * - `mode=["replicated"|"global"]`
 * - `name=<service name>`
 * 
 */
filters?: string,
/**
 * Include service status, with count of running and desired tasks.
 * 
 */
status?: boolean,
}): CancelablePromise<Array<Service>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services',
            query: {
                'filters': filters,
                'status': status,
            },
            errors: {
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Create a service
     * @returns any no error
     * @throws ApiError
     */
    public serviceCreate({
body,
xRegistryAuth,
}: {
body: ServiceSpec,
/**
 * A base64url-encoded auth configuration for pulling from private
 * registries.
 *
 * Refer to the [authentication section](#section/Authentication) for
 * details.
 * 
 */
xRegistryAuth?: string,
}): CancelablePromise<{
/**
 * The ID of the created service.
 */
ID?: string;
/**
 * Optional warning message
 */
Warning?: string;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services/create',
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                403: `network is not eligible for services`,
                409: `name conflicts with an existing service`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Inspect a service
     * @returns Service no error
     * @throws ApiError
     */
    public serviceInspect({
id,
insertDefaults = false,
}: {
/**
 * ID or name of service.
 */
id: string,
/**
 * Fill empty fields with default values.
 */
insertDefaults?: boolean,
}): CancelablePromise<Service> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{id}',
            path: {
                'id': id,
            },
            query: {
                'insertDefaults': insertDefaults,
            },
            errors: {
                404: `no such service`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Delete a service
     * @returns any no error
     * @throws ApiError
     */
    public serviceDelete({
id,
}: {
/**
 * ID or name of service.
 */
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/services/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `no such service`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Update a service
     * @returns ServiceUpdateResponse no error
     * @throws ApiError
     */
    public serviceUpdate({
id,
body,
version,
registryAuthFrom = 'spec',
rollback,
xRegistryAuth,
}: {
/**
 * ID or name of service.
 */
id: string,
body: ServiceSpec,
/**
 * The version number of the service object being updated. This is
 * required to avoid conflicting writes.
 * This version number should be the value as currently set on the
 * service *before* the update. You can find the current version by
 * calling `GET /services/{id}`
 * 
 */
version: number,
/**
 * If the `X-Registry-Auth` header is not specified, this parameter
 * indicates where to find registry authorization credentials.
 * 
 */
registryAuthFrom?: 'spec' | 'previous-spec',
/**
 * Set to this parameter to `previous` to cause a server-side rollback
 * to the previous service spec. The supplied spec will be ignored in
 * this case.
 * 
 */
rollback?: string,
/**
 * A base64url-encoded auth configuration for pulling from private
 * registries.
 *
 * Refer to the [authentication section](#section/Authentication) for
 * details.
 * 
 */
xRegistryAuth?: string,
}): CancelablePromise<ServiceUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services/{id}/update',
            path: {
                'id': id,
            },
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            query: {
                'version': version,
                'registryAuthFrom': registryAuthFrom,
                'rollback': rollback,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such service`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Get service logs
     * Get `stdout` and `stderr` logs from a service. See also
 * [`/containers/{id}/logs`](#operation/ContainerLogs).
 *
 * **Note**: This endpoint works only for services with the `local`,
 * `json-file` or `journald` logging drivers.
 * 
     * @returns binary logs returned as a stream in response body
     * @throws ApiError
     */
    public serviceLogs({
id,
details = false,
follow = false,
stdout = false,
stderr = false,
since,
timestamps = false,
tail = 'all',
}: {
/**
 * ID or name of the service
 */
id: string,
/**
 * Show service context and extra details provided to logs.
 */
details?: boolean,
/**
 * Keep connection after returning logs.
 */
follow?: boolean,
/**
 * Return logs from `stdout`
 */
stdout?: boolean,
/**
 * Return logs from `stderr`
 */
stderr?: boolean,
/**
 * Only return logs since this time, as a UNIX timestamp
 */
since?: number,
/**
 * Add timestamps to every log line
 */
timestamps?: boolean,
/**
 * Only return this number of log lines from the end of the logs.
 * Specify as an integer or `all` to output all log lines.
 * 
 */
tail?: string,
}): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{id}/logs',
            path: {
                'id': id,
            },
            query: {
                'details': details,
                'follow': follow,
                'stdout': stdout,
                'stderr': stderr,
                'since': since,
                'timestamps': timestamps,
                'tail': tail,
            },
            errors: {
                404: `no such service`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
