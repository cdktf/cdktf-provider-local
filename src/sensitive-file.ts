// https://www.terraform.io/docs/providers/local/r/sensitive_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sensitive content to store in the file, expected to be an UTF-8 encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content SensitiveFile#content}
  */
  readonly content?: string;
  /**
  * Sensitive content to store in the file, expected to be binary encoded as base64 string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#content_base64 SensitiveFile#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Permissions to set for directories created (in numeric notation).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#directory_permission SensitiveFile#directory_permission}
  */
  readonly directoryPermission?: string;
  /**
  * Permissions to set for the output file (in numeric notation).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#file_permission SensitiveFile#file_permission}
  */
  readonly filePermission?: string;
  /**
  * 
					The path to the file that will be created.
					Missing parent directories will be created.
					If the file already exists, it will be overridden with the given content.
				
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#filename SensitiveFile#filename}
  */
  readonly filename: string;
  /**
  * Path to file to use as source for the one we are creating.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/sensitive_file#source SensitiveFile#source}
  */
  readonly source?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/local/r/sensitive_file local_sensitive_file}
*/
export class SensitiveFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "local_sensitive_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/local/r/sensitive_file local_sensitive_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveFileConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveFileConfig) {
    super(scope, id, {
      terraformResourceType: 'local_sensitive_file',
      terraformGeneratorMetadata: {
        providerName: 'local',
        providerVersion: '2.2.2',
        providerVersionConstraint: '~> 2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._directoryPermission = config.directoryPermission;
    this._filePermission = config.filePermission;
    this._filename = config.filename;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // directory_permission - computed: false, optional: true, required: false
  private _directoryPermission?: string; 
  public get directoryPermission() {
    return this.getStringAttribute('directory_permission');
  }
  public set directoryPermission(value: string) {
    this._directoryPermission = value;
  }
  public resetDirectoryPermission() {
    this._directoryPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPermissionInput() {
    return this._directoryPermission;
  }

  // file_permission - computed: false, optional: true, required: false
  private _filePermission?: string; 
  public get filePermission() {
    return this.getStringAttribute('file_permission');
  }
  public set filePermission(value: string) {
    this._filePermission = value;
  }
  public resetFilePermission() {
    this._filePermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePermissionInput() {
    return this._filePermission;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      directory_permission: cdktf.stringToTerraform(this._directoryPermission),
      file_permission: cdktf.stringToTerraform(this._filePermission),
      filename: cdktf.stringToTerraform(this._filename),
      source: cdktf.stringToTerraform(this._source),
    };
  }
}
