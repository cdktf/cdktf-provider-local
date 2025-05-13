# `sensitiveFile` Submodule <a name="`sensitiveFile` Submodule" id="@cdktf/provider-local.sensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveFile <a name="SensitiveFile" id="@cdktf/provider-local.sensitiveFile.SensitiveFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFile;

SensitiveFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .filename(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .directoryPermission(java.lang.String)
//  .filePermission(java.lang.String)
//  .source(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.directoryPermission">directoryPermission</a></code> | <code>java.lang.String</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filePermission">filePermission</a></code> | <code>java.lang.String</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Path to file to use as source for the one we are creating. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#content SensitiveFile#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.contentBase64"></a>

- *Type:* java.lang.String

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directoryPermission`<sup>Optional</sup> <a name="directoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.directoryPermission"></a>

- *Type:* java.lang.String

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="filePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.filePermission"></a>

- *Type:* java.lang.String

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#source SensitiveFile#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission">resetDirectoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission">resetFilePermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetContentBase64"></a>

```java
public void resetContentBase64()
```

##### `resetDirectoryPermission` <a name="resetDirectoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission"></a>

```java
public void resetDirectoryPermission()
```

##### `resetFilePermission` <a name="resetFilePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetFilePermission"></a>

```java
public void resetFilePermission()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.resetSource"></a>

```java
public void resetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SensitiveFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFile;

SensitiveFile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFile;

SensitiveFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFile;

SensitiveFile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFile;

SensitiveFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SensitiveFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SensitiveFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SensitiveFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SensitiveFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SensitiveFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256">contentBase64Sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512">contentBase64Sha512</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1">contentSha1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512">contentSha512</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input">contentBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput">directoryPermissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput">filePermissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission">directoryPermission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission">filePermission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentBase64Sha256`<sup>Required</sup> <a name="contentBase64Sha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256"></a>

```java
public java.lang.String getContentBase64Sha256();
```

- *Type:* java.lang.String

---

##### `contentBase64Sha512`<sup>Required</sup> <a name="contentBase64Sha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512"></a>

```java
public java.lang.String getContentBase64Sha512();
```

- *Type:* java.lang.String

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

---

##### `contentSha1`<sup>Required</sup> <a name="contentSha1" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha1"></a>

```java
public java.lang.String getContentSha1();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `contentSha512`<sup>Required</sup> <a name="contentSha512" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentSha512"></a>

```java
public java.lang.String getContentSha512();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input"></a>

```java
public java.lang.String getContentBase64Input();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `directoryPermissionInput`<sup>Optional</sup> <a name="directoryPermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput"></a>

```java
public java.lang.String getDirectoryPermissionInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `filePermissionInput`<sup>Optional</sup> <a name="filePermissionInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput"></a>

```java
public java.lang.String getFilePermissionInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `directoryPermission`<sup>Required</sup> <a name="directoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission"></a>

```java
public java.lang.String getDirectoryPermission();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `filePermission`<sup>Required</sup> <a name="filePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.filePermission"></a>

```java
public java.lang.String getFilePermission();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveFileConfig <a name="SensitiveFileConfig" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.sensitive_file.SensitiveFileConfig;

SensitiveFileConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .filename(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .directoryPermission(java.lang.String)
//  .filePermission(java.lang.String)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | The path to the file that will be created. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content">content</a></code> | <code>java.lang.String</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission">directoryPermission</a></code> | <code>java.lang.String</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission">filePermission</a></code> | <code>java.lang.String</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source">source</a></code> | <code>java.lang.String</code> | Path to file to use as source for the one we are creating. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#filename SensitiveFile#filename}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#content SensitiveFile#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `directoryPermission`<sup>Optional</sup> <a name="directoryPermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission"></a>

```java
public java.lang.String getDirectoryPermission();
```

- *Type:* java.lang.String

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `filePermission`<sup>Optional</sup> <a name="filePermission" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission"></a>

```java
public java.lang.String getFilePermission();
```

- *Type:* java.lang.String

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-local.sensitiveFile.SensitiveFileConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/resources/sensitive_file#source SensitiveFile#source}

---



