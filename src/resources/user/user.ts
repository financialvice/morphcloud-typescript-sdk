// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeyAPI from './api-key';
import { APIKey, APIKeyCreateResponse, APIKeyListResponse } from './api-key';
import * as SSHKeyAPI from './ssh-key';
import { SSHKey, SSHKeyUpdateParams, UserSSHKey } from './ssh-key';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
  sshKey: SSHKeyAPI.SSHKey = new SSHKeyAPI.SSHKey(this._client);

  /**
   * Get the current user's usage overview
   */
  getUsage(
    query: UserGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGetUsageResponse> {
    return this._client.get('/user/usage', { query, ...options });
  }
}

export interface UserGetUsageResponse {
  instance: Array<UserGetUsageResponse.Instance>;

  items: Array<string>;

  snapshot: Array<UserGetUsageResponse.Snapshot>;
}

export namespace UserGetUsageResponse {
  export interface Instance {
    instance_cpu_time: number;

    instance_disk_time: number;

    instance_memory_time: number;

    period_end: number;

    period_start: number;
  }

  export interface Snapshot {
    period_end: number;

    period_start: number;

    snapshot_disk_time: number;

    snapshot_memory_time: number;
  }
}

export interface UserGetUsageParams {
  interval?: string;
}

User.APIKey = APIKey;
User.SSHKey = SSHKey;

export declare namespace User {
  export { type UserGetUsageResponse as UserGetUsageResponse, type UserGetUsageParams as UserGetUsageParams };

  export {
    APIKey as APIKey,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
  };

  export { SSHKey as SSHKey, type UserSSHKey as UserSSHKey, type SSHKeyUpdateParams as SSHKeyUpdateParams };
}
