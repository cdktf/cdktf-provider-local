# `dataLocalSensitiveFile` Submodule <a name="`dataLocalSensitiveFile` Submodule" id="@cdktf/provider-local.dataLocalSensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalSensitiveFile <a name="DataLocalSensitiveFile" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/data-sources/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFile;

DataLocalSensitiveFile.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | Path to the file that will be read. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/data-sources/sensitive_file#filename DataLocalSensitiveFile#filename}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLocalSensitiveFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFile;

DataLocalSensitiveFile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFile;

DataLocalSensitiveFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFile;

DataLocalSensitiveFile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFile;

DataLocalSensitiveFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataLocalSensitiveFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataLocalSensitiveFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataLocalSensitiveFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataLocalSensitiveFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/data-sources/sensitive_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalSensitiveFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256">contentBase64Sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512">contentBase64Sha512</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1">contentSha1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512">contentSha512</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `contentBase64Sha256`<sup>Required</sup> <a name="contentBase64Sha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha256"></a>

```java
public java.lang.String getContentBase64Sha256();
```

- *Type:* java.lang.String

---

##### `contentBase64Sha512`<sup>Required</sup> <a name="contentBase64Sha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentBase64Sha512"></a>

```java
public java.lang.String getContentBase64Sha512();
```

- *Type:* java.lang.String

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

---

##### `contentSha1`<sup>Required</sup> <a name="contentSha1" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha1"></a>

```java
public java.lang.String getContentSha1();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `contentSha512`<sup>Required</sup> <a name="contentSha512" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.contentSha512"></a>

```java
public java.lang.String getContentSha512();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalSensitiveFileConfig <a name="DataLocalSensitiveFileConfig" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_sensitive_file.DataLocalSensitiveFileConfig;

DataLocalSensitiveFileConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Path to the file that will be read. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-local.dataLocalSensitiveFile.DataLocalSensitiveFileConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Path to the file that will be read.

The data source will return an error if the file does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/data-sources/sensitive_file#filename DataLocalSensitiveFile#filename}

---



