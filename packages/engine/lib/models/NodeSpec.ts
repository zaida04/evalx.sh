/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NodeSpec = {
    /**
     * Name for the node.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: Record<string, string>;
    /**
     * Role of the node.
     */
    Role?: 'worker' | 'manager';
    /**
     * Availability of the node.
     */
    Availability?: 'active' | 'pause' | 'drain';
};
