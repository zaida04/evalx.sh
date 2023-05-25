/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plugin } from '../models/Plugin';
import type { PluginPrivilege } from '../models/PluginPrivilege';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PluginService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List plugins
     * Returns information about installed plugins.
     * @returns Plugin No error
     * @throws ApiError
     */
    public pluginList({
filters,
}: {
/**
 * A JSON encoded value of the filters (a `map[string][]string`) to
 * process on the plugin list.
 *
 * Available filters:
 *
 * - `capability=<capability name>`
 * - `enable=<true>|<false>`
 * 
 */
filters?: string,
}): CancelablePromise<Array<Plugin>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/plugins',
            query: {
                'filters': filters,
            },
            errors: {
                500: `Server error`,
            },
        });
    }

    /**
     * Get plugin privileges
     * @returns PluginPrivilege no error
     * @throws ApiError
     */
    public getPluginPrivileges({
remote,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
remote: string,
}): CancelablePromise<Array<PluginPrivilege>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/plugins/privileges',
            query: {
                'remote': remote,
            },
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Install a plugin
     * Pulls and installs a plugin. After the plugin is installed, it can be
 * enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable).
 * 
     * @returns void 
     * @throws ApiError
     */
    public pluginPull({
remote,
name,
xRegistryAuth,
body,
}: {
/**
 * Remote reference for plugin to install.
 *
 * The `:latest` tag is optional, and is used as the default if omitted.
 * 
 */
remote: string,
/**
 * Local name for the pulled plugin.
 *
 * The `:latest` tag is optional, and is used as the default if omitted.
 * 
 */
name?: string,
/**
 * A base64url-encoded auth configuration to use when pulling a plugin
 * from a registry.
 *
 * Refer to the [authentication section](#section/Authentication) for
 * details.
 * 
 */
xRegistryAuth?: string,
body?: Array<PluginPrivilege>,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/pull',
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            query: {
                'remote': remote,
                'name': name,
            },
            body: body,
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Inspect a plugin
     * @returns Plugin no error
     * @throws ApiError
     */
    public pluginInspect({
name,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
}): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/plugins/{name}/json',
            path: {
                'name': name,
            },
            errors: {
                404: `plugin is not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Remove a plugin
     * @returns Plugin no error
     * @throws ApiError
     */
    public pluginDelete({
name,
force = false,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
/**
 * Disable the plugin before removing. This may result in issues if the
 * plugin is in use by a container.
 * 
 */
force?: boolean,
}): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/plugins/{name}',
            path: {
                'name': name,
            },
            query: {
                'force': force,
            },
            errors: {
                404: `plugin is not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Enable a plugin
     * @returns any no error
     * @throws ApiError
     */
    public pluginEnable({
name,
timeout,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
/**
 * Set the HTTP client timeout (in seconds)
 */
timeout?: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{name}/enable',
            path: {
                'name': name,
            },
            query: {
                'timeout': timeout,
            },
            errors: {
                404: `plugin is not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Disable a plugin
     * @returns any no error
     * @throws ApiError
     */
    public pluginDisable({
name,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{name}/disable',
            path: {
                'name': name,
            },
            errors: {
                404: `plugin is not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Upgrade a plugin
     * @returns void 
     * @throws ApiError
     */
    public pluginUpgrade({
name,
remote,
xRegistryAuth,
body,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
/**
 * Remote reference to upgrade to.
 *
 * The `:latest` tag is optional, and is used as the default if omitted.
 * 
 */
remote: string,
/**
 * A base64url-encoded auth configuration to use when pulling a plugin
 * from a registry.
 *
 * Refer to the [authentication section](#section/Authentication) for
 * details.
 * 
 */
xRegistryAuth?: string,
body?: Array<PluginPrivilege>,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{name}/upgrade',
            path: {
                'name': name,
            },
            headers: {
                'X-Registry-Auth': xRegistryAuth,
            },
            query: {
                'remote': remote,
            },
            body: body,
            errors: {
                404: `plugin not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Create a plugin
     * @returns void 
     * @throws ApiError
     */
    public pluginCreate({
name,
tarContext,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
/**
 * Path to tar containing plugin rootfs and manifest
 */
tarContext?: Blob,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/create',
            query: {
                'name': name,
            },
            body: tarContext,
            errors: {
                500: `server error`,
            },
        });
    }

    /**
     * Push a plugin
     * Push a plugin to the registry.
 * 
     * @returns any no error
     * @throws ApiError
     */
    public pluginPush({
name,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{name}/push',
            path: {
                'name': name,
            },
            errors: {
                404: `plugin not installed`,
                500: `server error`,
            },
        });
    }

    /**
     * Configure a plugin
     * @returns void 
     * @throws ApiError
     */
    public pluginSet({
name,
body,
}: {
/**
 * The name of the plugin. The `:latest` tag is optional, and is the
 * default if omitted.
 * 
 */
name: string,
body?: Array<string>,
}): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{name}/set',
            path: {
                'name': name,
            },
            body: body,
            errors: {
                404: `Plugin not installed`,
                500: `Server error`,
            },
        });
    }

}
