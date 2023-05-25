/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DistributionInspect } from '../models/DistributionInspect';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DistributionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get image information from the registry
     * Return image digest and platform information by contacting the registry.
 * 
     * @returns DistributionInspect descriptor and platform information
     * @throws ApiError
     */
    public distributionInspect({
name,
}: {
/**
 * Image name or id
 */
name: string,
}): CancelablePromise<DistributionInspect> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/distribution/{name}/json',
            path: {
                'name': name,
            },
            errors: {
                401: `Failed authentication or no image found`,
                500: `Server error`,
            },
        });
    }

}
