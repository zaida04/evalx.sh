/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * OK response to ContainerCreate operation
 */
export type ContainerCreateResponse = {
    /**
     * The ID of the created container
     */
    Id: string;
    /**
     * Warnings encountered when creating the container
     */
    Warnings: Array<string>;
};
