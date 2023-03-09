# `dataLocalSensitiveFile` Submodule <a name="`dataLocalSensitiveFile` Submodule" id="@cdktf/provider-local.dataLocalSensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalSensitiveFile <a name="DataLocalSensitiveFile" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer"></a>

```python
from cdktf_cdktf_provider_local import data_local_sensitive_file

dataLocalSensitiveFile.DataLocalSensitiveFile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filename: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.filename">filename</a></code> | <code>str</code> | Path to the file that will be read. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.filename"></a>

- *Type:* str

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#filename DataLocalSensitiveFile#filename}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct"></a>

```python
from cdktf_cdktf_provider_local import data_local_sensitive_file

dataLocalSensitiveFile.DataLocalSensitiveFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_local import data_local_sensitive_file

dataLocalSensitiveFile.DataLocalSensitiveFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_local import data_local_sensitive_file

dataLocalSensitiveFile.DataLocalSensitiveFile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256">content_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512">content_base64_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1">content_sha1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512">content_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename">filename</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `content_base64_sha256`<sup>Required</sup> <a name="content_base64_sha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256"></a>

```python
content_base64_sha256: str
```

- *Type:* str

---

##### `content_base64_sha512`<sup>Required</sup> <a name="content_base64_sha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512"></a>

```python
content_base64_sha512: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_sha1`<sup>Required</sup> <a name="content_sha1" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1"></a>

```python
content_sha1: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `content_sha512`<sup>Required</sup> <a name="content_sha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512"></a>

```python
content_sha512: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalSensitiveFileConfig <a name="DataLocalSensitiveFileConfig" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_local import data_local_sensitive_file

dataLocalSensitiveFile.DataLocalSensitiveFileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename">filename</a></code> | <code>str</code> | Path to the file that will be read. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#filename DataLocalSensitiveFile#filename}

---



