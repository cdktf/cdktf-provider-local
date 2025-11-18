# `dataLocalCommand` Submodule <a name="`dataLocalCommand` Submodule" id="@cdktf/provider-local.dataLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalCommand <a name="DataLocalCommand" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommand(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: str,
  allow_non_zero_exit_code: bool | IResolvable = None,
  arguments: typing.List[str] = None,
  stdin: str = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.command">command</a></code> | <code>str</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.arguments">arguments</a></code> | <code>typing.List[str]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.stdin">stdin</a></code> | <code>str</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.command"></a>

- *Type:* str

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `allow_non_zero_exit_code`<sup>Optional</sup> <a name="allow_non_zero_exit_code" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.allowNonZeroExitCode"></a>

- *Type:* bool | cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.arguments"></a>

- *Type:* typing.List[str]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.stdin"></a>

- *Type:* str

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.workingDirectory"></a>

- *Type:* str

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode">reset_allow_non_zero_exit_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin">reset_stdin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_non_zero_exit_code` <a name="reset_allow_non_zero_exit_code" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode"></a>

```python
def reset_allow_non_zero_exit_code() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_stdin` <a name="reset_stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin"></a>

```python
def reset_stdin() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommand.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommand.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommand.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLocalCommand to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLocalCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr">stderr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout">stdout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput">allow_non_zero_exit_code_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput">command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput">stdin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin">stdin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr"></a>

```python
stderr: str
```

- *Type:* str

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout"></a>

```python
stdout: str
```

- *Type:* str

---

##### `allow_non_zero_exit_code_input`<sup>Optional</sup> <a name="allow_non_zero_exit_code_input" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput"></a>

```python
allow_non_zero_exit_code_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput"></a>

```python
command_input: str
```

- *Type:* str

---

##### `stdin_input`<sup>Optional</sup> <a name="stdin_input" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput"></a>

```python
stdin_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `allow_non_zero_exit_code`<sup>Required</sup> <a name="allow_non_zero_exit_code" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode"></a>

```python
allow_non_zero_exit_code: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin"></a>

```python
stdin: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalCommandConfig <a name="DataLocalCommandConfig" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_local import data_local_command

dataLocalCommand.DataLocalCommandConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: str,
  allow_non_zero_exit_code: bool | IResolvable = None,
  arguments: typing.List[str] = None,
  stdin: str = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command">command</a></code> | <code>str</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin">stdin</a></code> | <code>str</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command"></a>

```python
command: str
```

- *Type:* str

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `allow_non_zero_exit_code`<sup>Optional</sup> <a name="allow_non_zero_exit_code" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode"></a>

```python
allow_non_zero_exit_code: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin"></a>

```python
stdin: str
```

- *Type:* str

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---



