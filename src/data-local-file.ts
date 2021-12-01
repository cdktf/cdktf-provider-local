// https://www.terraform.io/docs/providers/local/d/file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLocalFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the output file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/local/d/file.html#filename DataLocalFile#filename}
  */
  readonly filename: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/local/d/file.html local_file}
*/
export class DataLocalFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "local_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/local/d/file.html local_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLocalFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataLocalFileConfig) {
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
    this._filename = config.filename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_base64 - computed: true, optional: false, required: false
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filename: cdktf.stringToTerraform(this._filename),
    };
  }
}
