import React, { useState } from 'react'

function Box() {
    const boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const [redBoxes, setRedBoxes] = useState([])

    const boxesEl = document.getElementsByClassName("box")

    const handleClick = (e) => {
        let currentId = e.target.id
        let tempId
        setRedBoxes(prev => [...prev, currentId])

        if(redBoxes.length <= 1){
            boxesEl[currentId-1].style.backgroundColor = "red";
            console.log(redBoxes.length)
        }  
        else {
            tempId = redBoxes[0]
            setRedBoxes(prev => {
                return prev.filter((item,ind) => {
                    return ind !== 0
                 })
            }    
            )
            boxesEl[tempId-1].style.backgroundColor = "blue";
            boxesEl[currentId-1].style.backgroundColor = "red";
        }
    }

  return (
    <div className="container">
        
        {boxes.map(box => 
          <div key={box} id={box} className="box" onClick={handleClick}></div>
        )}
      </div>
  )
}

export default Box