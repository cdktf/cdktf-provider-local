/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLocalCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates that the command returning a non-zero exit code should be treated as a successful execution. Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#allow_non_zero_exit_code DataLocalCommand#allow_non_zero_exit_code}
  */
  readonly allowNonZeroExitCode?: boolean | cdktf.IResolvable;
  /**
  * Arguments to be passed to the given command. Any `null` arguments will be removed from the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#arguments DataLocalCommand#arguments}
  */
  readonly arguments?: string[];
  /**
  * Executable name to be discovered on the PATH or absolute path to executable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#command DataLocalCommand#command}
  */
  readonly command: string;
  /**
  * Data to be passed to the given command's standard input as a UTF-8 string. [Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#stdin DataLocalCommand#stdin}
  */
  readonly stdin?: string;
  /**
  * The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. If not provided, defaults to the Terraform working directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#working_directory DataLocalCommand#working_directory}
  */
  readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command}
*/
export class DataLocalCommand extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "local_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLocalCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLocalCommand to import
  * @param importFromId The id of the existing DataLocalCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLocalCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "local_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/local/2.6.1/docs/data-sources/command local_command} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLocalCommandConfig
  */
  public constructor(scope: Construct, id: string, config: DataLocalCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'local_command',
      terraformGeneratorMetadata: {
        providerName: 'local',
        providerVersion: '2.6.1',
        providerVersionConstraint: '~> 2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNonZeroExitCode = config.allowNonZeroExitCode;
    this._arguments = config.arguments;
    this._command = config.command;
    this._stdin = config.stdin;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_non_zero_exit_code - computed: false, optional: true, required: false
  private _allowNonZeroExitCode?: boolean | cdktf.IResolvable; 
  public get allowNonZeroExitCode() {
    return this.getBooleanAttribute('allow_non_zero_exit_code');
  }
  public set allowNonZeroExitCode(value: boolean | cdktf.IResolvable) {
    this._allowNonZeroExitCode = value;
  }
  public resetAllowNonZeroExitCode() {
    this._allowNonZeroExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonZeroExitCodeInput() {
    return this._allowNonZeroExitCode;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // exit_code - computed: true, optional: false, required: false
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // stderr - computed: true, optional: false, required: false
  public get stderr() {
    return this.getStringAttribute('stderr');
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: string; 
  public get stdin() {
    return this.getStringAttribute('stdin');
  }
  public set stdin(value: string) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // stdout - computed: true, optional: false, required: false
  public get stdout() {
    return this.getStringAttribute('stdout');
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_non_zero_exit_code: cdktf.booleanToTerraform(this._allowNonZeroExitCode),
      arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arguments),
      command: cdktf.stringToTerraform(this._command),
      stdin: cdktf.stringToTerraform(this._stdin),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_non_zero_exit_code: {
        value: cdktf.booleanToHclTerraform(this._allowNonZeroExitCode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arguments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arguments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stdin: {
        value: cdktf.stringToHclTerraform(this._stdin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
