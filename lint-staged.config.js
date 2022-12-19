const Configuration = {
  '{packages,libs}/**/*.{ts,js,json,md,css,scss,html}': [
    `nx affected --target lint --uncommitted --fix true`,
    'nx affected --target test --uncommitted',
    'nx lint --uncommitted',
  ],
}

module.exports = Configuration
