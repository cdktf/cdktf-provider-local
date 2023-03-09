# `dataLocalSensitiveFile` Submodule <a name="`dataLocalSensitiveFile` Submodule" id="@cdktf/provider-local.dataLocalSensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalSensitiveFile <a name="DataLocalSensitiveFile" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer"></a>

```typescript
import { dataLocalSensitiveFile } from '@cdktf/provider-local'

new dataLocalSensitiveFile.DataLocalSensitiveFile(scope: Construct, id: string, config: DataLocalSensitiveFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig">DataLocalSensitiveFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig">DataLocalSensitiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct"></a>

```typescript
import { dataLocalSensitiveFile } from '@cdktf/provider-local'

dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement"></a>

```typescript
import { dataLocalSensitiveFile } from '@cdktf/provider-local'

dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource"></a>

```typescript
import { dataLocalSensitiveFile } from '@cdktf/provider-local'

dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256">contentBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512">contentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1">contentSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256">contentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512">contentSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename">filename</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `contentBase64Sha256`<sup>Required</sup> <a name="contentBase64Sha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256"></a>

```typescript
public readonly contentBase64Sha256: string;
```

- *Type:* string

---

##### `contentBase64Sha512`<sup>Required</sup> <a name="contentBase64Sha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512"></a>

```typescript
public readonly contentBase64Sha512: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentSha1`<sup>Required</sup> <a name="contentSha1" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1"></a>

```typescript
public readonly contentSha1: string;
```

- *Type:* string

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256"></a>

```typescript
public readonly contentSha256: string;
```

- *Type:* string

---

##### `contentSha512`<sup>Required</sup> <a name="contentSha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512"></a>

```typescript
public readonly contentSha512: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalSensitiveFileConfig <a name="DataLocalSensitiveFileConfig" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.Initializer"></a>

```typescript
import { dataLocalSensitiveFile } from '@cdktf/provider-local'

const dataLocalSensitiveFileConfig: dataLocalSensitiveFile.DataLocalSensitiveFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename">filename</a></code> | <code>string</code> | Path to the file that will be read. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#filename DataLocalSensitiveFile#filename}

---



