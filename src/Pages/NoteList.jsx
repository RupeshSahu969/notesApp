import React from 'react'
import "./Register.css";
const NoteList = () => {
    var arr1 = JSON.parse(localStorage.getItem("notes")) || [];

    console.log(arr1)
    const handleDelete = (item, index) => {
        arr1.splice(index, 1);
    
        localStorage.setItem("notes", JSON.stringify(arr1));
        window.location.reload();
      };


  return (
    <div>
{arr1.map((item,index) => 
    <div className="card"> 
    <div key={item.id} className='card-body'> 
    <strong className='card-title'>{item.title} </strong>
    <p className='card-text'>{item.desc} </p>
    <p  className='card-text'>{item.date} </p>
    <button onClick={() => handleDelete(item,index)} >Delete</button>
     </div>
    
     </div>
)}
    </div>
  )
}

export default NoteList