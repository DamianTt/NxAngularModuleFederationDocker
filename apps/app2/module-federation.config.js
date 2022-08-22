module.exports = {
  name: 'app2',
  exposes: {
    './Module': 'apps/app2/src/app/remote-entry/entry.module.ts',
  },
};
