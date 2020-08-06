import React from 'react'
import ReactDom from 'react-dom'
// const app=<h1>22222</h1>
const App=(props)=>{
  
return <h1>12313123{props.title}</h1>
}
// const app=creatApp(
//     {
//         title:'wwerwere'
//     }
// )
ReactDom.render(
    <App title="1111"></App>,
    document.querySelector('#root')
)