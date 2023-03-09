# `sensitiveFile` Submodule <a name="`sensitiveFile` Submodule" id="@cdktf/provider-local.sensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveFile <a name="SensitiveFile" id="@cdktf/provider-local.sensitiveFile.SensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer"></a>

```python
from cdktf_cdktf_provider_local import sensitive_file

sensitiveFile.SensitiveFile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filename">filename</a></code> | <code>str</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.content">content</a></code> | <code>str</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.contentBase64">content_base64</a></code> | <code>str</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.directoryPermission">directory_permission</a></code> | <code>str</code> | Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filePermission">file_permission</a></code> | <code>str</code> | Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.source">source</a></code> | <code>str</code> | Path to file to use as source for the one we are creating. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filename"></a>

- *Type:* str

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.content"></a>

- *Type:* str

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content SensitiveFile#content}

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.contentBase64"></a>

- *Type:* str

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directory_permission`<sup>Optional</sup> <a name="directory_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.directoryPermission"></a>

- *Type:* str

Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `file_permission`<sup>Optional</sup> <a name="file_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filePermission"></a>

- *Type:* str

Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.source"></a>

- *Type:* str

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#source SensitiveFile#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission">reset_directory_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission">reset_file_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_directory_permission` <a name="reset_directory_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission"></a>

```python
def reset_directory_permission() -> None
```

##### `reset_file_permission` <a name="reset_file_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission"></a>

```python
def reset_file_permission() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct"></a>

```python
from cdktf_cdktf_provider_local import sensitive_file

sensitiveFile.SensitiveFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_local import sensitive_file

sensitiveFile.SensitiveFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_local import sensitive_file

sensitiveFile.SensitiveFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256">content_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512">content_base64_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1">content_sha1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512">content_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput">directory_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput">file_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission">directory_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission">file_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_base64_sha256`<sup>Required</sup> <a name="content_base64_sha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256"></a>

```python
content_base64_sha256: str
```

- *Type:* str

---

##### `content_base64_sha512`<sup>Required</sup> <a name="content_base64_sha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512"></a>

```python
content_base64_sha512: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_sha1`<sup>Required</sup> <a name="content_sha1" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1"></a>

```python
content_sha1: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `content_sha512`<sup>Required</sup> <a name="content_sha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512"></a>

```python
content_sha512: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `directory_permission_input`<sup>Optional</sup> <a name="directory_permission_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput"></a>

```python
directory_permission_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `file_permission_input`<sup>Optional</sup> <a name="file_permission_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput"></a>

```python
file_permission_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `directory_permission`<sup>Required</sup> <a name="directory_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission"></a>

```python
directory_permission: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `file_permission`<sup>Required</sup> <a name="file_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission"></a>

```python
file_permission: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveFileConfig <a name="SensitiveFileConfig" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_local import sensitive_file

sensitiveFile.SensitiveFileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename">filename</a></code> | <code>str</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content">content</a></code> | <code>str</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64">content_base64</a></code> | <code>str</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission">directory_permission</a></code> | <code>str</code> | Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission">file_permission</a></code> | <code>str</code> | Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source">source</a></code> | <code>str</code> | Path to file to use as source for the one we are creating. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content SensitiveFile#content}

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directory_permission`<sup>Optional</sup> <a name="directory_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission"></a>

```python
directory_permission: str
```

- *Type:* str

Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `file_permission`<sup>Optional</sup> <a name="file_permission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission"></a>

```python
file_permission: str
```

- *Type:* str

Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#source SensitiveFile#source}

---



