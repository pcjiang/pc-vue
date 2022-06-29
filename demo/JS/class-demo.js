class Student {
  constructor (name , number) {
    this.name = name 
    this.number = number
  }
  eat() {
    console.log('吃东西')
  }
}

let zhangsan = new Student('张三', 11)
console.log(zhangsan)
/**
 * 手写jQuery
 * 
 */
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
  }
  get(index) {
    return this[index]
  }
}
jQuery.prototype.alert = function (msg) {
  alert(msg)
}
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  addclass (className) {
    alert(className)
  }
}