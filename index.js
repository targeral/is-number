'use strict'

const isNumber = (num) => {
  let type = typeof num
  let ret = true

  if (type === 'string' && num.trim() === '') {
    ret = false
  } else if (type !== 'string' && type !== 'number') {
    ret = false
  } else {
    ret = (num - num + 1) === 1
  }

  return ret
}

module.exports = isNumber
