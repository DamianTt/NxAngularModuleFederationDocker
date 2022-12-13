# https://gist.github.com/codezninja/c227d9c65b09d2be2d99abbfcfa8774a
# https://gist.github.com/DarrenN/8c6a5b969481725a4413

packageChecksum=($(md5sum package.json | cut -d ' ' -f 1))

cachedChecksum="$(jq -r '.packageChecksum' build-pipeline/registry.json)"

# remove leading whitespace characters
cachedChecksum="${cachedChecksum#"${cachedChecksum%%[![:space:]]*}"}"
# remove trailing whitespace characters
cachedChecksum="${cachedChecksum%"${cachedChecksum##*[![:space:]]}"}"

version="$(jq -r '.version' build-pipeline/registry.json)"
echo "Current version: ${version}"

# Build array from version string.
a=(${version//./ })

major=${a[0]}
# remove leading whitespace characters
major="${major#"${major%%[![:space:]]*}"}"
# remove trailing whitespace characters
major="${major%"${major##*[![:space:]]}"}"

minor=${a[1]}
# remove leading whitespace characters
minor="${minor#"${minor%%[![:space:]]*}"}"
# remove trailing whitespace characters
minor="${minor%"${minor##*[![:space:]]}"}"

if [[ "$packageChecksum" == "$cachedChecksum" ]]; then
    echo "package.json hasn't changed, bump minor version"
    # Bump minor
    ((minor++))
else
    echo "package.json has changed, build new dependencies image and bump major version"
    # Bump major
    ((major++))
    minor=0
    contents="$(jq --arg a "$packageChecksum" '.packageChecksum = $a' build-pipeline/registry.json)" &&
        echo -E "${contents}" >build-pipeline/registry.json
fi

bumpedVersion="${major}.${minor}"
echo "Bumped version: ${bumpedVersion}"

contents="$(jq --arg a "$bumpedVersion" '.version = $a' build-pipeline/registry.json)" &&
    echo -E "${contents}" >build-pipeline/registry.json
