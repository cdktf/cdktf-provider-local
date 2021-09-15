# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataLocalFile <a name="@cdktf/provider-local.DataLocalFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/file.html local_file}.

#### Initializer <a name="@cdktf/provider-local.DataLocalFile.Initializer"></a>

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

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.contentBase64"></a>

- *Type:* `string`

---

##### `filenameInput`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filenameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.id"></a>

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filename"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.DataLocalFile.property.tfResourceType"></a>

- *Type:* `string`

---

### File <a name="@cdktf/provider-local.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/file.html local_file}.

#### Initializer <a name="@cdktf/provider-local.File.Initializer"></a>

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

##### `filenameInput`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.filenameInput"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.id"></a>

- *Type:* `string`

---

##### `contentBase64Input`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.contentBase64Input"></a>

- *Type:* `string`

---

##### `contentInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.contentInput"></a>

- *Type:* `string`

---

##### `directoryPermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.directoryPermissionInput"></a>

- *Type:* `string`

---

##### `filePermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.filePermissionInput"></a>

- *Type:* `string`

---

##### `sensitiveContentInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.sensitiveContentInput"></a>

- *Type:* `string`

---

##### `sourceInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.sourceInput"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.content"></a>

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.contentBase64"></a>

- *Type:* `string`

---

##### `directoryPermission`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.directoryPermission"></a>

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.filename"></a>

- *Type:* `string`

---

##### `filePermission`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.filePermission"></a>

- *Type:* `string`

---

##### `sensitiveContent`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.sensitiveContent"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.source"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.File.property.tfResourceType"></a>

- *Type:* `string`

---

### LocalProvider <a name="@cdktf/provider-local.LocalProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/local local}.

#### Initializer <a name="@cdktf/provider-local.LocalProvider.Initializer"></a>

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

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-local.LocalProvider.property.alias"></a>

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

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.filename"></a>

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

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.FileConfig.property.filename"></a>

- *Type:* `string`

Path to the output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#filename File#filename}

---

##### `content`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.content"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content File#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.contentBase64"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content_base64 File#content_base64}.

---

##### `directoryPermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.directoryPermission"></a>

- *Type:* `string`

Permissions to set for directories created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#directory_permission File#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.filePermission"></a>

- *Type:* `string`

Permissions to set for the output file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#file_permission File#file_permission}

---

##### `sensitiveContent`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.sensitiveContent"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#sensitive_content File#sensitive_content}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.source"></a>

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

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local#alias LocalProvider#alias}

---



