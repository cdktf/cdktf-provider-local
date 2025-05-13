# `file` Submodule <a name="`file` Submodule" id="@cdktf/provider-local.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktf/provider-local.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file local_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.file.File.Initializer"></a>

```python
from cdktf_cdktf_provider_local import file

file.File(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filename: str,
  content: str = None,
  content_base64: str = None,
  directory_permission: str = None,
  file_permission: str = None,
  sensitive_content: str = None,
  source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.filename">filename</a></code> | <code>str</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.content">content</a></code> | <code>str</code> | Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.contentBase64">content_base64</a></code> | <code>str</code> | Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.directoryPermission">directory_permission</a></code> | <code>str</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.filePermission">file_permission</a></code> | <code>str</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.sensitiveContent">sensitive_content</a></code> | <code>str</code> | Sensitive content to store in the file, expected to be an UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.source">source</a></code> | <code>str</code> | Path to file to use as source for the one we are creating. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.file.File.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.file.File.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.file.File.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.file.File.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.file.File.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.file.File.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.file.File.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.file.File.Initializer.parameter.filename"></a>

- *Type:* str

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#filename File#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.file.File.Initializer.parameter.content"></a>

- *Type:* str

Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `sensitive_content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#content File#content}

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-local.file.File.Initializer.parameter.contentBase64"></a>

- *Type:* str

Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content`, `sensitive_content` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#content_base64 File#content_base64}

---

##### `directory_permission`<sup>Optional</sup> <a name="directory_permission" id="@cdktf/provider-local.file.File.Initializer.parameter.directoryPermission"></a>

- *Type:* str

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#directory_permission File#directory_permission}

---

##### `file_permission`<sup>Optional</sup> <a name="file_permission" id="@cdktf/provider-local.file.File.Initializer.parameter.filePermission"></a>

- *Type:* str

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#file_permission File#file_permission}

---

##### `sensitive_content`<sup>Optional</sup> <a name="sensitive_content" id="@cdktf/provider-local.file.File.Initializer.parameter.sensitiveContent"></a>

- *Type:* str

Sensitive content to store in the file, expected to be an UTF-8 encoded string.

Will not be displayed in diffs.
Conflicts with `content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.
If in need to use *sensitive* content, please use the [`local_sensitive_file`](./sensitive_file.html)
resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#sensitive_content File#sensitive_content}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.file.File.Initializer.parameter.source"></a>

- *Type:* str

Path to file to use as source for the one we are creating.

Conflicts with `content`, `sensitive_content` and `content_base64`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#source File#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.file.File.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.file.File.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.file.File.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.file.File.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-local.file.File.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-local.file.File.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-local.file.File.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-local.file.File.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetDirectoryPermission">reset_directory_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetFilePermission">reset_file_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetSensitiveContent">reset_sensitive_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-local.file.File.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-local.file.File.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.file.File.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.file.File.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-local.file.File.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-local.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-local.file.File.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-local.file.File.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-local.file.File.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-local.file.File.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-local.file.File.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-local.file.File.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-local.file.File.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-local.file.File.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-local.file.File.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-local.file.File.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-local.file.File.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-local.file.File.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-local.file.File.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-local.file.File.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-local.file.File.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-local.file.File.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-local.file.File.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-local.file.File.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-local.file.File.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-local.file.File.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-local.file.File.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-local.file.File.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-local.file.File.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-local.file.File.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-local.file.File.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_directory_permission` <a name="reset_directory_permission" id="@cdktf/provider-local.file.File.resetDirectoryPermission"></a>

```python
def reset_directory_permission() -> None
```

##### `reset_file_permission` <a name="reset_file_permission" id="@cdktf/provider-local.file.File.resetFilePermission"></a>

```python
def reset_file_permission() -> None
```

##### `reset_sensitive_content` <a name="reset_sensitive_content" id="@cdktf/provider-local.file.File.resetSensitiveContent"></a>

```python
def reset_sensitive_content() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-local.file.File.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.file.File.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-local.file.File.isConstruct"></a>

```python
from cdktf_cdktf_provider_local import file

file.File.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.file.File.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-local.file.File.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_local import file

file.File.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.file.File.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-local.file.File.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_local import file

file.File.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.file.File.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-local.file.File.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_local import file

