# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataLocalFile <a name="@cdktf/provider-local.DataLocalFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/file.html local_file}.

#### Initializers <a name="@cdktf/provider-local.DataLocalFile.Initializer"></a>

```typescript
import { DataLocalFile } from '@cdktf/provider-local'

new DataLocalFile(scope: Construct, id: string, config: DataLocalFileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.parameter.config"></a>

- *Type:* [`@cdktf/provider-local.DataLocalFileConfig`](#@cdktf/provider-local.DataLocalFileConfig)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.DataLocalFile.property.tfResourceType"></a>

- *Type:* `string`

---

### File <a name="@cdktf/provider-local.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/file.html local_file}.

#### Initializers <a name="@cdktf/provider-local.File.Initializer"></a>

```typescript
import { File } from '@cdktf/provider-local'

new File(scope: Construct, id: string, config: FileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-local.File.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.File.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-local.File.parameter.config"></a>

- *Type:* [`@cdktf/provider-local.FileConfig`](#@cdktf/provider-local.FileConfig)

---

#### Methods <a name="Methods"></a>

##### `resetContent` <a name="@cdktf/provider-local.File.resetContent"></a>

```typescript
public resetContent()
```

##### `resetContentBase64` <a name="@cdktf/provider-local.File.resetContentBase64"></a>

```typescript
public resetContentBase64()
```

##### `resetDirectoryPermission` <a name="@cdktf/provider-local.File.resetDirectoryPermission"></a>

```typescript
public resetDirectoryPermission()
```

##### `resetFilePermission` <a name="@cdktf/provider-local.File.resetFilePermission"></a>

```typescript
public resetFilePermission()
```

##### `resetSensitiveContent` <a name="@cdktf/provider-local.File.resetSensitiveContent"></a>

```typescript
public resetSensitiveContent()
```

##### `resetSource` <a name="@cdktf/provider-local.File.resetSource"></a>

```typescript
public resetSource()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `contentBase64Input`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* `string`

---

##### `contentInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* `string`

---

##### `directoryPermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.directoryPermissionInput"></a>

```typescript
public readonly directoryPermissionInput: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `filePermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.filePermissionInput"></a>

```typescript
public readonly filePermissionInput: string;
```

- *Type:* `string`

---

##### `sensitiveContentInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.sensitiveContentInput"></a>

```typescript
public readonly sensitiveContentInput: string;
```

- *Type:* `string`

---

##### `sourceInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

---

##### `directoryPermission`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `filePermission`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* `string`

---

##### `sensitiveContent`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.sensitiveContent"></a>

```typescript
public readonly sensitiveContent: string;
```

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.File.property.tfResourceType"></a>

- *Type:* `string`

---

### LocalProvider <a name="@cdktf/provider-local.LocalProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/local local}.

#### Initializers <a name="@cdktf/provider-local.LocalProvider.Initializer"></a>

```typescript
import { LocalProvider } from '@cdktf/provider-local'

new LocalProvider(scope: Construct, id: string, config?: LocalProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-local.LocalProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.LocalProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-local.LocalProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-local.LocalProviderConfig`](#@cdktf/provider-local.LocalProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-local.LocalProvider.resetAlias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-local.LocalProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-local.LocalProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.LocalProvider.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### DataLocalFileConfig <a name="@cdktf/provider-local.DataLocalFileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataLocalFileConfig } from '@cdktf/provider-local'

const dataLocalFileConfig: DataLocalFileConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Path to the output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file.html#filename DataLocalFile#filename}

---

### FileConfig <a name="@cdktf/provider-local.FileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileConfig } from '@cdktf/provider-local'

const fileConfig: FileConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.FileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Path to the output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#filename File#filename}

---

##### `content`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content File#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content_base64 File#content_base64}.

---

##### `directoryPermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* `string`

Permissions to set for directories created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#directory_permission File#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* `string`

Permissions to set for the output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#file_permission File#file_permission}

---

##### `sensitiveContent`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.sensitiveContent"></a>

```typescript
public readonly sensitiveContent: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#sensitive_content File#sensitive_content}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

Path to file to use as source for content of output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#source File#source}

---

### LocalProviderConfig <a name="@cdktf/provider-local.LocalProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LocalProviderConfig } from '@cdktf/provider-local'

const localProviderConfig: LocalProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-local.LocalProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local#alias LocalProvider#alias}

---



