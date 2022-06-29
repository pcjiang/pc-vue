Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.call(arguments)
  const t = args.shift()
  const self = this
  return function () {
    return self.apply(t, args)
  }
}
/**
 * 闭包
 */
// 函数作为返回值
function create() {
  const a = 100
  return function () {
    console.log(a)
  }
} 
const fn = create()
const a = 200
fn()
  