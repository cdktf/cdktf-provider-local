/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: false,
  terraformProvider: "hashicorp/local@~> 2.1",
  cdktfVersion: "^0.19.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "^5.0.1",
  devDeps: ["@cdktf/provider-project@^0.3.0"],
});

project.synth();
