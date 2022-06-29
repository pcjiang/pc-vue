/**
 * 深拷贝
 */

const obj1 = {
    age: 20,
    name: 'zhangsan',
    address: {
        city: 'wuhan'
    },
    arr: ['a', 'b', 'c'] 
}
const obj2 = deepClone(obj1)
console.log(obj2)
obj2.name = 'lisi'
console.log(obj1.name)
/**
 * @param {object}  要拷贝的对象
 */

function deepClone ( obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  //判断obj是值类型还是引用类型
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}