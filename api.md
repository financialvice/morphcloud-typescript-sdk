# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Image

Types:

- <code><a href="./src/resources/image.ts">ImageListResponse</a></code>

Methods:

- <code title="get /image">client.image.<a href="./src/resources/image.ts">list</a>() -> ImageListResponse</code>

# Snapshot

Types:

- <code><a href="./src/resources/snapshot.ts">ResourceSpec</a></code>
- <code><a href="./src/resources/snapshot.ts">SnapshotModel</a></code>
- <code><a href="./src/resources/snapshot.ts">SnapshotListResponse</a></code>

Methods:

- <code title="post /snapshot">client.snapshot.<a href="./src/resources/snapshot.ts">create</a>({ ...params }) -> SnapshotModel</code>
- <code title="get /snapshot/{snapshot_id}">client.snapshot.<a href="./src/resources/snapshot.ts">retrieve</a>(snapshotID) -> SnapshotModel</code>
- <code title="get /snapshot">client.snapshot.<a href="./src/resources/snapshot.ts">list</a>({ ...params }) -> SnapshotListResponse</code>
- <code title="delete /snapshot/{snapshot_id}">client.snapshot.<a href="./src/resources/snapshot.ts">delete</a>(snapshotID) -> void</code>
- <code title="post /snapshot/{snapshot_id}/metadata">client.snapshot.<a href="./src/resources/snapshot.ts">setMetadata</a>(snapshotID, { ...params }) -> SnapshotModel</code>

# Instance

Types:

- <code><a href="./src/resources/instance/instance.ts">Model</a></code>
- <code><a href="./src/resources/instance/instance.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/instance/instance.ts">InstanceBranchResponse</a></code>
- <code><a href="./src/resources/instance/instance.ts">InstanceExecResponse</a></code>

Methods:

- <code title="get /instance/{instance_id}">client.instance.<a href="./src/resources/instance/instance.ts">retrieve</a>(instanceID) -> Model</code>
- <code title="get /instance">client.instance.<a href="./src/resources/instance/instance.ts">list</a>({ ...params }) -> InstanceListResponse</code>
- <code title="post /instance/{instance_id}/branch">client.instance.<a href="./src/resources/instance/instance.ts">branch</a>(instanceID, { ...params }) -> InstanceBranchResponse</code>
- <code title="post /instance/{instance_id}/exec">client.instance.<a href="./src/resources/instance/instance.ts">exec</a>(instanceID, { ...params }) -> InstanceExecResponse</code>
- <code title="post /instance/{instance_id}/pause">client.instance.<a href="./src/resources/instance/instance.ts">pause</a>(instanceID) -> Model</code>
- <code title="post /instance/{instance_id}/reboot">client.instance.<a href="./src/resources/instance/instance.ts">reboot</a>(instanceID) -> Model</code>
- <code title="post /instance/{instance_id}/resume">client.instance.<a href="./src/resources/instance/instance.ts">resume</a>(instanceID) -> Model</code>
- <code title="post /instance/{instance_id}/metadata">client.instance.<a href="./src/resources/instance/instance.ts">setMetadata</a>(instanceID, { ...params }) -> Model</code>
- <code title="post /instance/{instance_id}/snapshot">client.instance.<a href="./src/resources/instance/instance.ts">snapshot</a>(instanceID, { ...params }) -> SnapshotModel</code>
- <code title="post /instance">client.instance.<a href="./src/resources/instance/instance.ts">start</a>({ ...params }) -> Model</code>
- <code title="delete /instance/{instance_id}">client.instance.<a href="./src/resources/instance/instance.ts">stop</a>(instanceID) -> void</code>

## SSH

### Key

Types:

- <code><a href="./src/resources/instance/ssh/key.ts">SSHKey</a></code>

Methods:

- <code title="get /instance/{instance_id}/ssh/key">client.instance.ssh.key.<a href="./src/resources/instance/ssh/key.ts">retrieve</a>(instanceID) -> SSHKey</code>
- <code title="post /instance/{instance_id}/ssh/key">client.instance.ssh.key.<a href="./src/resources/instance/ssh/key.ts">rotate</a>(instanceID) -> SSHKey</code>

## HTTP

Types:

- <code><a href="./src/resources/instance/http.ts">AuthMode</a></code>

Methods:

- <code title="post /instance/{instance_id}/http">client.instance.http.<a href="./src/resources/instance/http.ts">expose</a>(instanceID, { ...params }) -> Model</code>
- <code title="delete /instance/{instance_id}/http/{service_name}">client.instance.http.<a href="./src/resources/instance/http.ts">hide</a>(serviceName, { ...params }) -> Model</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserGetUsageResponse</a></code>

Methods:

- <code title="get /user/usage">client.user.<a href="./src/resources/user/user.ts">getUsage</a>({ ...params }) -> UserGetUsageResponse</code>

## APIKey

Types:

- <code><a href="./src/resources/user/api-key.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/user/api-key.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /user/api-key">client.user.apiKey.<a href="./src/resources/user/api-key.ts">create</a>() -> APIKeyCreateResponse</code>
- <code title="get /user/api-key">client.user.apiKey.<a href="./src/resources/user/api-key.ts">list</a>() -> APIKeyListResponse</code>
- <code title="delete /user/api-key/{api_key_id}">client.user.apiKey.<a href="./src/resources/user/api-key.ts">delete</a>(apiKeyID) -> void</code>

## SSHKey

Types:

- <code><a href="./src/resources/user/ssh-key.ts">UserSSHKey</a></code>

Methods:

- <code title="get /user/ssh-key">client.user.sshKey.<a href="./src/resources/user/ssh-key.ts">retrieve</a>() -> UserSSHKey</code>
- <code title="put /user/ssh-key">client.user.sshKey.<a href="./src/resources/user/ssh-key.ts">update</a>({ ...params }) -> UserSSHKey</code>
