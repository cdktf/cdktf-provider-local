# `dataLocalFile` Submodule <a name="`dataLocalFile` Submodule" id="@cdktf/provider-local.dataLocalFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalFile <a name="DataLocalFile" id="@cdktf/provider-local.dataLocalFile.DataLocalFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/file local_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

datalocalfile.NewDataLocalFile(scope Construct, id *string, config DataLocalFileConfig) DataLocalFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig">DataLocalFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig">DataLocalFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLocalFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

datalocalfile.DataLocalFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

datalocalfile.DataLocalFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

datalocalfile.DataLocalFile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

datalocalfile.DataLocalFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataLocalFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataLocalFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataLocalFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64Sha256">ContentBase64Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha1">ContentSha1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha512">ContentSha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentBase64Sha256`<sup>Required</sup> <a name="ContentBase64Sha256" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64Sha256"></a>

```go
func ContentBase64Sha256() *string
```

- *Type:* *string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentBase64Sha512"></a>

```go
func ContentBase64Sha512() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `ContentSha1`<sup>Required</sup> <a name="ContentSha1" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha1"></a>

```go
func ContentSha1() *string
```

- *Type:* *string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha256"></a>

```go
func ContentSha256() *string
```

- *Type:* *string

---

##### `ContentSha512`<sup>Required</sup> <a name="ContentSha512" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.contentSha512"></a>

```go
func ContentSha512() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.dataLocalFile.DataLocalFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalFileConfig <a name="DataLocalFileConfig" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v11/datalocalfile"

&datalocalfile.DataLocalFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.filename">Filename</a></code> | <code>*string</code> | Path to the file that will be read. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.dataLocalFile.DataLocalFileConfig.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/file#filename DataLocalFile#filename}

---



