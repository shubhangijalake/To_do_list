import React, { useState } from 'react'

const TodoList = () => {
    const[activity, setActivity]= useState("")
    const[listData, setListData]= useState([])

    function addActivity(){
        // setListData([...listData, activity])     //this code works asynchronously
        // console.log(listData)

        setListData((listData) =>{
            const updatedList=[...listData, activity]
            console.log(updatedList)
            setActivity('')
            return updatedList
        })
    }

    function removeActivity(i){
        const updatedListData=listData.filter((el, id)=>{
            return i!=id;
        })
           setListData(updatedListData)
    }

    function removeAll(){
        setListData([])
    }

  return (
    <>
    <div className='container'>
        <div className='header'> TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add </button>

        <p>Here is your list</p>
       
         {listData!=[] && listData.map((data, i) =>{
            return(
                <>
                <p key={i}>
                   <div >{data}</div>
                   <div><button onClick={()=>removeActivity(i)}>Remove</button></div>
                   </p>
                </>
            )
               
           })}

           {listData.length>=1 && 
           <button onClick={removeAll}>Remove All</button>}
       
    </div>
    
    
    </>
  )
}

export default TodoList