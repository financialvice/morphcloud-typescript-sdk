// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InstanceAPI from './instance';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class HTTP extends APIResource {
  /**
   * Expose an HTTP service on an instance.
   */
  expose(
    instanceID: string,
    body: HTTPExposeParams,
    options?: RequestOptions,
  ): APIPromise<InstanceAPI.Model> {
    return this._client.post(path`/instance/${instanceID}/http`, { body, ...options });
  }

  /**
   * Hide an HTTP service on an instance.
   */
  hide(serviceName: string, params: HTTPHideParams, options?: RequestOptions): APIPromise<InstanceAPI.Model> {
    const { instance_id } = params;
    return this._client.delete(path`/instance/${instance_id}/http/${serviceName}`, options);
  }
}

export type AuthMode = 'none' | 'api_key';

export interface HTTPExposeParams {
  name: string;

  port: number;

  /**
   * Authentication mode for the HTTP service
   */
  auth_mode?: AuthMode | null;
}

export interface HTTPHideParams {
  instance_id: string;
}

export declare namespace HTTP {
  export {
    type AuthMode as AuthMode,
    type HTTPExposeParams as HTTPExposeParams,
    type HTTPHideParams as HTTPHideParams,
  };
}
