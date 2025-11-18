# `dataLocalCommand` Submodule <a name="`dataLocalCommand` Submodule" id="@cdktf/provider-local.dataLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLocalCommand <a name="DataLocalCommand" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommand;

DataLocalCommand.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(java.lang.String)
//  .allowNonZeroExitCode(java.lang.Boolean|IResolvable)
//  .arguments(java.util.List<java.lang.String>)
//  .stdin(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.command">command</a></code> | <code>java.lang.String</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.stdin">stdin</a></code> | <code>java.lang.String</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.command"></a>

- *Type:* java.lang.String

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.allowNonZeroExitCode"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.arguments"></a>

- *Type:* java.util.List<java.lang.String>

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.stdin"></a>

- *Type:* java.lang.String

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.Initializer.parameter.workingDirectory"></a>

- *Type:* java.lang.String

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowNonZeroExitCode` <a name="resetAllowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetAllowNonZeroExitCode"></a>

```java
public void resetAllowNonZeroExitCode()
```

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetStdin` <a name="resetStdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetStdin"></a>

```java
public void resetStdin()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
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

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommand;

DataLocalCommand.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommand;

DataLocalCommand.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommand;

DataLocalCommand.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommand;

DataLocalCommand.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataLocalCommand.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataLocalCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataLocalCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataLocalCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode">exitCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr">stderr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout">stdout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput">allowNonZeroExitCodeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput">commandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput">stdinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command">command</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin">stdin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.exitCode"></a>

```java
public java.lang.Number getExitCode();
```

- *Type:* java.lang.Number

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stderr"></a>

```java
public java.lang.String getStderr();
```

- *Type:* java.lang.String

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdout"></a>

```java
public java.lang.String getStdout();
```

- *Type:* java.lang.String

---

##### `allowNonZeroExitCodeInput`<sup>Optional</sup> <a name="allowNonZeroExitCodeInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCodeInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCodeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.commandInput"></a>

```java
public java.lang.String getCommandInput();
```

- *Type:* java.lang.String

---

##### `stdinInput`<sup>Optional</sup> <a name="stdinInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdinInput"></a>

```java
public java.lang.String getStdinInput();
```

- *Type:* java.lang.String

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `allowNonZeroExitCode`<sup>Required</sup> <a name="allowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.allowNonZeroExitCode"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.stdin"></a>

```java
public java.lang.String getStdin();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommand.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLocalCommandConfig <a name="DataLocalCommandConfig" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.local.data_local_command.DataLocalCommandConfig;

DataLocalCommandConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(java.lang.String)
//  .allowNonZeroExitCode(java.lang.Boolean|IResolvable)
//  .arguments(java.util.List<java.lang.String>)
//  .stdin(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command">command</a></code> | <code>java.lang.String</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin">stdin</a></code> | <code>java.lang.String</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.allowNonZeroExitCode"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.stdin"></a>

```java
public java.lang.String getStdin();
```

- *Type:* java.lang.String

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktf/provider-local.dataLocalCommand.DataLocalCommandConfig.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}

---



