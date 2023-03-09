# `sensitiveFile` Submodule <a name="`sensitiveFile` Submodule" id="@cdktf/provider-local.sensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveFile <a name="SensitiveFile" id="@cdktf/provider-local.sensitiveFile.SensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer"></a>

```typescript
import { sensitiveFile } from '@cdktf/provider-local'

new sensitiveFile.SensitiveFile(scope: Construct, id: string, config: SensitiveFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission">resetDirectoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission">resetFilePermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetDirectoryPermission` <a name="resetDirectoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission"></a>

```typescript
public resetDirectoryPermission(): void
```

##### `resetFilePermission` <a name="resetFilePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission"></a>

```typescript
public resetFilePermission(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct"></a>

```typescript
import { sensitiveFile } from '@cdktf/provider-local'

sensitiveFile.SensitiveFile.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement"></a>

```typescript
import { sensitiveFile } from '@cdktf/provider-local'

sensitiveFile.SensitiveFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource"></a>

```typescript
import { sensitiveFile } from '@cdktf/provider-local'

sensitiveFile.SensitiveFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256">contentBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512">contentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1">contentSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256">contentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512">contentSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput">directoryPermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput">filePermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission">directoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission">filePermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentBase64Sha256`<sup>Required</sup> <a name="contentBase64Sha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256"></a>

```typescript
public readonly contentBase64Sha256: string;
```

- *Type:* string

---

##### `contentBase64Sha512`<sup>Required</sup> <a name="contentBase64Sha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512"></a>

```typescript
public readonly contentBase64Sha512: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentSha1`<sup>Required</sup> <a name="contentSha1" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1"></a>

```typescript
public readonly contentSha1: string;
```

- *Type:* string

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256"></a>

```typescript
public readonly contentSha256: string;
```

- *Type:* string

---

##### `contentSha512`<sup>Required</sup> <a name="contentSha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512"></a>

```typescript
public readonly contentSha512: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `directoryPermissionInput`<sup>Optional</sup> <a name="directoryPermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput"></a>

```typescript
public readonly directoryPermissionInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `filePermissionInput`<sup>Optional</sup> <a name="filePermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput"></a>

```typescript
public readonly filePermissionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `directoryPermission`<sup>Required</sup> <a name="directoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `filePermission`<sup>Required</sup> <a name="filePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveFileConfig <a name="SensitiveFileConfig" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.Initializer"></a>

```typescript
import { sensitiveFile } from '@cdktf/provider-local'

const sensitiveFileConfig: sensitiveFile.SensitiveFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename">filename</a></code> | <code>string</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content">content</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64">contentBase64</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission">directoryPermission</a></code> | <code>string</code> | Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission">filePermission</a></code> | <code>string</code> | Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source">source</a></code> | <code>string</code> | Path to file to use as source for the one we are creating. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content SensitiveFile#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directoryPermission`<sup>Optional</sup> <a name="directoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* string

Permissions to set for directories created (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="filePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* string

Permissions to set for the output file (before umask), expressed as string in [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation). Default value is `"0700"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#source SensitiveFile#source}

---



