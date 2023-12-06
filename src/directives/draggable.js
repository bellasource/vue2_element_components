let disX = 0
let disY = 0
let el = null

const mouseDownBack = (e) => {
  // 记录当前的left、top值
  disX = e.pageX - el.offsetLeft
  disY = e.pageY - el.offsetTop
  // 鼠标移动
  document.addEventListener('mousemove', moveMoveBack)
  document.addEventListener('mouseup', moveUpBack)
  document.onmouseup = _ => {
    document.onmousemove = document.onmouseup = null
  }
}
// 鼠标移动事件
function moveMoveBack(e) {
  let x = e.pageX - disX
  let y = e.pageY - disY

  // 临界值处理
  const width = Math.floor(el.offsetWidth / 2)
  const height = Math.floor(el.offsetHeight / 2)
  const maxX = document.body.clientWidth - width
  const maxY = document.body.clientHeight - height

  if (x < 0) {
    x = 0
  } else if (x > maxX) {
    x = maxX
  }

  if (y < 0) {
    y = 0
  } else if (y > maxY) {
    y = maxY
  }

  el.style.left = `${x}px`
  el.style.top = `${y}px`
}
// 移除鼠标移动，抬起事件监听
function moveUpBack(e) {
  document.removeEventListener('mouseup', moveUpBack)
  document.removeEventListener('mousemove', moveMoveBack)
}

const draggable = {
  inserted: (elm) => {
    el = elm
    el.style.cursor = 'move'
    el.addEventListener('mousedown', mouseDownBack)
  },
  unbind() {
    moveUpBack()
    el.removeEventListener('mousedown', mouseDownBack)
  }
}
export default draggable
