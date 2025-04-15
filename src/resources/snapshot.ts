// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Snapshot extends APIResource {
  /**
   * Create a snapshot from an image.
   *
   * Snapshots are point-in-time copies of a running instance that can be used to
   * create new instances.
   */
  create(body: SnapshotCreateParams, options?: RequestOptions): APIPromise<SnapshotModel> {
    return this._client.post('/snapshot', { body, ...options });
  }

  /**
   * Get a snapshot by ID.
   */
  retrieve(snapshotID: string, options?: RequestOptions): APIPromise<SnapshotModel> {
    return this._client.get(path`/snapshot/${snapshotID}`, options);
  }

  /**
   * List snapshots.
   */
  list(
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get('/snapshot', { query, ...options });
  }

  /**
   * Delete a snapshot by ID.
   */
  delete(snapshotID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/snapshot/${snapshotID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set metadata for a snapshot.
   */
  setMetadata(
    snapshotID: string,
    params: SnapshotSetMetadataParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotModel> {
    const { body } = params;
    return this._client.post(path`/snapshot/${snapshotID}/metadata`, { body: body, ...options });
  }
}

export interface ResourceSpec {
  /**
   * Size of the snapshot in megabytes
   */
  disk_size: number;

  /**
   * Memory of the snaphshot in megabytes
   */
  memory: number;

  /**
   * VCPU Count of the snaphshot
   */
  vcpus: number;
}

export interface SnapshotModel {
  /**
   * Unique identifier for the snapshot, like snapshot_xxxx
   */
  id: string;

  /**
   * Unix timestamp of when the snapshot was created
   */
  created: number;

  refs: SnapshotModel.Refs;

  spec: ResourceSpec;

  /**
   * Status of the snapshot
   */
  status: 'pending' | 'ready' | 'failed' | 'deleting' | 'deleted';

  /**
   * User provided digest of the snapshot content. Useful for caching if the snapshot
   * takes a long time to create.
   */
  digest?: string | null;

  /**
   * User provided metadata for the snapshot
   */
  metadata?: Record<string, string>;

  /**
   * Object type, always 'snapshot'
   */
  object?: 'snapshot';
}

export namespace SnapshotModel {
  export interface Refs {
    image_id: string;
  }
}

export interface SnapshotListResponse {
  data: Array<SnapshotModel>;

  object?: 'list';
}

export interface SnapshotCreateParams {
  /**
   * User provided digest of the snapshot content
   */
  digest?: string | null;

  /**
   * Size of the disk in MB
   */
  disk_size?: number;

  /**
   * ID of the base image to use.
   */
  image_id?: string | null;

  /**
   * Memory in MB
   */
  memory?: number;

  /**
   * Set of key-value pairs for storing additional information
   */
  metadata?: Record<string, string> | null;

  /**
   * Configuration for checking instance readiness. Can be either a timeout-based
   * check or an HTTP-based check.
   */
  readiness_check?: SnapshotCreateParams.ReadinessCheck | null;

  /**
   * Number of vCPUs
   */
  vcpus?: number;
}

export namespace SnapshotCreateParams {
  /**
   * Configuration for checking instance readiness. Can be either a timeout-based
   * check or an HTTP-based check.
   */
  export interface ReadinessCheck {
    timeout?: number;

    type?: 'timeout';
  }
}

export interface SnapshotListParams {
  digest?: string | null;

  /**
   * metadata[...] query parameters for filtering snapshots
   */
  metadata?: Record<string, string>;
}

export interface SnapshotSetMetadataParams {
  body: Record<string, string>;
}

export declare namespace Snapshot {
  export {
    type ResourceSpec as ResourceSpec,
    type SnapshotModel as SnapshotModel,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotSetMetadataParams as SnapshotSetMetadataParams,
  };
}
