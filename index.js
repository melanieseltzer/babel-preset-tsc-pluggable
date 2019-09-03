const validateOpt = (name, val, defaultVal = true) => {
  if (typeof val === 'undefined') return defaultVal;

  if (typeof val !== 'boolean') {
    throw new Error(`babel-preset-ms: '${name}' option must be a boolean.`);
  }

  return val;
};

module.exports = (_, opts = {}) => {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  const isDevelopment = env === 'development';

  const isMREnabled = validateOpt('moduleResolver', opts.moduleResolver);
  const isPTEnabled = validateOpt('proptypes', opts.proptypes);
  const isSCEnabled = validateOpt('styledComponents', opts.styledComponents);

  const plugins = [
    isMREnabled && [
      require('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          components: './src/components'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    isDevelopment &&
      isPTEnabled && [
        require('babel-plugin-typescript-to-proptypes'),
        { maxSize: 0 }
      ],
    isSCEnabled && [require('babel-plugin-styled-components')]
  ].filter(Boolean);

  return {
    plugins
  };
};
