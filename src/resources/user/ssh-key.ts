// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SSHKey extends APIResource {
  /**
   * Get the current user's SSH public key.
   */
  retrieve(options?: RequestOptions): APIPromise<UserSSHKey> {
    return this._client.get('/user/ssh-key', options);
  }

  /**
   * Update the current user's SSH public key.
   */
  update(body: SSHKeyUpdateParams, options?: RequestOptions): APIPromise<UserSSHKey> {
    return this._client.put('/user/ssh-key', { body, ...options });
  }
}

export interface UserSSHKey {
  created: number;

  public_key: string;
}

export interface SSHKeyUpdateParams {
  public_key: string;
}

export declare namespace SSHKey {
  export { type UserSSHKey as UserSSHKey, type SSHKeyUpdateParams as SSHKeyUpdateParams };
}
