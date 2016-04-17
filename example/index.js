'use strict'
const independent = require('..')

independent({
  code: "require('./bar')",
  path: __filename,
})
.then(result => console.log(result))

independent({
  code: "import sum from './foo/sum'",
  path: __filename,
})
.then(result => console.log(result))
