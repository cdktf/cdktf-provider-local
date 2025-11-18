# `dataLocalCommand` Submodule <a name="`dataLocalCommand` Submodule" id="@cdktf/provider-local.dataLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalCommand <a name="DataLocalCommand" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

new dataLocalCommand.DataLocalCommand(scope: Construct, id: string, config: DataLocalCommandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig">DataLocalCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig">DataLocalCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode">resetAllowNonZeroExitCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin">resetStdin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowNonZeroExitCode` <a name="resetAllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode"></a>

```typescript
public resetAllowNonZeroExitCode(): void
```

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetStdin` <a name="resetStdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin"></a>

```typescript
public resetStdin(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isConstruct"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

dataLocalCommand.DataLocalCommand.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

dataLocalCommand.DataLocalCommand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

dataLocalCommand.DataLocalCommand.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

dataLocalCommand.DataLocalCommand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLocalCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr">stderr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout">stdout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput">allowNonZeroExitCodeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput">argumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput">commandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput">stdinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin">stdin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr"></a>

```typescript
public readonly stderr: string;
```

- *Type:* string

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout"></a>

```typescript
public readonly stdout: string;
```

- *Type:* string

---

##### `allowNonZeroExitCodeInput`<sup>Optional</sup> <a name="allowNonZeroExitCodeInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput"></a>

```typescript
public readonly allowNonZeroExitCodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* string

---

##### `stdinInput`<sup>Optional</sup> <a name="stdinInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput"></a>

```typescript
public readonly stdinInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `allowNonZeroExitCode`<sup>Required</sup> <a name="allowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode"></a>

```typescript
public readonly allowNonZeroExitCode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin"></a>

```typescript
public readonly stdin: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalCommandConfig <a name="DataLocalCommandConfig" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.Initializer"></a>

```typescript
import { dataLocalCommand } from '@cdktf/provider-local'

const dataLocalCommandConfig: dataLocalCommand.DataLocalCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command">command</a></code> | <code>string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments">arguments</a></code> | <code>string[]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin">stdin</a></code> | <code>string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode"></a>

```typescript
public readonly allowNonZeroExitCode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin"></a>

```typescript
public readonly stdin: string;
```

- *Type:* string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---



