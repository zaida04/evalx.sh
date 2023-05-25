/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Volume } from './Volume';

/**
 * Volume list response
 */
export type VolumeListResponse = {
    /**
     * List of volumes
     */
    Volumes?: Array<Volume>;
    /**
     * Warnings that occurred when fetching the list of volumes.
 * 
     */
    Warnings?: Array<string>;
};
