# `local_sensitive_file`

Refer to the Terraform Registory for docs: [`local_sensitive_file`](https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file).

# `sensitiveFile` Submodule <a name="`sensitiveFile` Submodule" id="@cdktf/provider-local.sensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveFile <a name="SensitiveFile" id="@cdktf/provider-local.sensitiveFile.SensitiveFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

new SensitiveFile(Construct Scope, string Id, SensitiveFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission">ResetDirectoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission">ResetFilePermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetDirectoryPermission` <a name="ResetDirectoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission"></a>

```csharp
private void ResetDirectoryPermission()
```

##### `ResetFilePermission` <a name="ResetFilePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission"></a>

```csharp
private void ResetFilePermission()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

SensitiveFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

SensitiveFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

SensitiveFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256">ContentBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5">ContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1">ContentSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512">ContentSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput">DirectoryPermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput">FilePermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission">DirectoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission">FilePermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentBase64Sha256`<sup>Required</sup> <a name="ContentBase64Sha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256"></a>

```csharp
public string ContentBase64Sha256 { get; }
```

- *Type:* string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512"></a>

```csharp
public string ContentBase64Sha512 { get; }
```

- *Type:* string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; }
```

- *Type:* string

---

##### `ContentSha1`<sup>Required</sup> <a name="ContentSha1" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1"></a>

```csharp
public string ContentSha1 { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `ContentSha512`<sup>Required</sup> <a name="ContentSha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512"></a>

```csharp
public string ContentSha512 { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DirectoryPermissionInput`<sup>Optional</sup> <a name="DirectoryPermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput"></a>

```csharp
public string DirectoryPermissionInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `FilePermissionInput`<sup>Optional</sup> <a name="FilePermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput"></a>

```csharp
public string FilePermissionInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `DirectoryPermission`<sup>Required</sup> <a name="DirectoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission"></a>

```csharp
public string DirectoryPermission { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `FilePermission`<sup>Required</sup> <a name="FilePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission"></a>

```csharp
public string FilePermission { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveFileConfig <a name="SensitiveFileConfig" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Local;

new SensitiveFileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filename,
    string Content = null,
    string ContentBase64 = null,
    string DirectoryPermission = null,
    string FilePermission = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename">Filename</a></code> | <code>string</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content">Content</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission">DirectoryPermission</a></code> | <code>string</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission">FilePermission</a></code> | <code>string</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source">Source</a></code> | <code>string</code> | Path to file to use as source for the one we are creating. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#filename SensitiveFile#filename}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#content SensitiveFile#content}

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `DirectoryPermission`<sup>Optional</sup> <a name="DirectoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission"></a>

```csharp
public string DirectoryPermission { get; set; }
```

- *Type:* string

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `FilePermission`<sup>Optional</sup> <a name="FilePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission"></a>

```csharp
public string FilePermission { get; set; }
```

- *Type:* string

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file#source SensitiveFile#source}

---



