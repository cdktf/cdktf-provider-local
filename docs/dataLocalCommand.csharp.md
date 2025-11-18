# `dataLocalCommand` Submodule <a name="`dataLocalCommand` Submodule" id="@cdktf/provider-local.dataLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalCommand <a name="DataLocalCommand" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

new DataLocalCommand(Construct Scope, string Id, DataLocalCommandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig">DataLocalCommandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowNonZeroExitCode` <a name="ResetAllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode"></a>

```csharp
private void ResetAllowNonZeroExitCode()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetStdin` <a name="ResetStdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin"></a>

```csharp
private void ResetStdin()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
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

```csharp
using HashiCorp.Cdktf.Providers.Local;

DataLocalCommand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

DataLocalCommand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

DataLocalCommand.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

DataLocalCommand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLocalCommand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLocalCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode">ExitCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr">Stderr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout">Stdout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput">AllowNonZeroExitCodeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput">CommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput">StdinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin">Stdin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode"></a>

```csharp
public double ExitCode { get; }
```

- *Type:* double

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr"></a>

```csharp
public string Stderr { get; }
```

- *Type:* string

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout"></a>

```csharp
public string Stdout { get; }
```

- *Type:* string

---

##### `AllowNonZeroExitCodeInput`<sup>Optional</sup> <a name="AllowNonZeroExitCodeInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCodeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput"></a>

```csharp
public string CommandInput { get; }
```

- *Type:* string

---

##### `StdinInput`<sup>Optional</sup> <a name="StdinInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput"></a>

```csharp
public string StdinInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `AllowNonZeroExitCode`<sup>Required</sup> <a name="AllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCode { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Stdin`<sup>Required</sup> <a name="Stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin"></a>

```csharp
public string Stdin { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalCommandConfig <a name="DataLocalCommandConfig" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

new DataLocalCommandConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Command,
    bool|IResolvable AllowNonZeroExitCode = null,
    string[] Arguments = null,
    string Stdin = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command">Command</a></code> | <code>string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments">Arguments</a></code> | <code>string[]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin">Stdin</a></code> | <code>string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `AllowNonZeroExitCode`<sup>Optional</sup> <a name="AllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCode { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `Stdin`<sup>Optional</sup> <a name="Stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin"></a>

```csharp
public string Stdin { get; set; }
```

- *Type:* string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---



