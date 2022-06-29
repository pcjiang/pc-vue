function loadImg(src) {
  return new Promise(
    (resolve, reject) =>{
      const img = document.caretElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        reject(new Error(`图片加载失败 ${src}`))
      }
      img.src = src
    }
  )
}