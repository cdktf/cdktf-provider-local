// https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/sensitive_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLocalSensitiveFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the file that will be read. The data source will return an error if the file does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/sensitive_file#filename DataLocalSensitiveFile#filename}
  */
  readonly filename: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/sensitive_file local_sensitive_file}
*/
export class DataLocalSensitiveFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "local_sensitive_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLocalSensitiveFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLocalSensitiveFile to import
  * @param importFromId The id of the existing DataLocalSensitiveFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/sensitive_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLocalSensitiveFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "local_sensitive_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/local/2.5.3/docs/data-sources/sensitive_file local_sensitive_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLocalSensitiveFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataLocalSensitiveFileConfig) {
    super(scope, id, {
      terraformResourceType: 'local_sensitive_file',
      terraformGeneratorMetadata: {
        providerName: 'local',
        providerVersion: '2.5.3',
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

  // content_base64sha256 - computed: true, optional: false, required: false
  public get contentBase64Sha256() {
    return this.getStringAttribute('content_base64sha256');
  }

  // content_base64sha512 - computed: true, optional: false, required: false
  public get contentBase64Sha512() {
    return this.getStringAttribute('content_base64sha512');
  }

  // content_md5 - computed: true, optional: false, required: false
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_sha1 - computed: true, optional: false, required: false
  public get contentSha1() {
    return this.getStringAttribute('content_sha1');
  }

  // content_sha256 - computed: true, optional: false, required: false
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }

  // content_sha512 - computed: true, optional: false, required: false
  public get contentSha512() {
    return this.getStringAttribute('content_sha512');
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

  // id - computed: true, optional: false, required: false
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
