const Configuration = {
  '{packages,libs}/**/*.{ts,js,json,md,css,scss,html,tsx,jsx}': [
    `nx affected --target lint --uncommitted --fix true`,
    'nx affected --target test --uncommitted',
    'nx lint --uncommitted',
  ],
};

module.exports = Configuration;
