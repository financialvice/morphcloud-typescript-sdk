// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeyAPI from './key';
import { Key, SSHKey } from './key';

export class SSH extends APIResource {
  key: KeyAPI.Key = new KeyAPI.Key(this._client);
}

SSH.Key = Key;

export declare namespace SSH {
  export { Key as Key, type SSHKey as SSHKey };
}
