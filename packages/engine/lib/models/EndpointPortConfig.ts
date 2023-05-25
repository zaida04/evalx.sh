/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EndpointPortConfig = {
    Name?: string;
    Protocol?: 'tcp' | 'udp' | 'sctp';
    /**
     * The port inside the container.
     */
    TargetPort?: number;
    /**
     * The port on the swarm hosts.
     */
    PublishedPort?: number;
    /**
     * The mode in which port is published.
 *
 * <p><br /></p>
 *
 * - "ingress" makes the target port accessible on every node,
 * regardless of whether there is a task for the service running on
 * that node or not.
 * - "host" bypasses the routing mesh and publish the port directly on
 * the swarm node where that service is running.
 * 
     */
    PublishMode?: 'ingress' | 'host';
};
