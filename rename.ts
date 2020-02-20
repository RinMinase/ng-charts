const version = process.env.npm_package_version;

require('fs').rename('dist.zip', `ng-charts-${version}-dist.zip`, () => {})