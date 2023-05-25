/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventActor } from './EventActor';

/**
 * EventMessage represents the information an event contains.
 * 
 */
export type EventMessage = {
    /**
     * The type of object emitting the event
     */
    Type?: 'builder' | 'config' | 'container' | 'daemon' | 'image' | 'network' | 'node' | 'plugin' | 'secret' | 'service' | 'volume';
    /**
     * The type of event
     */
    Action?: string;
    Actor?: EventActor;
    /**
     * Scope of the event. Engine events are `local` scope. Cluster (Swarm)
 * events are `swarm` scope.
 * 
     */
    scope?: 'local' | 'swarm';
    /**
     * Timestamp of event
     */
    time?: number;
    /**
     * Timestamp of event, with nanosecond accuracy
     */
    timeNano?: number;
};
