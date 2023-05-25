/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdResponse } from '../models/IdResponse';
import type { ProcessConfig } from '../models/ProcessConfig';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ExecService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an exec instance
     * Run a command inside a running container.
     * @returns IdResponse no error
     * @throws ApiError
     */
    public containerExec({
execConfig,
id,
}: {
/**
 * Exec configuration
 */
execConfig: {
/**
 * Attach to `stdin` of the exec command.
 */
AttachStdin?: boolean;
/**
 * Attach to `stdout` of the exec command.
 */
AttachStdout?: boolean;
/**
 * Attach to `stderr` of the exec command.
 */
AttachStderr?: boolean;
/**
 * Initial console size, as an `[height, width]` array.
 */
ConsoleSize?: Array<number> | null;
/**
 * Override the key sequence for detaching a container. Format is
 * a single character `[a-Z]` or `ctrl-<value>` where `<value>`
 * is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
 * 
 */
DetachKeys?: string;
/**
 * Allocate a pseudo-TTY.
 */
Tty?: boolean;
/**
 * A list of environment variables in the form `["VAR=value", ...]`.
 * 
 */
Env?: Array<string>;
/**
 * Command to run, as a string or array of strings.
 */
Cmd?: Array<string>;
/**
 * Runs the exec process with extended privileges.
 */
Privileged?: boolean;
/**
 * The user, and optionally, group to run the exec process inside
 * the container. Format is one of: `user`, `user:group`, `uid`,
 * or `uid:gid`.
 * 
 */
User?: string;
/**
 * The working directory for the exec process inside the container.
 * 
 */
WorkingDir?: string;
},
/**
 * ID or name of container
 */
id: string,
}): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/exec',
            path: {
                'id': id,
            },
            body: execConfig,
            errors: {
                404: `no such container`,
                409: `container is paused`,
                500: `Server error`,
            },
        });
    }

    /**
     * Start an exec instance
     * Starts a previously set up exec instance. If detach is true, this endpoint
 * returns immediately after starting the command. Otherwise, it sets up an
 * interactive session with the command.
 * 
     * @returns any No error
     * @throws ApiError
     */
    public execStart({
id,
execStartConfig,
}: {
/**
 * Exec instance ID
 */
id: string,
execStartConfig?: {
/**
 * Detach from the command.
 */
Detach?: boolean;
/**
 * Allocate a pseudo-TTY.
 */
Tty?: boolean;
/**
 * Initial console size, as an `[height, width]` array.
 */
ConsoleSize?: Array<number> | null;
},
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/exec/{id}/start',
            path: {
                'id': id,
            },
            body: execStartConfig,
            errors: {
                404: `No such exec instance`,
                409: `Container is stopped or paused`,
            },
        });
    }

    /**
     * Resize an exec instance
     * Resize the TTY session used by an exec instance. This endpoint only works
 * if `tty` was specified as part of creating and starting the exec instance.
 * 
     * @returns any No error
     * @throws ApiError
     */
    public execResize({
id,
h,
w,
}: {
/**
 * Exec instance ID
 */
id: string,
/**
 * Height of the TTY session in characters
 */
h?: number,
/**
 * Width of the TTY session in characters
 */
w?: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/exec/{id}/resize',
            path: {
                'id': id,
            },
            query: {
                'h': h,
                'w': w,
            },
            errors: {
                400: `bad parameter`,
                404: `No such exec instance`,
                500: `Server error`,
            },
        });
    }

    /**
     * Inspect an exec instance
     * Return low-level information about an exec instance.
     * @returns any No error
     * @throws ApiError
     */
    public execInspect({
id,
}: {
/**
 * Exec instance ID
 */
id: string,
}): CancelablePromise<{
CanRemove?: boolean;
DetachKeys?: string;
ID?: string;
Running?: boolean;
ExitCode?: number;
ProcessConfig?: ProcessConfig;
OpenStdin?: boolean;
OpenStderr?: boolean;
OpenStdout?: boolean;
ContainerID?: string;
/**
 * The system process ID for the exec process.
 */
Pid?: number;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exec/{id}/json',
            path: {
                'id': id,
            },
            errors: {
                404: `No such exec instance`,
                500: `Server error`,
            },
        });
    }

}
