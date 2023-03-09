# `dataLocalSensitiveFile` Submodule <a name="`dataLocalSensitiveFile` Submodule" id="@cdktf/provider-local.dataLocalSensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalSensitiveFile <a name="DataLocalSensitiveFile" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v5/datalocalsensitivefile"

datalocalsensitivefile.NewDataLocalSensitiveFile(scope Construct, id *string, config DataLocalSensitiveFileConfig) DataLocalSensitiveFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig">DataLocalSensitiveFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig">DataLocalSensitiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v5/datalocalsensitivefile"

datalocalsensitivefile.DataLocalSensitiveFile_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v5/datalocalsensitivefile"

datalocalsensitivefile.DataLocalSensitiveFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v5/datalocalsensitivefile"

datalocalsensitivefile.DataLocalSensitiveFile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256">ContentBase64Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1">ContentSha1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512">ContentSha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentBase64Sha256`<sup>Required</sup> <a name="ContentBase64Sha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256"></a>

```go
func ContentBase64Sha256() *string
```

- *Type:* *string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512"></a>

```go
func ContentBase64Sha512() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `ContentSha1`<sup>Required</sup> <a name="ContentSha1" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1"></a>

```go
func ContentSha1() *string
```

- *Type:* *string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256"></a>

```go
func ContentSha256() *string
```

- *Type:* *string

---

##### `ContentSha512`<sup>Required</sup> <a name="ContentSha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512"></a>

```go
func ContentSha512() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalSensitiveFileConfig <a name="DataLocalSensitiveFileConfig" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-local-go/local/v5/datalocalsensitivefile"

&datalocalsensitivefile.DataLocalSensitiveFileConfig {
	Connection: interface{},
	Count: *f64,
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
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename">Filename</a></code> | <code>*string</code> | Path to the file that will be read. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#filename DataLocalSensitiveFile#filename}

---



