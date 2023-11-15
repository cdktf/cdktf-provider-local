# `local_file`

Refer to the Terraform Registory for docs: [`local_file`](https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file).

# `file` Submodule <a name="`file` Submodule" id="@cdktf/provider-local.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktf/provider-local.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file local_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.file.File.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

file.NewFile(scope Construct, id *string, config FileConfig) File
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.file.File.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.file.FileConfig">FileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.file.File.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.file.File.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.file.FileConfig">FileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.file.File.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.file.File.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.file.File.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.file.File.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-local.file.File.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-local.file.File.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetDirectoryPermission">ResetDirectoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetFilePermission">ResetFilePermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetSensitiveContent">ResetSensitiveContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-local.file.File.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.file.File.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.file.File.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.file.File.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.file.File.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.file.File.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.file.File.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.file.File.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-local.file.File.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-local.file.File.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.file.File.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.file.File.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.file.File.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.file.File.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.file.File.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.file.File.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.file.File.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.file.File.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.file.File.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-local.file.File.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.file.File.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.file.File.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-local.file.File.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-local.file.File.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-local.file.File.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-local.file.File.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-local.file.File.resetContentBase64"></a>

```go
func ResetContentBase64()
```

##### `ResetDirectoryPermission` <a name="ResetDirectoryPermission" id="@cdktf/provider-local.file.File.resetDirectoryPermission"></a>

```go
func ResetDirectoryPermission()
```

##### `ResetFilePermission` <a name="ResetFilePermission" id="@cdktf/provider-local.file.File.resetFilePermission"></a>

```go
func ResetFilePermission()
```

##### `ResetSensitiveContent` <a name="ResetSensitiveContent" id="@cdktf/provider-local.file.File.resetSensitiveContent"></a>

```go
func ResetSensitiveContent()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-local.file.File.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.file.File.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-local.file.File.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

file.File_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.file.File.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

file.File_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.file.File.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-local.file.File.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

file.File_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.file.File.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-local.file.File.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

file.File_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the File to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing File that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.file.File.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the File to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.file.File.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Sha256">ContentBase64Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha1">ContentSha1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentSha512">ContentSha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64Input">ContentBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.directoryPermissionInput">DirectoryPermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filePermissionInput">FilePermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sensitiveContentInput">SensitiveContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.directoryPermission">DirectoryPermission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.filePermission">FilePermission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.sensitiveContent">SensitiveContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.File.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.file.File.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.file.File.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.file.File.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.file.File.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.file.File.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.file.File.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.file.File.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.file.File.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.file.File.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.file.File.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.file.File.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.file.File.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.file.File.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.file.File.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentBase64Sha256`<sup>Required</sup> <a name="ContentBase64Sha256" id="@cdktf/provider-local.file.File.property.contentBase64Sha256"></a>

```go
func ContentBase64Sha256() *string
```

- *Type:* *string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktf/provider-local.file.File.property.contentBase64Sha512"></a>

```go
func ContentBase64Sha512() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktf/provider-local.file.File.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `ContentSha1`<sup>Required</sup> <a name="ContentSha1" id="@cdktf/provider-local.file.File.property.contentSha1"></a>

```go
func ContentSha1() *string
```

- *Type:* *string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-local.file.File.property.contentSha256"></a>

```go
func ContentSha256() *string
```

- *Type:* *string

---

##### `ContentSha512`<sup>Required</sup> <a name="ContentSha512" id="@cdktf/provider-local.file.File.property.contentSha512"></a>

```go
func ContentSha512() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.file.File.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-local.file.File.property.contentBase64Input"></a>

```go
func ContentBase64Input() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-local.file.File.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DirectoryPermissionInput`<sup>Optional</sup> <a name="DirectoryPermissionInput" id="@cdktf/provider-local.file.File.property.directoryPermissionInput"></a>

```go
func DirectoryPermissionInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-local.file.File.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `FilePermissionInput`<sup>Optional</sup> <a name="FilePermissionInput" id="@cdktf/provider-local.file.File.property.filePermissionInput"></a>

```go
func FilePermissionInput() *string
```

- *Type:* *string

---

##### `SensitiveContentInput`<sup>Optional</sup> <a name="SensitiveContentInput" id="@cdktf/provider-local.file.File.property.sensitiveContentInput"></a>

```go
func SensitiveContentInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-local.file.File.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-local.file.File.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-local.file.File.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `DirectoryPermission`<sup>Required</sup> <a name="DirectoryPermission" id="@cdktf/provider-local.file.File.property.directoryPermission"></a>

```go
func DirectoryPermission() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.file.File.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `FilePermission`<sup>Required</sup> <a name="FilePermission" id="@cdktf/provider-local.file.File.property.filePermission"></a>

```go
func FilePermission() *string
```

- *Type:* *string

---

##### `SensitiveContent`<sup>Required</sup> <a name="SensitiveContent" id="@cdktf/provider-local.file.File.property.sensitiveContent"></a>

```go
func SensitiveContent() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-local.file.File.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.File.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.file.File.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktf/provider-local.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.file.FileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/file"

&file.FileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filename: *string,
	Content: *string,
	ContentBase64: *string,
	DirectoryPermission: *string,
	FilePermission: *string,
	SensitiveContent: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.filename">Filename</a></code> | <code>*string</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.content">Content</a></code> | <code>*string</code> | Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.directoryPermission">DirectoryPermission</a></code> | <code>*string</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.filePermission">FilePermission</a></code> | <code>*string</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.sensitiveContent">SensitiveContent</a></code> | <code>*string</code> | Sensitive content to store in the file, expected to be an UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.file.FileConfig.property.source">Source</a></code> | <code>*string</code> | Path to file to use as source for the one we are creating. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.file.FileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.file.FileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.file.FileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.file.FileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.file.FileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.file.FileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.file.FileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.file.FileConfig.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#filename File#filename}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-local.file.FileConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `sensitive_content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#content File#content}

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-local.file.FileConfig.property.contentBase64"></a>

```go
ContentBase64 *string
```

- *Type:* *string

Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content`, `sensitive_content` and `source`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#content_base64 File#content_base64}

---

##### `DirectoryPermission`<sup>Optional</sup> <a name="DirectoryPermission" id="@cdktf/provider-local.file.FileConfig.property.directoryPermission"></a>

```go
DirectoryPermission *string
```

- *Type:* *string

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#directory_permission File#directory_permission}

---

##### `FilePermission`<sup>Optional</sup> <a name="FilePermission" id="@cdktf/provider-local.file.FileConfig.property.filePermission"></a>

```go
FilePermission *string
```

- *Type:* *string

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0777"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#file_permission File#file_permission}

---

##### `SensitiveContent`<sup>Optional</sup> <a name="SensitiveContent" id="@cdktf/provider-local.file.FileConfig.property.sensitiveContent"></a>

```go
SensitiveContent *string
```

- *Type:* *string

Sensitive content to store in the file, expected to be an UTF-8 encoded string.

Will not be displayed in diffs.
Conflicts with `content`, `content_base64` and `source`.
Exactly one of these four arguments must be specified.
If in need to use *sensitive* content, please use the [`local_sensitive_file`](./sensitive_file.html)
resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#sensitive_content File#sensitive_content}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-local.file.FileConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Path to file to use as source for the one we are creating.

Conflicts with `content`, `sensitive_content` and `content_base64`.
Exactly one of these four arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/file#source File#source}

---



