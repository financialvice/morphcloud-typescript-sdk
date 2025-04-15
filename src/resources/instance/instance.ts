// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SnapshotAPI from '../snapshot';
import * as HTTPAPI from './http';
import { AuthMode, HTTP, HTTPExposeParams, HTTPHideParams } from './http';
import * as SSHAPI from './ssh/ssh';
import { SSH } from './ssh/ssh';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Instance extends APIResource {
  ssh: SSHAPI.SSH = new SSHAPI.SSH(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);

  /**
   * Get an instance by ID.
   */
  retrieve(instanceID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.get(path`/instance/${instanceID}`, options);
  }

  /**
   * List instances.
   */
  list(
    query: InstanceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstanceListResponse> {
    return this._client.get('/instance', { query, ...options });
  }

  /**
   * Branch an instance into multiple instances creating a new snapshot.
   */
  branch(
    instanceID: string,
    params: InstanceBranchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstanceBranchResponse> {
    const { count, digest, ...body } = params ?? {};
    return this._client.post(path`/instance/${instanceID}/branch`, {
      query: { count, digest },
      body,
      ...options,
    });
  }

  /**
   * Execute a command in an instance.
   */
  exec(
    instanceID: string,
    body: InstanceExecParams,
    options?: RequestOptions,
  ): APIPromise<InstanceExecResponse> {
    return this._client.post(path`/instance/${instanceID}/exec`, { body, ...options });
  }

  /**
   * Pause an instance.
   */
  pause(instanceID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.post(path`/instance/${instanceID}/pause`, options);
  }

  /**
   * Restart an instance.
   */
  reboot(instanceID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.post(path`/instance/${instanceID}/reboot`, options);
  }

  /**
   * Resume a paused instance.
   */
  resume(instanceID: string, options?: RequestOptions): APIPromise<Model> {
    return this._client.post(path`/instance/${instanceID}/resume`, options);
  }

  /**
   * Set metadata for an instance.
   */
  setMetadata(
    instanceID: string,
    params: InstanceSetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<Model> {
    const { body } = params;
    return this._client.post(path`/instance/${instanceID}/metadata`, { body: body, ...options });
  }

  /**
   * Create a snapshot from an instance.
   */
  snapshot(
    instanceID: string,
    params: InstanceSnapshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotAPI.SnapshotModel> {
    const { digest, ...body } = params ?? {};
    return this._client.post(path`/instance/${instanceID}/snapshot`, { query: { digest }, body, ...options });
  }

  /**
   * Start a new instance from a snapshot.
   */
  start(params: InstanceStartParams, options?: RequestOptions): APIPromise<Model> {
    const { snapshot_id, ...body } = params;
    return this._client.post('/instance', { query: { snapshot_id }, body, ...options });
  }

  /**
   * Stop and delete an instance by ID.
   */
  stop(instanceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/instance/${instanceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Model {
  id: string;

  created: number;

  networking: Model.Networking;

  refs: Model.Refs;

  spec: SnapshotAPI.ResourceSpec;

  /**
   * User provided metadata for the instance
   */
  metadata?: Record<string, string>;

  object?: 'instance';

  status?: 'pending' | 'ready' | 'paused' | 'saving' | 'error';
}

export namespace Model {
  export interface Networking {
    http_services?: Array<Networking.HTTPService>;

    internal_ip?: string | null;
  }

  export namespace Networking {
    export interface HTTPService {
      name: string;

      port: number;

      url: string;

      auth_mode?: HTTPAPI.AuthMode;
    }
  }

  export interface Refs {
    image_id: string;

    snapshot_id: string;
  }
}

export interface InstanceListResponse {
  data: Array<Model>;

  object?: 'list';
}

export interface InstanceBranchResponse {
  instances: Array<Model>;

  snapshot: SnapshotAPI.SnapshotModel;
}

export interface InstanceExecResponse {
  exit_code: number;

  stderr: string;

  stdout: string;
}

export interface InstanceListParams {
  /**
   * metadata[...] query parameters for filtering instances
   */
  metadata?: Record<string, string>;
}

export interface InstanceBranchParams {
  /**
   * Query param:
   */
  count?: number;

  /**
   * Query param:
   */
  digest?: string | null;

  /**
   * Body param: Metadata for the new instances. If a list is provided, each instance
   * will have the corresponding metadata.
   */
  instance_metadata?: Record<string, string> | Array<Record<string, string>> | null;

  /**
   * Body param: Metadata for the new snapshot
   */
  snapshot_metadata?: Record<string, string> | null;
}

export interface InstanceExecParams {
  command: Array<string>;
}

export interface InstanceSetMetadataParams {
  body: Record<string, string>;
}

export interface InstanceSnapshotParams {
  /**
   * Query param:
   */
  digest?: string | null;

  /**
   * Body param:
   */
  metadata?: Record<string, string> | null;
}

export interface InstanceStartParams {
  /**
   * Query param:
   */
  snapshot_id: string;

  /**
   * Body param:
   */
  metadata?: Record<string, string> | null;

  /**
   * Body param: Action to take when the instance expires. Defaults to 'stop'.
   */
  ttl_action?: 'stop' | 'pause' | null;

  /**
   * Body param: Time to live in seconds for the instance
   */
  ttl_seconds?: number | null;
}

Instance.SSH = SSH;
Instance.HTTP = HTTP;

export declare namespace Instance {
  export {
    type Model as Model,
    type InstanceListResponse as InstanceListResponse,
    type InstanceBranchResponse as InstanceBranchResponse,
    type InstanceExecResponse as InstanceExecResponse,
    type InstanceListParams as InstanceListParams,
    type InstanceBranchParams as InstanceBranchParams,
    type InstanceExecParams as InstanceExecParams,
    type InstanceSetMetadataParams as InstanceSetMetadataParams,
    type InstanceSnapshotParams as InstanceSnapshotParams,
    type InstanceStartParams as InstanceStartParams,
  };

  export { SSH as SSH };

  export {
    HTTP as HTTP,
    type AuthMode as AuthMode,
    type HTTPExposeParams as HTTPExposeParams,
    type HTTPHideParams as HTTPHideParams,
  };
}
