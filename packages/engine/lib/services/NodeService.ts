/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Node } from '../models/Node';
import type { NodeSpec } from '../models/NodeSpec';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NodeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List nodes
     * @returns Node no error
     * @throws ApiError
     */
    public nodeList({
filters,
}: {
/**
 * Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).
 *
 * Available filters:
 * - `id=<node id>`
 * - `label=<engine label>`
 * - `membership=`(`accepted`|`pending`)`
 * - `name=<node name>`
 * - `node.label=<node label>`
 * - `role=`(`manager`|`worker`)`
 * 
 */
filters?: string,
}): CancelablePromise<Array<Node>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodes',
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
     * Inspect a node
     * @returns Node no error
     * @throws ApiError
     */
    public nodeInspect({
id,
}: {
/**
 * The ID or name of the node
 */
id: string,
}): CancelablePromise<Node> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `no such node`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Delete a node
     * @returns any no error
     * @throws ApiError
     */
    public nodeDelete({
id,
force = false,
}: {
/**
 * The ID or name of the node
 */
id: string,
/**
 * Force remove a node from the swarm
 */
force?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/nodes/{id}',
            path: {
                'id': id,
            },
            query: {
                'force': force,
            },
            errors: {
                404: `no such node`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Update a node
     * @returns any no error
     * @throws ApiError
     */
    public nodeUpdate({
id,
version,
body,
}: {
/**
 * The ID of the node
 */
id: string,
/**
 * The version number of the node object being updated. This is required
 * to avoid conflicting writes.
 * 
 */
version: number,
body?: NodeSpec,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes/{id}/update',
            path: {
                'id': id,
            },
            query: {
                'version': version,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such node`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
