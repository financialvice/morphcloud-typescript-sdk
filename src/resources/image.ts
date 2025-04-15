// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Image extends APIResource {
  /**
   * List available images for creating snapshots.
   */
  list(options?: RequestOptions): APIPromise<ImageListResponse> {
    return this._client.get('/image', options);
  }
}

export interface ImageListResponse {
  data: Array<ImageListResponse.Data>;

  object?: 'list';
}

export namespace ImageListResponse {
  export interface Data {
    /**
     * Unique identifier for the base image, like img_xxxx
     */
    id: string;

    /**
     * Unix timestamp of when the base image was created
     */
    created: number;

    /**
     * Size of the base image in bytes
     */
    disk_size: number;

    /**
     * Name of the base image
     */
    name: string;

    /**
     * Description of the base image
     */
    description?: string | null;

    /**
     * Object type, always 'image'
     */
    object?: 'image';
  }
}

export declare namespace Image {
  export { type ImageListResponse as ImageListResponse };
}
