# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataLocalFile <a name="@cdktf/provider-local.DataLocalFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/file local_file}.

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

#### Methods <a name="Methods"></a>

##### `resetId` <a name="@cdktf/provider-local.DataLocalFile.resetId"></a>

```typescript
public resetId()
```


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

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.DataLocalFile.property.tfResourceType"></a>

- *Type:* `string`

---

### DataLocalSensitiveFile <a name="@cdktf/provider-local.DataLocalSensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/d/sensitive_file local_sensitive_file}.

#### Initializers <a name="@cdktf/provider-local.DataLocalSensitiveFile.Initializer"></a>

```typescript
import { DataLocalSensitiveFile } from '@cdktf/provider-local'

new DataLocalSensitiveFile(scope: Construct, id: string, config: DataLocalSensitiveFileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.parameter.config"></a>

- *Type:* [`@cdktf/provider-local.DataLocalSensitiveFileConfig`](#@cdktf/provider-local.DataLocalSensitiveFileConfig)

---

#### Methods <a name="Methods"></a>

##### `resetId` <a name="@cdktf/provider-local.DataLocalSensitiveFile.resetId"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.DataLocalSensitiveFile.property.tfResourceType"></a>

- *Type:* `string`

---

### File <a name="@cdktf/provider-local.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/file local_file}.

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

##### `resetId` <a name="@cdktf/provider-local.File.resetId"></a>

```typescript
public resetId()
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

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-local.File.property.idInput"></a>

```typescript
public readonly idInput: string;
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

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.File.property.id"></a>

```typescript
public readonly id: string;
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

### SensitiveFile <a name="@cdktf/provider-local.SensitiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/local/r/sensitive_file local_sensitive_file}.

#### Initializers <a name="@cdktf/provider-local.SensitiveFile.Initializer"></a>

```typescript
import { SensitiveFile } from '@cdktf/provider-local'

new SensitiveFile(scope: Construct, id: string, config: SensitiveFileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.parameter.config"></a>

- *Type:* [`@cdktf/provider-local.SensitiveFileConfig`](#@cdktf/provider-local.SensitiveFileConfig)

---

#### Methods <a name="Methods"></a>

##### `resetContent` <a name="@cdktf/provider-local.SensitiveFile.resetContent"></a>

```typescript
public resetContent()
```

##### `resetContentBase64` <a name="@cdktf/provider-local.SensitiveFile.resetContentBase64"></a>

```typescript
public resetContentBase64()
```

##### `resetDirectoryPermission` <a name="@cdktf/provider-local.SensitiveFile.resetDirectoryPermission"></a>

```typescript
public resetDirectoryPermission()
```

##### `resetFilePermission` <a name="@cdktf/provider-local.SensitiveFile.resetFilePermission"></a>

```typescript
public resetFilePermission()
```

##### `resetId` <a name="@cdktf/provider-local.SensitiveFile.resetId"></a>

```typescript
public resetId()
```

##### `resetSource` <a name="@cdktf/provider-local.SensitiveFile.resetSource"></a>

```typescript
public resetSource()
```


#### Properties <a name="Properties"></a>

##### `contentBase64Input`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* `string`

---

##### `contentInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* `string`

---

##### `directoryPermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.directoryPermissionInput"></a>

```typescript
public readonly directoryPermissionInput: string;
```

- *Type:* `string`

---

##### `filenameInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* `string`

---

##### `filePermissionInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.filePermissionInput"></a>

```typescript
public readonly filePermissionInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `sourceInput`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFile.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

---

##### `contentBase64`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

---

##### `directoryPermission`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* `string`

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

---

##### `filePermission`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFile.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-local.SensitiveFile.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### DataLocalFileConfig <a name="@cdktf/provider-local.DataLocalFileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataLocalFileConfig } from '@cdktf/provider-local'

const dataLocalFileConfig: DataLocalFileConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

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

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file#filename DataLocalFile#filename}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file#id DataLocalFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataLocalSensitiveFileConfig <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataLocalSensitiveFileConfig } from '@cdktf/provider-local'

const dataLocalSensitiveFileConfig: DataLocalSensitiveFileConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#filename DataLocalSensitiveFile#filename}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-local.DataLocalSensitiveFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/sensitive_file#id DataLocalSensitiveFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FileConfig <a name="@cdktf/provider-local.FileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileConfig } from '@cdktf/provider-local'

const fileConfig: FileConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

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

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.FileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.


Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#filename File#filename}

---

##### `content`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

Content to store in the file, expected to be an UTF-8 encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#content File#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

Content to store in the file, expected to be binary encoded as base64 string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#content_base64 File#content_base64}

---

##### `directoryPermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* `string`

Permissions to set for directories created (in numeric notation).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#directory_permission File#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* `string`

Permissions to set for the output file (in numeric notation).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#file_permission File#file_permission}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#id File#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitiveContent`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.sensitiveContent"></a>

```typescript
public readonly sensitiveContent: string;
```

- *Type:* `string`

Sensitive content to store in the file, expected to be an UTF-8 encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#sensitive_content File#sensitive_content}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-local.FileConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

Path to file to use as source for the one we are creating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file#source File#source}

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

### SensitiveFileConfig <a name="@cdktf/provider-local.SensitiveFileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SensitiveFileConfig } from '@cdktf/provider-local'

const sensitiveFileConfig: SensitiveFileConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* `string`

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.


Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* `string`

Sensitive content to store in the file, expected to be an UTF-8 encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content SensitiveFile#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* `string`

Sensitive content to store in the file, expected to be binary encoded as base64 string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directoryPermission`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.directoryPermission"></a>

```typescript
public readonly directoryPermission: string;
```

- *Type:* `string`

Permissions to set for directories created (in numeric notation).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.filePermission"></a>

```typescript
public readonly filePermission: string;
```

- *Type:* `string`

Permissions to set for the output file (in numeric notation).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#id SensitiveFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-local.SensitiveFileConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

Path to file to use as source for the one we are creating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#source SensitiveFile#source}

---



