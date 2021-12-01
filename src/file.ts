// https://www.terraform.io/docs/providers/local/r/file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content File#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#content_base64 File#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Permissions to set for directories created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#directory_permission File#directory_permission}
  */
  readonly directoryPermission?: string;
  /**
  * Permissions to set for the output file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#file_permission File#file_permission}
  */
  readonly filePermission?: string;
  /**
  * Path to the output file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#filename File#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#sensitive_content File#sensitive_content}
  */
  readonly sensitiveContent?: string;
  /**
  * Path to file to use as source for content of output file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/r/file.html#source File#source}
  */
  readonly source?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/local/r/file.html local_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "local_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/local/r/file.html local_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'local_file',
      terraformGeneratorMetadata: {
        providerName: 'local'
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
    this._sensitiveContent = config.sensitiveContent;
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

  // sensitive_content - computed: false, optional: true, required: false
  private _sensitiveContent?: string; 
  public get sensitiveContent() {
    return this.getStringAttribute('sensitive_content');
  }
  public set sensitiveContent(value: string) {
    this._sensitiveContent = value;
  }
  public resetSensitiveContent() {
    this._sensitiveContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveContentInput() {
    return this._sensitiveContent;
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
      sensitive_content: cdktf.stringToTerraform(this._sensitiveContent),
      source: cdktf.stringToTerraform(this._source),
    };
  }
}
