const crypto = require('crypto');
const fs = require('fs');

function serialize(obj) {
  if (Array.isArray(obj)) {
    return `[${obj.map((el) => serialize(el)).join(',')}]`;
  } else if (typeof obj === 'object' && obj !== null) {
    let acc = '';
    const keys = Object.keys(obj).sort();
    acc += `{${JSON.stringify(keys)}`;
    for (let i = 0; i < keys.length; i++) {
      acc += `${serialize(obj[keys[i]])},`;
    }
    return `${acc}}`;
  }

  return `${JSON.stringify(obj)}`;
}

/**
 * Creates hash of given JSON object.
 *
 * @param {Object} obj JSON object
 * @param {String} hashAlgorithm hash algorithm (e.g. SHA256)
 * @param {String} encoding hash encoding (e.g. base64) or none for buffer
 * @see #serialize
 */
function digest(obj, hashAlgorithm, encoding) {
  const hash = crypto.createHash(hashAlgorithm);
  return hash.update(serialize(obj)).digest(encoding);
}

function getDependenciesChecksum() {
  const data = fs.readFileSync('package.json', 'utf8');
  const packageJson = JSON.parse(data);
  const generateChecksumFor = {
    dependencies: packageJson.dependencies,
    devDependencies: packageJson.devDependencies,
  };

  const checksum = digest(generateChecksumFor, 'md5', 'hex');
  console.log('checksum: ', checksum);
  return checksum;
}

function storeChecksum(checksum) {
  const registry = fs.readFileSync('build_cache/registry.json', 'utf8');
  const registryJson = JSON.parse(registry);
  registryJson.dependenciesChecksum = checksum;
  fs.writeFileSync('build_cache/registry.json', JSON.stringify(registryJson));
}

module.exports = getDependenciesChecksum;