file.File.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the File to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing File that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the File to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.file.File.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Sha256">content_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Sha512">content_base64_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha1">content_sha1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha512">content_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.directoryPermissionInput">directory_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filePermissionInput">file_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sensitiveContentInput">sensitive_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.directoryPermission">directory_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filePermission">file_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sensitiveContent">sensitive_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.file.File.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-local.file.File.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.file.File.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-local.file.File.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-local.file.File.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-local.file.File.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-local.file.File.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.file.File.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.file.File.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.file.File.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.file.File.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.file.File.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.file.File.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_base64_sha256`<sup>Required</sup> <a name="content_base64_sha256" id="@cdktf/provider-local.file.File.property.contentBase64Sha256"></a>

```python
content_base64_sha256: str
```

- *Type:* str

---

##### `content_base64_sha512`<sup>Required</sup> <a name="content_base64_sha512" id="@cdktf/provider-local.file.File.property.contentBase64Sha512"></a>

```python
content_base64_sha512: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="@cdktf/provider-local.file.File.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_sha1`<sup>Required</sup> <a name="content_sha1" id="@cdktf/provider-local.file.File.property.contentSha1"></a>

```python
content_sha1: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-local.file.File.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `content_sha512`<sup>Required</sup> <a name="content_sha512" id="@cdktf/provider-local.file.File.property.contentSha512"></a>

```python
content_sha512: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-local.file.File.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-local.file.File.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `directory_permission_input`<sup>Optional</sup> <a name="directory_permission_input" id="@cdktf/provider-local.file.File.property.directoryPermissionInput"></a>

```python
directory_permission_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-local.file.File.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `file_permission_input`<sup>Optional</sup> <a name="file_permission_input" id="@cdktf/provider-local.file.File.property.filePermissionInput"></a>

```python
file_permission_input: str
```

- *Type:* str

---

##### `sensitive_content_input`<sup>Optional</sup> <a name="sensitive_content_input" id="@cdktf/provider-local.file.File.property.sensitiveContentInput"></a>

```python
sensitive_content_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-local.file.File.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.file.File.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-local.file.File.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `directory_permission`<sup>Required</sup> <a name="directory_permission" id="@cdktf/provider-local.file.File.property.directoryPermission"></a>

```python
directory_permission: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.file.File.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `file_permission`<sup>Required</sup> <a name="file_permission" id="@cdktf/provider-local.file.File.property.filePermission"></a>

```python
file_permission: str
```

- *Type:* str

---

##### `sensitive_content`<sup>Required</sup> <a name="sensitive_content" id="@cdktf/provider-local.file.File.property.sensitiveContent"></a>

```python
sensitive_content: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-local.file.File.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.file.File.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktf/provider-local.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.file.FileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_local import file

file.FileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filename: str,
  content: str = None,
  content_base64: str = None,
  directory_permission: str = None,
  file_permission: str = None,
  sensitive_content: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.filename">filename</a></code> | <code>str</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.content">content</a></code> | <code>str</code> | Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.contentBase64">content_base64</a></code> | <code>str</code> | Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.directoryPermission">directory_permission</a></code> | <code>str</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.filePermission">file_permission</a></code> | <code>str</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.sensitiveContent">sensitive_content</a></code> | <code>str</code> | Sensitive content to store in the file, expected to be an UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.source">source</a></code> | <code>str</code> | Path to file to use as source for the one we are creating. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.file.FileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.file.FileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.file.FileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.file.FileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.file.FileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.FileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.file.FileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.file.FileConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#filename File#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.file.FileConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `sensitive_content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#content File#content}

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-local.file.FileConfig.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content`, `sensitive_content` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#content_base64 File#content_base64}

---

##### `directory_permission`<sup>Optional</sup> <a name="directory_permission" id="@cdktf/provider-local.file.FileConfig.property.directoryPermission"></a>

```python
directory_permission: str
```

- *Type:* str

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#directory_permission File#directory_permission}

---

##### `file_permission`<sup>Optional</sup> <a name="file_permission" id="@cdktf/provider-local.file.FileConfig.property.filePermission"></a>

```python
file_permission: str
```

- *Type:* str

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#file_permission File#file_permission}

---

##### `sensitive_content`<sup>Optional</sup> <a name="sensitive_content" id="@cdktf/provider-local.file.FileConfig.property.sensitiveContent"></a>

```python
sensitive_content: str
```

- *Type:* str

Sensitive content to store in the file, expected to be an UTF-8 encoded string.

Will not be displayed in diffs.
Conflicts with `content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.
If in need to use *sensitive* content, please use the [`local_sensitive_file`](./sensitive_file.html)
resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#sensitive_content File#sensitive_content}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.file.FileConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Path to file to use as source for the one we are creating.

Conflicts with `content`, `sensitive_content` and `content_base64`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/file#source File#source}

---



