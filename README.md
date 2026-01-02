# First steps for setup

First clone this repo,
then go into its root path from your cli,
then run:

```bash
npm pkg set name=$(basename $(pwd))
npm run update-packages
```

# How to use

> npm run [script]

for any script in package.json

# To update npm dependencies

```bash
npm run update-packages
```

# For images added in html or javascript

```bash
npm install --save-dev html-loader
```

add the following to your webpack.common.js > module > rules:

```bash
{
    test: /\.html$/i,
    loader: "html-loader",
},
{
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
},
```
