import React from 'react'
import './App.css'

import { useState } from 'react'

const App = () => {

const[num, setNum] = useState(0)
const[text, setText] = useState('')
const[img, setImg] = useState(false)
const[open, setOpen] = useState('Открыть')



const change = () => {
setImg (!img)
setOpen(img ? 'ОТКРЫТЬ' : 'ЗАКРЫТЬ')
}


console.log(num);



  return (
   <>
<div className="box">
  <button onClick={change}>{open} ФОТО</button>
  {img && <img src="https://tengrinews.kz/userdata/news/2021/news_454230/thumb_b/photo_380266.jpeg" alt="" />}
  
</div>



   <div className="box">
    <h4>{text}</h4>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
   </div>
   <div className="box">
    <h4 >{num}</h4>
    <button onClick={() => setNum(num + 1)}>Добавить число</button>
    <button onClick={() => setNum(num - 1)}>Уменьшить  число</button>
    <button onClick={() => setNum(num * 2)}>Удвоить число</button>
    <button onClick={() => setNum(num / 2)}>Разделить число</button>
    <button onClick={() => setNum(num * 0)}>Обнулить  число</button>
   </div>
   
   </>
  )
}

export default App