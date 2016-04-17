'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const fs = require('fs')
const path = require('path')
const independent = require('.')

describe('independent', () => {
  it('should replace relative require path with package name', () => {
    const filePath = path.resolve(__dirname, './test/require-example/example.js')
    return independent({
      code: fs.readFileSync(filePath, 'utf8'),
      path: filePath,
    })
      .then(icode => {
        expect(icode).to.eq([
          '\'use strict\'',
          "require('other-package')",
          "require('foo-bar/qar')",
          "const fooBar = require('foo-bar')",
          'console.log(fooBar)',
          '',
        ].join('\n'))
      })
  })

  it('should replace relative import path with package name', () => {
    const filePath = path.resolve(__dirname, './test/import-example/example.js')
    return independent({
      code: fs.readFileSync(filePath, 'utf8'),
      path: filePath,
    })
      .then(icode => {
        expect(icode).to.eq([
          "import fooBar from 'foo-bar'",
          'console.log(fooBar)',
          '',
        ].join('\n'))
      })
  })
})
