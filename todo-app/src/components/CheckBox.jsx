import React, { useState } from 'react'

const CheckBox = ({todos, index, setTodos}) => {

    

    const handleCheck = (event) =>{
        let isCheck =  event.target.checked;
        console.log('작동',isCheck,index);
        console.log(todos);
        
            if(isCheck){
                let newList= todos.map((item,idx)=>
                    {   if(idx==index){
                        item = <del>{item}</del>
                    }
                        return item});
                setTodos(newList);
                
                
                
            }else{
                let newList= todos.map((item,idx)=>
                    {   if(idx==index){
                        item = item.props.children;
                        
                    }
                        return item});
                setTodos(newList);
            }
    }


    return (
        <span>
            <input type="checkbox" onClick={handleCheck}/>
        </span>
    )
}

export default CheckBox