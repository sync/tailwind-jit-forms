# tailwind-jit-forms
Sample repro for issues related to parcel 2 and tailwind jit (+ forms)

### How to reproduce issue

```
yarn
yarn dev
```

or

```
yarn
yarn build
```

### Issue

```
🚨 Build failed.

@parcel/transformer-css: Cannot read property 'start' of undefined

  TypeError: Cannot read property 'start' of undefined
  at /Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/@parcel/transformer-css/lib/CSSTransformer.js:213:71
  at walk (/Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss-value-parser/lib/walk.js:7:16)
  at ValueParser.walk (/Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss-value-parser/lib/index.js:18:3)
  at /Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/@parcel/transformer-css/lib/CSSTransformer.js:209:16
  at /Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:72:18
  at /Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:55:18
  at Rule.each (/Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:41:16)
  at Rule.walk (/Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:52:17)
  at /Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:60:24
  at Root.each (/Users/anthonymittaz/Projects/Parcel/tailwind-jit-forms/node_modules/postcss/lib/container.js:41:16)
```
