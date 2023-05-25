/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List tasks
     * @returns Task no error
     * @throws ApiError
     */
    public taskList({
filters,
}: {
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the tasks list.
 *
 * Available filters:
 *
 * - `desired-state=(running | shutdown | accepted)`
 * - `id=<task id>`
 * - `label=key` or `label="key=value"`
 * - `name=<task name>`
 * - `node=<node id or name>`
 * - `service=<service name>`
 * 
 */
filters?: string,
}): CancelablePromise<Array<Task>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks',
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
     * Inspect a task
     * @returns Task no error
     * @throws ApiError
     */
    public taskInspect({
id,
}: {
/**
 * ID of the task
 */
id: string,
}): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `no such task`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Get task logs
     * Get `stdout` and `stderr` logs from a task.
 * See also [`/containers/{id}/logs`](#operation/ContainerLogs).
 *
 * **Note**: This endpoint works only for services with the `local`,
 * `json-file` or `journald` logging drivers.
 * 
     * @returns binary logs returned as a stream in response body
     * @throws ApiError
     */
    public taskLogs({
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
 * ID of the task
 */
id: string,
/**
 * Show task context and extra details provided to logs.
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
            url: '/tasks/{id}/logs',
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
                404: `no such task`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
