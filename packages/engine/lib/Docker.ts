/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { ConfigService } from './services/ConfigService';
import { ContainerService } from './services/ContainerService';
import { DistributionService } from './services/DistributionService';
import { ExecService } from './services/ExecService';
import { ImageService } from './services/ImageService';
import { NetworkService } from './services/NetworkService';
import { NodeService } from './services/NodeService';
import { PluginService } from './services/PluginService';
import { SecretService } from './services/SecretService';
import { ServiceService } from './services/ServiceService';
import { SessionService } from './services/SessionService';
import { SwarmService } from './services/SwarmService';
import { SystemService } from './services/SystemService';
import { TaskService } from './services/TaskService';
import { VolumeService } from './services/VolumeService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Docker {

    public readonly config: ConfigService;
    public readonly container: ContainerService;
    public readonly distribution: DistributionService;
    public readonly exec: ExecService;
    public readonly image: ImageService;
    public readonly network: NetworkService;
    public readonly node: NodeService;
    public readonly plugin: PluginService;
    public readonly secret: SecretService;
    public readonly service: ServiceService;
    public readonly session: SessionService;
    public readonly swarm: SwarmService;
    public readonly system: SystemService;
    public readonly task: TaskService;
    public readonly volume: VolumeService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/v1.42',
            VERSION: config?.VERSION ?? '1.42',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.config = new ConfigService(this.request);
        this.container = new ContainerService(this.request);
        this.distribution = new DistributionService(this.request);
        this.exec = new ExecService(this.request);
        this.image = new ImageService(this.request);
        this.network = new NetworkService(this.request);
        this.node = new NodeService(this.request);
        this.plugin = new PluginService(this.request);
        this.secret = new SecretService(this.request);
        this.service = new ServiceService(this.request);
        this.session = new SessionService(this.request);
        this.swarm = new SwarmService(this.request);
        this.system = new SystemService(this.request);
        this.task = new TaskService(this.request);
        this.volume = new VolumeService(this.request);
    }
}
