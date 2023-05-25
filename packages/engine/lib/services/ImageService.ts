/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContainerConfig } from '../models/ContainerConfig';
import type { IdResponse } from '../models/IdResponse';
import type { ImageDeleteResponseItem } from '../models/ImageDeleteResponseItem';
import type { ImageInspect } from '../models/ImageInspect';
import type { ImageSummary } from '../models/ImageSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ImageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Images
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * @returns ImageSummary Summary image data for the images matching the query
     * @throws ApiError
     */
    public imageList({
all = false,
filters,
sharedSize = false,
digests = false,
}: {
/**
 * Show all images. Only images from a final layer (no children) are shown by default.
 */
all?: boolean,
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the images list.
 *
 * Available filters:
 *
 * - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
 * - `dangling=true`
 * - `label=key` or `label="key=value"` of an image label
 * - `reference`=(`<image-name>[:<tag>]`)
 * - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
 * 
 */
filters?: string,
/**
 * Compute and show shared size as a `SharedSize` field on each image.
 */
sharedSize?: boolean,
/**
 * Show digest information as a `RepoDigests` field on each image.
 */
digests?: boolean,
}): CancelablePromise<Array<ImageSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/json',
            query: {
                'all': all,
                'filters': filters,
                'shared-size': sharedSize,
                'digests': digests,
            },
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Build an image
     * Build an image from a tar archive with a `Dockerfile` in it.
 *
 * The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](/engine/reference/builder/).
 *
 * The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.
 *
 * The build is canceled if the client drops the connection by quitting or being killed.
 * 
     * @returns any no error
     * @throws ApiError
     */
    public imageBuild({
inputStream,
dockerfile = 'Dockerfile',
t,
extrahosts,
remote,
q = false,
nocache = false,
cachefrom,
pull,
rm = true,
forcerm = false,
memory,
memswap,
cpushares,
cpusetcpus,
cpuperiod,
cpuquota,
buildargs,
shmsize,
squash,
labels,
networkmode,
contentType = 'application/x-tar',
xRegistryConfig,
platform = '',
target = '',
outputs = '',
}: {
/**
 * A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
 */
inputStream?: Blob,
/**
 * Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
 */
dockerfile?: string,
/**
 * A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
 */
t?: string,
/**
 * Extra hosts to add to /etc/hosts
 */
extrahosts?: string,
/**
 * A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
 */
remote?: string,
/**
 * Suppress verbose build output.
 */
q?: boolean,
/**
 * Do not use the cache when building the image.
 */
nocache?: boolean,
/**
 * JSON array of images used for build cache resolution.
 */
cachefrom?: string,
/**
 * Attempt to pull the image even if an older image exists locally.
 */
pull?: string,
/**
 * Remove intermediate containers after a successful build.
 */
rm?: boolean,
/**
 * Always remove intermediate containers, even upon failure.
 */
forcerm?: boolean,
/**
 * Set memory limit for build.
 */
memory?: number,
/**
 * Total memory (memory + swap). Set as `-1` to disable swap.
 */
memswap?: number,
/**
 * CPU shares (relative weight).
 */
cpushares?: number,
/**
 * CPUs in which to allow execution (e.g., `0-3`, `0,1`).
 */
cpusetcpus?: string,
/**
 * The length of a CPU period in microseconds.
 */
cpuperiod?: number,
/**
 * Microseconds of CPU time that the container can get in a CPU period.
 */
cpuquota?: number,
/**
 * JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.
 *
 * For example, the build arg `FOO=bar` would become `{"FOO":"bar"}` in JSON. This would result in the query parameter `buildargs={"FOO":"bar"}`. Note that `{"FOO":"bar"}` should be URI component encoded.
 *
 * [Read more about the buildargs instruction.](/engine/reference/builder/#arg)
 * 
 */
buildargs?: string,
/**
 * Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
 */
shmsize?: number,
/**
 * Squash the resulting images layers into a single layer. *(Experimental release only.)*
 */
squash?: boolean,
/**
 * Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
 */
labels?: string,
/**
 * Sets the networking mode for the run commands during build. Supported
 * standard values are: `bridge`, `host`, `none`, and `container:<name|id>`.
 * Any other value is taken as a custom network's name or ID to which this
 * container should connect to.
 * 
 */
networkmode?: string,
contentType?: 'application/x-tar',
/**
 * This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.
 *
 * The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:
 *
 * ```
 * {
     * "docker.example.com": {
         * "username": "janedoe",
         * "password": "hunter2"
         * },
         * "https://index.docker.io/v1/": {
             * "username": "mobydock",
             * "password": "conta1n3rize14"
             * }
             * }
             * ```
             *
             * Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.
             * 
 */
xRegistryConfig?: string,
/**
 * Platform in the format os[/arch[/variant]]
 */
platform?: string,
/**
 * Target build stage
 */
target?: string,
/**
 * BuildKit output configuration
 */
outputs?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/build',
            headers: {
                'Content-type': contentType,
                'X-Registry-Config': xRegistryConfig,
            },
            query: {
                'dockerfile': dockerfile,
                't': t,
                'extrahosts': extrahosts,
                'remote': remote,
                'q': q,
                'nocache': nocache,
                'cachefrom': cachefrom,
                'pull': pull,
                'rm': rm,
                'forcerm': forcerm,
                'memory': memory,
                'memswap': memswap,
                'cpushares': cpushares,
                'cpusetcpus': cpusetcpus,
                'cpuperiod': cpuperiod,
                'cpuquota': cpuquota,
                'buildargs': buildargs,
                'shmsize': shmsize,
                'squash': squash,
                'labels': labels,
                'networkmode': networkmode,
                'platform': platform,
                'target': target,
                'outputs': outputs,
            },
            body: inputStream,
            errors: {
                400: `Bad parameter`,
                500: `server error`,
            },
        });
    }

    /**
     * Delete builder cache
     * @returns any No error
     * @throws ApiError
     */
    public buildPrune({
keepStorage,
all,
filters,
}: {
/**
 * Amount of disk space in bytes to keep for cache
 */
keepStorage?: number,
/**
 * Remove all types of build cache
 */
all?: boolean,
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
             * process on the list of build cache objects.
             *
             * Available filters:
             *
             * - `until=<duration>`: duration relative to daemon's time, during which build cache was not used, in Go's duration format (e.g., '24h')
             * - `id=<id>`
             * - `parent=<id>`
             * - `type=<string>`
             * - `description=<string>`
             * - `inuse`
             * - `shared`
             * - `private`
             * 
 */
filters?: string,
}): CancelablePromise<{
CachesDeleted?: Array<string>;
/**
 * Disk space reclaimed in bytes
 */
SpaceReclaimed?: number;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/build/prune',
            query: {
                'keep-storage': keepStorage,
                'all': all,
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Create an image
     * Create an image by either pulling it from a registry or importing it.
     * @returns any no error
     * @throws ApiError
     */
    public imageCreate({
fromImage,
fromSrc,
repo,
tag,
message,
inputImage,
xRegistryAuth,
changes,
platform = '',
}: {
/**
 * Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
 */
fromImage?: string,
/**
 * Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
 */
fromSrc?: string,
/**
 * Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
 */
repo?: string,
/**
 * Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
 */
tag?: string,
/**
 * Set commit message for imported image.
 */
message?: string,
/**
 * Image content if the value `-` has been specified in fromSrc query parameter
 */
inputImage?: string,
/**
 * A base64url-encoded auth configuration.
             *
             * Refer to the [authentication section](#section/Authentication) for
             * details.
             * 
 */
xRegistryAuth?: string,
/**
 * Apply `Dockerfile` instructions to the image that is created,
             * for example: `changes=ENV DEBUG=true`.
             * Note that `ENV DEBUG=true` should be URI component encoded.
             *
             * Supported `Dockerfile` instructions:
             * `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`
             * 
 */
changes?: Array<string>,
/**
 * Platform in the format os[/arch[/variant]].
             *
             * When used in combination with the `fromImage` option, the daemon checks
             * if the given image is present in the local image cache with the given
             * OS and Architecture, and otherwise attempts to pull the image. If the
             * option is not set, the host's native OS and Architecture are used.
             * If the given image does not exist in the local image cache, the daemon
             * attempts to pull the image with the host's native OS and Architecture.
             * If the given image does exists in the local image cache, but its OS or
             * architecture does not match, a warning is produced.
             *
             * When used with the `fromSrc` option to import an image from an archive,
             * this option sets the platform information for the imported image. If
             * the option is not set, the host's native OS and Architecture are used
             * for the imported image.
             * 
 */
platform?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/create',
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            query: {
                'fromImage': fromImage,
                'fromSrc': fromSrc,
                'repo': repo,
                'tag': tag,
                'message': message,
                'changes': changes,
                'platform': platform,
            },
            body: inputImage,
            errors: {
                404: `repository does not exist or no read access`,
                500: `server error`,
            },
        });
    }

    /**
     * Inspect an image
     * Return low-level information about an image.
     * @returns ImageInspect No error
     * @throws ApiError
     */
    public imageInspect({
name,
}: {
/**
 * Image name or id
 */
name: string,
}): CancelablePromise<ImageInspect> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/{name}/json',
            path: {
                'name': name,
            },
            errors: {
                404: `No such image`,
                500: `Server error`,
            },
        });
    }

    /**
     * Get the history of an image
     * Return parent layers of an image.
     * @returns any List of image layers
     * @throws ApiError
     */
    public imageHistory({
name,
}: {
/**
 * Image name or ID
 */
name: string,
}): CancelablePromise<Array<{
Id: string;
Created: number;
CreatedBy: string;
Tags: Array<string>;
Size: number;
Comment: string;
}>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/{name}/history',
            path: {
                'name': name,
            },
            errors: {
                404: `No such image`,
                500: `Server error`,
            },
        });
    }

    /**
     * Push an image
     * Push an image to a registry.
             *
             * If you wish to push an image on to a private registry, that image must
             * already have a tag which references the registry. For example,
             * `registry.example.com/myimage:latest`.
             *
             * The push is cancelled if the HTTP connection is closed.
             * 
     * @returns any No error
     * @throws ApiError
     */
    public imagePush({
name,
xRegistryAuth,
tag,
}: {
/**
 * Image name or ID.
 */
name: string,
/**
 * A base64url-encoded auth configuration.
             *
             * Refer to the [authentication section](#section/Authentication) for
             * details.
             * 
 */
xRegistryAuth: string,
/**
 * The tag to associate with the image on the registry.
 */
tag?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/{name}/push',
            path: {
                'name': name,
            },
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            query: {
                'tag': tag,
            },
            errors: {
                404: `No such image`,
                500: `Server error`,
            },
        });
    }

    /**
     * Tag an image
     * Tag an image so that it becomes part of a repository.
     * @returns any No error
     * @throws ApiError
     */
    public imageTag({
name,
repo,
tag,
}: {
/**
 * Image name or ID to tag.
 */
name: string,
/**
 * The repository to tag in. For example, `someuser/someimage`.
 */
repo?: string,
/**
 * The name of the new tag.
 */
tag?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/{name}/tag',
            path: {
                'name': name,
            },
            query: {
                'repo': repo,
                'tag': tag,
            },
            errors: {
                400: `Bad parameter`,
                404: `No such image`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
    }

    /**
     * Remove an image
     * Remove an image, along with any untagged parent images that were
             * referenced by that image.
             *
             * Images can't be removed if they have descendant images, are being
             * used by a running container or are being used by a build.
             * 
     * @returns ImageDeleteResponseItem The image was deleted successfully
     * @throws ApiError
     */
    public imageDelete({
name,
force = false,
noprune = false,
}: {
/**
 * Image name or ID
 */
name: string,
/**
 * Remove the image even if it is being used by stopped containers or has other tags
 */
force?: boolean,
/**
 * Do not delete untagged parent images
 */
noprune?: boolean,
}): CancelablePromise<Array<ImageDeleteResponseItem>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/images/{name}',
            path: {
                'name': name,
            },
            query: {
                'force': force,
                'noprune': noprune,
            },
            errors: {
                404: `No such image`,
                409: `Conflict`,
                500: `Server error`,
            },
        });
    }

    /**
     * Search images
     * Search for an image on Docker Hub.
     * @returns any No error
     * @throws ApiError
     */
    public imageSearch({
term,
limit,
filters,
}: {
/**
 * Term to search
 */
term: string,
/**
 * Maximum number of results to return
 */
limit?: number,
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
             *
             * - `is-automated=(true|false)`
             * - `is-official=(true|false)`
             * - `stars=<number>` Matches images that has at least 'number' stars.
             * 
 */
filters?: string,
}): CancelablePromise<Array<{
description?: string;
is_official?: boolean;
is_automated?: boolean;
name?: string;
star_count?: number;
}>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/search',
            query: {
                'term': term,
                'limit': limit,
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Delete unused images
     * @returns any No error
     * @throws ApiError
     */
    public imagePrune({
filters,
}: {
/**
 * Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
             *
             * - `dangling=<boolean>` When set to `true` (or `1`), prune only
             * unused *and* untagged images. When set to `false`
             * (or `0`), all unused images are pruned.
             * - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
             * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
             * 
 */
filters?: string,
}): CancelablePromise<{
/**
 * Images that were deleted
 */
ImagesDeleted?: Array<ImageDeleteResponseItem>;
/**
 * Disk space reclaimed in bytes
 */
SpaceReclaimed?: number;
}> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/prune',
            query: {
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Create a new image from a container
     * @returns IdResponse no error
     * @throws ApiError
     */
    public imageCommit({
containerConfig,
container,
repo,
tag,
comment,
author,
pause = true,
changes,
}: {
/**
 * The container configuration
 */
containerConfig?: ContainerConfig,
/**
 * The ID or name of the container to commit
 */
container?: string,
/**
 * Repository name for the created image
 */
repo?: string,
/**
 * Tag name for the create image
 */
tag?: string,
/**
 * Commit message
 */
comment?: string,
/**
 * Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
 */
author?: string,
/**
 * Whether to pause the container before committing
 */
pause?: boolean,
/**
 * `Dockerfile` instructions to apply while committing
 */
changes?: string,
}): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/commit',
            query: {
                'container': container,
                'repo': repo,
                'tag': tag,
                'comment': comment,
                'author': author,
                'pause': pause,
                'changes': changes,
            },
            body: containerConfig,
            errors: {
                404: `no such container`,
                500: `server error`,
            },
        });
    }

    /**
     * Export an image
     * Get a tarball containing all images and metadata for a repository.
             *
             * If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.
             *
             * ### Image tarball format
             *
             * An image tarball contains one directory per image layer (named using its long ID), each containing these files:
             *
             * - `VERSION`: currently `1.0` - the file format version
             * - `json`: detailed layer information, similar to `docker inspect layer_id`
             * - `layer.tar`: A tarfile containing the filesystem changes in this layer
             *
             * The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.
             *
             * If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.
             *
             * ```json
             * {
                 * "hello-world": {
                     * "latest": "565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1"
                     * }
                     * }
                     * ```
                     * 
     * @returns binary no error
     * @throws ApiError
     */
    public imageGet({
name,
}: {
/**
 * Image name or ID
 */
name: string,
}): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/{name}/get',
            path: {
                'name': name,
            },
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Export several images
     * Get a tarball containing all images and metadata for several image
                     * repositories.
                     *
                     * For each value of the `names` parameter: if it is a specific name and
                     * tag (e.g. `ubuntu:latest`), then only that image (and its parents) are
                     * returned; if it is an image ID, similarly only that image (and its parents)
                     * are returned and there would be no names referenced in the 'repositories'
                     * file for this image ID.
                     *
                     * For details on the format, see the [export image endpoint](#operation/ImageGet).
                     * 
     * @returns binary no error
     * @throws ApiError
     */
    public imageGetAll({
names,
}: {
/**
 * Image names to filter by
 */
names?: Array<string>,
}): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/images/get',
            query: {
                'names': names,
            },
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Import images
     * Load a set of images and tags into a repository.
                     *
                     * For details on the format, see the [export image endpoint](#operation/ImageGet).
                     * 
     * @returns any no error
     * @throws ApiError
     */
    public imageLoad({
imagesTarball,
quiet = false,
}: {
/**
 * Tar archive containing images
 */
imagesTarball?: Blob,
/**
 * Suppress progress details during load.
 */
quiet?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images/load',
            query: {
                'quiet': quiet,
            },
            body: imagesTarball,
            errors: {
                500: `server error`,
            },
        });
    }

}
