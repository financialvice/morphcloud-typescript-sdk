// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKey extends APIResource {
  /**
   * Create a new API key for the authenticated user.
   */
  create(options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/user/api-key', options);
  }

  /**
   * List all active API keys for the authenticated user.
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/user/api-key', options);
  }

  /**
   * Delete an API key.
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/user/api-key/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyCreateResponse {
  id: string;

  created: number;

  key: string;

  key_prefix: string;
}

export interface APIKeyListResponse {
  data: Array<APIKeyListResponse.Data>;

  object?: 'list';
}

export namespace APIKeyListResponse {
  export interface Data {
    id: string;

    created: number;

    key_prefix: string;

    last_used?: number | null;
  }
}

export declare namespace APIKey {
  export { type APIKeyCreateResponse as APIKeyCreateResponse, type APIKeyListResponse as APIKeyListResponse };
}
