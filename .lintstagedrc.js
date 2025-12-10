module.exports = {
  "*.ts?(x)": (files) => [
    "tsc -p tsconfig.json --noEmit",
    `eslint --fix --format stylish ${files.join(" ")} --cache --cache-strategy content`,
  ],
  'package.json': 'eslint --fix --format stylish --cache --cache-strategy content',
  "*.{ts?(x),md,json,yml}": (files) =>
    `prettier --write ${files.join(" ")} --cache --cache-strategy content`,
  '*.{css,scss,module.css,module.scss}': `stylelint --fix --cache --cache-strategy metadata`,
};
