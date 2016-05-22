'use strict'
const independent = require('../dist/index')

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
