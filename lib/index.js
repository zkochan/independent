'use strict'
module.exports = independent

const path = require('path')
const resolve = require('resolve')
const relative = require('relative')
const readPkgUp = require('read-pkg-up')
const asyncReplace = require('@zkochan/async-replace')

function independent (opts) {
  opts = opts || {}

  if (!opts.code) throw new Error('opts.code is required')

  if (!opts.path) throw new Error('opts.path is required')

  const basedir = path.dirname(opts.path)

  return asyncReplace(opts.code, /(require\(['"]| from ['"])(\.[a-zA-Z0-9\-_\/\.]*)(['"])/g, requireReplacer)

  function requireReplacer (match, requireOpen, relativePath, requireClose) {
    const absolutePath = resolvePath(relativePath)

    return readPkgUp({cwd: absolutePath})
      .then(result => {
        if (!result.pkg) return match

        const externalPath = getExternalPath({
          pkg: result.pkg,
          pkgRoot: path.dirname(result.path),
          filePath: absolutePath,
        })
        return requireOpen + externalPath + requireClose
      })
  }

  function resolvePath (requirePath) {
    return resolve.sync(requirePath, { basedir })
  }
}

function getExternalPath (opts) {
  const mainPath = path.resolve(opts.pkgRoot, opts.pkg.main || './index.js')

  if (mainPath === opts.filePath) return opts.pkg.name

  return opts.pkg.name + '/' + noExt(relative(opts.pkgRoot, opts.filePath))
}

function noExt (filePath) {
  return filePath.replace(/\.js$/, '')
}
