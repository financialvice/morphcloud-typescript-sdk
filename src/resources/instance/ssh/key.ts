// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Key extends APIResource {
  /**
   * Get the SSH key pair for an instance.
   */
  retrieve(instanceID: string, options?: RequestOptions): APIPromise<SSHKey> {
    return this._client.get(path`/instance/${instanceID}/ssh/key`, options);
  }

  /**
   * Rotate the SSH key pair for an instance.
   */
  rotate(instanceID: string, options?: RequestOptions): APIPromise<SSHKey> {
    return this._client.post(path`/instance/${instanceID}/ssh/key`, options);
  }
}

export interface SSHKey {
  private_key: string;

  public_key: string;

  object?: 'instance_ssh_key';
}

export declare namespace Key {
  export { type SSHKey as SSHKey };
}
