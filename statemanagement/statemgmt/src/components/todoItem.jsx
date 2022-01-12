import React from "react"

export const TodoItem = ({title,status,id})=>{
    console.log(id)
return (
<>
<div>
    {title} -- {status ? "done" : "not  done"}
</div>
</>
)
}