# `dataLocalCommand` Submodule <a name="`dataLocalCommand` Submodule" id="@cdktf/provider-local.dataLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalCommand <a name="DataLocalCommand" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

datalocalcommand.NewDataLocalCommand(scope Construct, id *string, config DataLocalCommandConfig) DataLocalCommand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig">DataLocalCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig">DataLocalCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode">ResetAllowNonZeroExitCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin">ResetStdin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowNonZeroExitCode` <a name="ResetAllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode"></a>

```go
func ResetAllowNonZeroExitCode()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetStdin` <a name="ResetStdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin"></a>

```go
func ResetStdin()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

datalocalcommand.DataLocalCommand_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

datalocalcommand.DataLocalCommand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

datalocalcommand.DataLocalCommand_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

datalocalcommand.DataLocalCommand_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataLocalCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataLocalCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr">Stderr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout">Stdout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput">AllowNonZeroExitCodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput">CommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput">StdinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin">Stdin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr"></a>

```go
func Stderr() *string
```

- *Type:* *string

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout"></a>

```go
func Stdout() *string
```

- *Type:* *string

---

##### `AllowNonZeroExitCodeInput`<sup>Optional</sup> <a name="AllowNonZeroExitCodeInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput"></a>

```go
func AllowNonZeroExitCodeInput() interface{}
```

- *Type:* interface{}

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput"></a>

```go
func CommandInput() *string
```

- *Type:* *string

---

##### `StdinInput`<sup>Optional</sup> <a name="StdinInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput"></a>

```go
func StdinInput() *string
```

- *Type:* *string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `AllowNonZeroExitCode`<sup>Required</sup> <a name="AllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode"></a>

```go
func AllowNonZeroExitCode() interface{}
```

- *Type:* interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Stdin`<sup>Required</sup> <a name="Stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin"></a>

```go
func Stdin() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalCommandConfig <a name="DataLocalCommandConfig" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalcommand"

&datalocalcommand.DataLocalCommandConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Command: *string,
	AllowNonZeroExitCode: interface{},
	Arguments: *[]*string,
	Stdin: *string,
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command">Command</a></code> | <code>*string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>interface{}</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments">Arguments</a></code> | <code>*[]*string</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin">Stdin</a></code> | <code>*string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command"></a>

```go
Command *string
```

- *Type:* *string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `AllowNonZeroExitCode`<sup>Optional</sup> <a name="AllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode"></a>

```go
AllowNonZeroExitCode interface{}
```

- *Type:* interface{}

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `Stdin`<sup>Optional</sup> <a name="Stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin"></a>

```go
Stdin *string
```

- *Type:* *string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---



