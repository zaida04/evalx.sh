/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContainerConfig } from '../models/ContainerConfig';
import type { ContainerCreateResponse } from '../models/ContainerCreateResponse';
import type { ContainerState } from '../models/ContainerState';
import type { ContainerSummary } from '../models/ContainerSummary';
import type { ContainerWaitResponse } from '../models/ContainerWaitResponse';
import type { GraphDriverData } from '../models/GraphDriverData';
import type { HostConfig } from '../models/HostConfig';
import type { MountPoint } from '../models/MountPoint';
import type { NetworkingConfig } from '../models/NetworkingConfig';
import type { NetworkSettings } from '../models/NetworkSettings';
import type { Resources } from '../models/Resources';
import type { RestartPolicy } from '../models/RestartPolicy';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContainerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List containers
     * Returns a list of containers. For details on the format, see the
 * [inspect endpoint](#operation/ContainerInspect).
 *
 * Note that it uses a different, smaller representation of a container
 * than inspecting a single container. For example, the list of linked
 * containers is not propagated .
 * 
     * @returns ContainerSummary no error
     * @throws ApiError
     */
    public containerList({
all = false,
limit,
size = false,
filters,
}: {
/**
 * Return all containers. By default, only running containers are shown.
 * 
 */
all?: boolean,
/**
 * Return this number of most recently created containers, including
 * non-running ones.
 * 
 */
limit?: number,
/**
 * Return the size of container as fields `SizeRw` and `SizeRootFs`.
 * 
 */
size?: boolean,
/**
 * Filters to process on the container list, encoded as JSON (a
 * `map[string][]string`). For example, `{"status": ["paused"]}` will
 * only return paused containers.
 *
 * Available filters:
 *
 * - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
 * - `before`=(`<container id>` or `<container name>`)
 * - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
 * - `exited=<int>` containers with exit code of `<int>`
 * - `health`=(`starting`|`healthy`|`unhealthy`|`none`)
 * - `id=<ID>` a container's ID
 * - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only)
 * - `is-task=`(`true`|`false`)
 * - `label=key` or `label="key=value"` of a container label
 * - `name=<name>` a container's name
 * - `network`=(`<network id>` or `<network name>`)
 * - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
 * - `since`=(`<container id>` or `<container name>`)
 * - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`)
 * - `volume`=(`<volume name>` or `<mount point destination>`)
 * 
 */
filters?: string,
}): CancelablePromise<Array<ContainerSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/json',
            query: {
                'all': all,
                'limit': limit,
                'size': size,
                'filters': filters,
            },
            errors: {
                400: `bad parameter`,
                500: `server error`,
            },
        });
    }

    /**
     * Create a container
     * @returns ContainerCreateResponse Container created successfully
     * @throws ApiError
     */
    public containerCreate({
body,
name,
platform = '',
}: {
/**
 * Container to create
 */
body: (ContainerConfig & {
HostConfig?: HostConfig;
NetworkingConfig?: NetworkingConfig;
}),
/**
 * Assign the specified name to the container. Must match
 * `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.
 * 
 */
name?: string,
/**
 * Platform in the format `os[/arch[/variant]]` used for image lookup.
 *
 * When specified, the daemon checks if the requested image is present
 * in the local image cache with the given OS and Architecture, and
 * otherwise returns a `404` status.
 *
 * If the option is not set, the host's native OS and Architecture are
 * used to look up the image in the image cache. However, if no platform
 * is passed and the given image does exist in the local image cache,
 * but its OS or architecture does not match, the container is created
 * with the available image, and a warning is added to the `Warnings`
 * field in the response, for example;
 *
 * WARNING: The requested image's platform (linux/arm64/v8) does not
 * match the detected host platform (linux/amd64) and no
 * specific platform was requested
 * 
 */
platform?: string,
}): CancelablePromise<ContainerCreateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/create',
            query: {
                'name': name,
                'platform': platform,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                404: `no such image`,
                409: `conflict`,
                500: `server error`,
            },
        });
    }

    /**
     * Inspect a container
     * Return low-level information about a container.
     * @returns any no error
     * @throws ApiError
     */
    public containerInspect({
id,
size = false,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Return the size of container as fields `SizeRw` and `SizeRootFs`
 */
size?: boolean,
}): CancelablePromise<{
/**
 * The ID of the container
 */
Id?: string;
/**
 * The time the container was created
 */
Created?: string;
/**
 * The path to the command being run
 */
Path?: string;
/**
 * The arguments to the command being run
 */
Args?: Array<string>;
State?: ContainerState;
/**
 * The container's image ID
 */
Image?: string;
ResolvConfPath?: string;
HostnamePath?: string;
HostsPath?: string;
LogPath?: string;
Name?: string;
RestartCount?: number;
Driver?: string;
Platform?: string;
MountLabel?: string;
ProcessLabel?: string;
AppArmorProfile?: string;
/**
 * IDs of exec instances that are running in the container.
 */
ExecIDs?: Array<string> | null;
HostConfig?: HostConfig;
GraphDriver?: GraphDriverData;
/**
 * The size of files that have been created or changed by this
 * container.
 * 
 */
SizeRw?: number;
/**
 * The total size of all the files in this container.
 */
SizeRootFs?: number;
Mounts?: Array<MountPoint>;
Config?: ContainerConfig;
NetworkSettings?: NetworkSettings;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/json',
            path: {
                'id': id,
            },
            query: {
                'size': size,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * List processes running inside a container
     * On Unix systems, this is done by running the `ps` command. This endpoint
 * is not supported on Windows.
 * 
     * @returns any no error
     * @throws ApiError
     */
    public containerTop({
id,
psArgs = '-ef',
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * The arguments to pass to `ps`. For example, `aux`
 */
psArgs?: string,
}): CancelablePromise<{
/**
 * The ps column titles
 */
Titles?: Array<string>;
/**
 * Each process running in the container, where each is process
 * is an array of values corresponding to the titles.
 * 
 */
Processes?: Array<Array<string>>;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/top',
            path: {
                'id': id,
            },
            query: {
                'ps_args': psArgs,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Get container logs
     * Get `stdout` and `stderr` logs from a container.
 *
 * Note: This endpoint works only for containers with the `json-file` or
 * `journald` logging driver.
 * 
     * @returns binary logs returned as a stream in response body.
 * For the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach).
 * Note that unlike the attach endpoint, the logs endpoint does not
 * upgrade the connection and does not set Content-Type.
 * 
     * @throws ApiError
     */
    public containerLogs({
id,
follow = false,
stdout = false,
stderr = false,
since,
until,
timestamps = false,
tail = 'all',
}: {
/**
 * ID or name of the container
 */
id: string,
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
 * Only return logs before this time, as a UNIX timestamp
 */
until?: number,
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
            url: '/containers/{id}/logs',
            path: {
                'id': id,
            },
            query: {
                'follow': follow,
                'stdout': stdout,
                'stderr': stderr,
                'since': since,
                'until': until,
                'timestamps': timestamps,
                'tail': tail,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Get changes on a container’s filesystem
     * Returns which files in a container's filesystem have been added, deleted,
 * or modified. The `Kind` of modification can be one of:
 *
 * - `0`: Modified
 * - `1`: Added
 * - `2`: Deleted
 * 
     * @returns any The list of changes
     * @throws ApiError
     */
    public containerChanges({
id,
}: {
/**
 * ID or name of the container
 */
id: string,
}): CancelablePromise<Array<{
/**
 * Path to file that has changed
 */
Path: string;
/**
 * Kind of change
 */
Kind: 0 | 1 | 2;
}>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/changes',
            path: {
                'id': id,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Export a container
     * Export the contents of a container as a tarball.
     * @returns any no error
     * @throws ApiError
     */
    public containerExport({
id,
}: {
/**
 * ID or name of the container
 */
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/export',
            path: {
                'id': id,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Get container stats based on resource usage
     * This endpoint returns a live stream of a container’s resource usage
 * statistics.
 *
 * The `precpu_stats` is the CPU statistic of the *previous* read, and is
 * used to calculate the CPU usage percentage. It is not an exact copy
 * of the `cpu_stats` field.
 *
 * If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is
 * nil then for compatibility with older daemons the length of the
 * corresponding `cpu_usage.percpu_usage` array should be used.
 *
 * On a cgroup v2 host, the following fields are not set
 * * `blkio_stats`: all fields other than `io_service_bytes_recursive`
 * * `cpu_stats`: `cpu_usage.percpu_usage`
 * * `memory_stats`: `max_usage` and `failcnt`
 * Also, `memory_stats.stats` fields are incompatible with cgroup v1.
 *
 * To calculate the values shown by the `stats` command of the docker cli tool
 * the following formulas can be used:
 * * used_memory = `memory_stats.usage - memory_stats.stats.cache`
 * * available_memory = `memory_stats.limit`
 * * Memory usage % = `(used_memory / available_memory) * 100.0`
 * * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage`
 * * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage`
 * * number_cpus = `lenght(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus`
 * * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0`
 * 
     * @returns any no error
     * @throws ApiError
     */
    public containerStats({
id,
stream = true,
oneShot = false,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Stream the output. If false, the stats will be output once and then
 * it will disconnect.
 * 
 */
stream?: boolean,
/**
 * Only get a single stat instead of waiting for 2 cycles. Must be used
 * with `stream=false`.
 * 
 */
oneShot?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/stats',
            path: {
                'id': id,
            },
            query: {
                'stream': stream,
                'one-shot': oneShot,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Resize a container TTY
     * Resize the TTY for a container.
     * @returns any no error
     * @throws ApiError
     */
    public containerResize({
id,
h,
w,
}: {
/**
 * ID or name of the container
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
            url: '/containers/{id}/resize',
            path: {
                'id': id,
            },
            query: {
                'h': h,
                'w': w,
            },
            errors: {
                404: `no such container`,
                500: `cannot resize container`,
            },
        });
    }

    /**
     * Start a container
     * @returns void 
     * @throws ApiError
     */
    public containerStart({
id,
detachKeys,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Override the key sequence for detaching a container. Format is a
 * single character `[a-Z]` or `ctrl-<value>` where `<value>` is one
 * of: `a-z`, `@`, `^`, `[`, `,` or `_`.
 * 
 */
detachKeys?: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/start',
            path: {
                'id': id,
            },
            query: {
                'detachKeys': detachKeys,
            },
            errors: {
                304: `container already started`,
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Stop a container
     * @returns void 
     * @throws ApiError
     */
    public containerStop({
id,
signal,
t,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Signal to send to the container as an integer or string (e.g. `SIGINT`).
 * 
 */
signal?: string,
/**
 * Number of seconds to wait before killing the container
 */
t?: number,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/stop',
            path: {
                'id': id,
            },
            query: {
                'signal': signal,
                't': t,
            },
            errors: {
                304: `container already stopped`,
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Restart a container
     * @returns void 
     * @throws ApiError
     */
    public containerRestart({
id,
signal,
t,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Signal to send to the container as an integer or string (e.g. `SIGINT`).
 * 
 */
signal?: string,
/**
 * Number of seconds to wait before killing the container
 */
t?: number,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/restart',
            path: {
                'id': id,
            },
            query: {
                'signal': signal,
                't': t,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Kill a container
     * Send a POSIX signal to a container, defaulting to killing to the
 * container.
 * 
     * @returns void 
     * @throws ApiError
     */
    public containerKill({
id,
signal = 'SIGKILL',
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Signal to send to the container as an integer or string (e.g. `SIGINT`).
 * 
 */
signal?: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/kill',
            path: {
                'id': id,
            },
            query: {
                'signal': signal,
            },
            errors: {
                404: `no such container`,
                409: `container is not running`,
                500: `server error`,
            },
        });
    }

    /**
     * Update a container
     * Change various configuration options of a container without having to
 * recreate it.
 * 
     * @returns any The container has been updated.
     * @throws ApiError
     */
    public containerUpdate({
id,
update,
}: {
/**
 * ID or name of the container
 */
id: string,
update: (Resources & {
RestartPolicy?: RestartPolicy;
}),
}): CancelablePromise<{
Warnings?: Array<string>;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/update',
            path: {
                'id': id,
            },
            body: update,
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Rename a container
     * @returns void 
     * @throws ApiError
     */
    public containerRename({
id,
name,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * New name for the container
 */
name: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/rename',
            path: {
                'id': id,
            },
            query: {
                'name': name,
            },
            errors: {
                404: `no such container`,
                409: `name already in use`,
                500: `server error`,
            },
        });
    }

    /**
     * Pause a container
     * Use the freezer cgroup to suspend all processes in a container.
 *
 * Traditionally, when suspending a process the `SIGSTOP` signal is used,
 * which is observable by the process being suspended. With the freezer
 * cgroup the process is unaware, and unable to capture, that it is being
 * suspended, and subsequently resumed.
 * 
     * @returns void 
     * @throws ApiError
     */
    public containerPause({
id,
}: {
/**
 * ID or name of the container
 */
id: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/pause',
            path: {
                'id': id,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Unpause a container
     * Resume a container which has been paused.
     * @returns void 
     * @throws ApiError
     */
    public containerUnpause({
id,
}: {
/**
 * ID or name of the container
 */
id: string,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/unpause',
            path: {
                'id': id,
            },
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Attach to a container
     * Attach to a container to read its output or send it input. You can attach
 * to the same container multiple times and you can reattach to containers
 * that have been detached.
 *
 * Either the `stream` or `logs` parameter must be `true` for this endpoint
 * to do anything.
 *
 * See the [documentation for the `docker attach` command](/engine/reference/commandline/attach/)
 * for more details.
 *
 * ### Hijacking
 *
 * This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`,
 * and `stderr` on the same socket.
 *
 * This is the response from the daemon for an attach request:
 *
 * ```
 * HTTP/1.1 200 OK
 * Content-Type: application/vnd.docker.raw-stream
 *
 * [STREAM]
 * ```
 *
 * After the headers and two new lines, the TCP connection can now be used
 * for raw, bidirectional communication between the client and server.
 *
 * To hint potential proxies about connection hijacking, the Docker client
 * can also optionally send connection upgrade headers.
 *
 * For example, the client sends this request to upgrade the connection:
 *
 * ```
 * POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
 * Upgrade: tcp
 * Connection: Upgrade
 * ```
 *
 * The Docker daemon will respond with a `101 UPGRADED` response, and will
 * similarly follow with the raw stream:
 *
 * ```
 * HTTP/1.1 101 UPGRADED
 * Content-Type: application/vnd.docker.raw-stream
 * Connection: Upgrade
 * Upgrade: tcp
 *
 * [STREAM]
 * ```
 *
 * ### Stream format
 *
 * When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate),
 * the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream
 * and the stream over the hijacked connected is multiplexed to separate out
 * `stdout` and `stderr`. The stream consists of a series of frames, each
 * containing a header and a payload.
 *
 * The header contains the information which the stream writes (`stdout` or
 * `stderr`). It also contains the size of the associated frame encoded in
 * the last four bytes (`uint32`).
 *
 * It is encoded on the first eight bytes like this:
 *
 * ```go
 * header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
 * ```
 *
 * `STREAM_TYPE` can be:
 *
 * - 0: `stdin` (is written on `stdout`)
 * - 1: `stdout`
 * - 2: `stderr`
 *
 * `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size
 * encoded as big endian.
 *
 * Following the header is the payload, which is the specified number of
 * bytes of `STREAM_TYPE`.
 *
 * The simplest way to implement this protocol is the following:
 *
 * 1. Read 8 bytes.
 * 2. Choose `stdout` or `stderr` depending on the first byte.
 * 3. Extract the frame size from the last four bytes.
 * 4. Read the extracted size and output it on the correct output.
 * 5. Goto 1.
 *
 * ### Stream format when using a TTY
 *
 * When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate),
 * the stream is not multiplexed. The data exchanged over the hijacked
 * connection is simply the raw data from the process PTY and client's
 * `stdin`.
 * 
     * @returns any no error, no upgrade header found
     * @throws ApiError
     */
    public containerAttach({
id,
detachKeys,
logs = false,
stream = false,
stdin = false,
stdout = false,
stderr = false,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Override the key sequence for detaching a container.Format is a single
 * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
 * `@`, `^`, `[`, `,` or `_`.
 * 
 */
detachKeys?: string,
/**
 * Replay previous logs from the container.
 *
 * This is useful for attaching to a container that has started and you
 * want to output everything since the container started.
 *
 * If `stream` is also enabled, once all the previous output has been
 * returned, it will seamlessly transition into streaming current
 * output.
 * 
 */
logs?: boolean,
/**
 * Stream attached streams from the time the request was made onwards.
 * 
 */
stream?: boolean,
/**
 * Attach to `stdin`
 */
stdin?: boolean,
/**
 * Attach to `stdout`
 */
stdout?: boolean,
/**
 * Attach to `stderr`
 */
stderr?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/attach',
            path: {
                'id': id,
            },
            query: {
                'detachKeys': detachKeys,
                'logs': logs,
                'stream': stream,
                'stdin': stdin,
                'stdout': stdout,
                'stderr': stderr,
            },
            errors: {
                400: `bad parameter`,
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Attach to a container via a websocket
     * @returns any no error, no upgrade header found
     * @throws ApiError
     */
    public containerAttachWebsocket({
id,
detachKeys,
logs = false,
stream = false,
stdin = false,
stdout = false,
stderr = false,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Override the key sequence for detaching a container.Format is a single
 * character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
 * `@`, `^`, `[`, `,`, or `_`.
 * 
 */
detachKeys?: string,
/**
 * Return logs
 */
logs?: boolean,
/**
 * Return stream
 */
stream?: boolean,
/**
 * Attach to `stdin`
 */
stdin?: boolean,
/**
 * Attach to `stdout`
 */
stdout?: boolean,
/**
 * Attach to `stderr`
 */
stderr?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/attach/ws',
            path: {
                'id': id,
            },
            query: {
                'detachKeys': detachKeys,
                'logs': logs,
                'stream': stream,
                'stdin': stdin,
                'stdout': stdout,
                'stderr': stderr,
            },
            errors: {
                400: `bad parameter`,
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Wait for a container
     * Block until a container stops, then returns the exit code.
     * @returns ContainerWaitResponse The container has exit.
     * @throws ApiError
     */
    public containerWait({
id,
condition = 'not-running',
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Wait until a container state reaches the given condition.
 *
 * Defaults to `not-running` if omitted or empty.
 * 
 */
condition?: 'not-running' | 'next-exit' | 'removed',
}): CancelablePromise<ContainerWaitResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/{id}/wait',
            path: {
                'id': id,
            },
            query: {
                'condition': condition,
            },
            errors: {
                400: `bad parameter`,
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Remove a container
     * @returns void 
     * @throws ApiError
     */
    public containerDelete({
id,
v = false,
force = false,
link = false,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Remove anonymous volumes associated with the container.
 */
v?: boolean,
/**
 * If the container is running, kill it before removing it.
 */
force?: boolean,
/**
 * Remove the specified link associated with the container.
 */
link?: boolean,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/containers/{id}',
            path: {
                'id': id,
            },
            query: {
                'v': v,
                'force': force,
                'link': link,
            },
            errors: {
                400: `bad parameter`,
                404: `no such container`,
                409: `conflict`,
                500: `server error`,
            },
        });
    }

    /**
     * Get information about files in a container
     * A response header `X-Docker-Container-Path-Stat` is returned, containing
 * a base64 - encoded JSON object with some filesystem header information
 * about the path.
 * 
     * @returns string no error
     * @throws ApiError
     */
    public containerArchiveInfo({
id,
path,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Resource in the container’s filesystem to archive.
 */
path: string,
}): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/containers/{id}/archive',
            path: {
                'id': id,
            },
            query: {
                'path': path,
            },
            responseHeader: 'X-Docker-Container-Path-Stat',
            errors: {
                400: `Bad parameter`,
                404: `Container or path does not exist`,
                500: `Server error`,
            },
        });
    }

    /**
     * Get an archive of a filesystem resource in a container
     * Get a tar archive of a resource in the filesystem of container id.
     * @returns any no error
     * @throws ApiError
     */
    public containerArchive({
id,
path,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Resource in the container’s filesystem to archive.
 */
path: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/containers/{id}/archive',
            path: {
                'id': id,
            },
            query: {
                'path': path,
            },
            errors: {
                400: `Bad parameter`,
                404: `Container or path does not exist`,
                500: `server error`,
            },
        });
    }

    /**
     * Extract an archive of files or folders to a directory in a container
     * Upload a tar archive to be extracted to a path in the filesystem of container id.
 * `path` parameter is asserted to be a directory. If it exists as a file, 400 error
 * will be returned with message "not a directory".
 * 
     * @returns any The content was extracted successfully
     * @throws ApiError
     */
    public putContainerArchive({
id,
path,
inputStream,
noOverwriteDirNonDir,
copyUidgid,
}: {
/**
 * ID or name of the container
 */
id: string,
/**
 * Path to a directory in the container to extract the archive’s contents into. 
 */
path: string,
/**
 * The input stream must be a tar archive compressed with one of the
 * following algorithms: `identity` (no compression), `gzip`, `bzip2`,
 * or `xz`.
 * 
 */
inputStream: Blob,
/**
 * If `1`, `true`, or `True` then it will be an error if unpacking the
 * given content would cause an existing directory to be replaced with
 * a non-directory and vice versa.
 * 
 */
noOverwriteDirNonDir?: string,
/**
 * If `1`, `true`, then it will copy UID/GID maps to the dest file or
 * dir
 * 
 */
copyUidgid?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/containers/{id}/archive',
            path: {
                'id': id,
            },
            query: {
                'path': path,
                'noOverwriteDirNonDir': noOverwriteDirNonDir,
                'copyUIDGID': copyUidgid,
            },
            body: inputStream,
            errors: {
                400: `Bad parameter`,
                403: `Permission denied, the volume or container rootfs is marked as read-only.`,
                404: `No such container or path does not exist inside the container`,
                500: `Server error`,
            },
        });
    }

    /**
     * Delete stopped containers
     * @returns any No error
     * @throws ApiError
     */
    public containerPrune({
filters,
}: {
/**
 * Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
 *
 * Available filters:
 * - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
 * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
 * 
 */
filters?: string,
}): CancelablePromise<{
/**
 * Container IDs that were deleted
 */
ContainersDeleted?: Array<string>;
/**
 * Disk space reclaimed in bytes
 */
SpaceReclaimed?: number;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/containers/prune',
            query: {
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

}
