const fs = require('fs');

function bumpVersionMinor() {
  const registry = fs.readFileSync('registry.json', 'utf8');
  const registryJson = JSON.parse(registry);
  const version = registryJson.version;
  const versionArray = version.split('.');
  versionArray[1] = parseInt(versionArray[1]) + 1;
  const versionToStore = versionArray.join('.');
  registryJson.version = versionToStore;
  fs.writeFileSync('registry.json', JSON.stringify(registryJson));
}

bumpVersionMinor();
