const fs = require('fs');

function bumpVersionMajor() {
  const registry = fs.readFileSync('registry.json', 'utf8');
  const registryJson = JSON.parse(registry);
  const version = registryJson.version;
  const versionArray = version.split('.');
  versionArray[0] = parseInt(versionArray[0]) + 1;
  versionArray[1] = 0;
  const versionToStore = versionArray.join('.');
  registryJson.version = versionToStore;
  fs.writeFileSync('registry.json', JSON.stringify(registryJson));
}

bumpVersionMajor();
