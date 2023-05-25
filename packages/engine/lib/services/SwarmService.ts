/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Swarm } from '../models/Swarm';
import type { SwarmSpec } from '../models/SwarmSpec';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SwarmService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Inspect swarm
     * @returns Swarm no error
     * @throws ApiError
     */
    public swarmInspect(): CancelablePromise<Swarm> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/swarm',
            errors: {
                404: `no such swarm`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Initialize a new swarm
     * @returns string no error
     * @throws ApiError
     */
    public swarmInit({
body,
}: {
body: {
/**
 * Listen address used for inter-manager communication, as well
 * as determining the networking interface used for the VXLAN
 * Tunnel Endpoint (VTEP). This can either be an address/port
 * combination in the form `192.168.1.1:4567`, or an interface
 * followed by a port number, like `eth0:4567`. If the port number
 * is omitted, the default swarm listening port is used.
 * 
 */
ListenAddr?: string;
/**
 * Externally reachable address advertised to other nodes. This
 * can either be an address/port combination in the form
 * `192.168.1.1:4567`, or an interface followed by a port number,
 * like `eth0:4567`. If the port number is omitted, the port
 * number from the listen address is used. If `AdvertiseAddr` is
 * not specified, it will be automatically detected when possible.
 * 
 */
AdvertiseAddr?: string;
/**
 * Address or interface to use for data path traffic (format:
 * `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
 * like `eth0`. If `DataPathAddr` is unspecified, the same address
 * as `AdvertiseAddr` is used.
 *
 * The `DataPathAddr` specifies the address that global scope
 * network drivers will publish towards other  nodes in order to
 * reach the containers running on this node. Using this parameter
 * it is possible to separate the container data traffic from the
 * management traffic of the cluster.
 * 
 */
DataPathAddr?: string;
/**
 * DataPathPort specifies the data path port number for data traffic.
 * Acceptable port range is 1024 to 49151.
 * if no port is set or is set to 0, default port 4789 will be used.
 * 
 */
DataPathPort?: number;
/**
 * Default Address Pool specifies default subnet pools for global
 * scope networks.
 * 
 */
DefaultAddrPool?: Array<string>;
/**
 * Force creation of a new swarm.
 */
ForceNewCluster?: boolean;
/**
 * SubnetSize specifies the subnet size of the networks created
 * from the default subnet pool.
 * 
 */
SubnetSize?: number;
Spec?: SwarmSpec;
},
}): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/swarm/init',
            body: body,
            errors: {
                400: `bad parameter`,
                500: `server error`,
                503: `node is already part of a swarm`,
            },
        });
    }

    /**
     * Join an existing swarm
     * @returns any no error
     * @throws ApiError
     */
    public swarmJoin({
body,
}: {
body: {
/**
 * Listen address used for inter-manager communication if the node
 * gets promoted to manager, as well as determining the networking
 * interface used for the VXLAN Tunnel Endpoint (VTEP).
 * 
 */
ListenAddr?: string;
/**
 * Externally reachable address advertised to other nodes. This
 * can either be an address/port combination in the form
 * `192.168.1.1:4567`, or an interface followed by a port number,
 * like `eth0:4567`. If the port number is omitted, the port
 * number from the listen address is used. If `AdvertiseAddr` is
 * not specified, it will be automatically detected when possible.
 * 
 */
AdvertiseAddr?: string;
/**
 * Address or interface to use for data path traffic (format:
 * `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
 * like `eth0`. If `DataPathAddr` is unspecified, the same address
 * as `AdvertiseAddr` is used.
 *
 * The `DataPathAddr` specifies the address that global scope
 * network drivers will publish towards other nodes in order to
 * reach the containers running on this node. Using this parameter
 * it is possible to separate the container data traffic from the
 * management traffic of the cluster.
 * 
 */
DataPathAddr?: string;
/**
 * Addresses of manager nodes already participating in the swarm.
 * 
 */
RemoteAddrs?: Array<string>;
/**
 * Secret token for joining this swarm.
 */
JoinToken?: string;
},
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/swarm/join',
            body: body,
            errors: {
                400: `bad parameter`,
                500: `server error`,
                503: `node is already part of a swarm`,
            },
        });
    }

    /**
     * Leave a swarm
     * @returns any no error
     * @throws ApiError
     */
    public swarmLeave({
force = false,
}: {
/**
 * Force leave swarm, even if this is the last manager or that it will
 * break the cluster.
 * 
 */
force?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/swarm/leave',
            query: {
                'force': force,
            },
            errors: {
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Update a swarm
     * @returns any no error
     * @throws ApiError
     */
    public swarmUpdate({
body,
version,
rotateWorkerToken = false,
rotateManagerToken = false,
rotateManagerUnlockKey = false,
}: {
body: SwarmSpec,
/**
 * The version number of the swarm object being updated. This is
 * required to avoid conflicting writes.
 * 
 */
version: number,
/**
 * Rotate the worker join token.
 */
rotateWorkerToken?: boolean,
/**
 * Rotate the manager join token.
 */
rotateManagerToken?: boolean,
/**
 * Rotate the manager unlock key.
 */
rotateManagerUnlockKey?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/swarm/update',
            query: {
                'version': version,
                'rotateWorkerToken': rotateWorkerToken,
                'rotateManagerToken': rotateManagerToken,
                'rotateManagerUnlockKey': rotateManagerUnlockKey,
            },
            body: body,
            errors: {
                400: `bad parameter`,
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Get the unlock key
     * @returns any no error
     * @throws ApiError
     */
    public swarmUnlockkey(): CancelablePromise<{
/**
 * The swarm's unlock key.
 */
UnlockKey?: string;
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/swarm/unlockkey',
            errors: {
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

    /**
     * Unlock a locked manager
     * @returns any no error
     * @throws ApiError
     */
    public swarmUnlock({
body,
}: {
body: {
/**
 * The swarm's unlock key.
 */
UnlockKey?: string;
},
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/swarm/unlock',
            body: body,
            errors: {
                500: `server error`,
                503: `node is not part of a swarm`,
            },
        });
    }

}
