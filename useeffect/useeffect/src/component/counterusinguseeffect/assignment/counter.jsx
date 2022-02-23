import React, {useEffect, useState} from 'react'

const Timer = ({start, end}) => {

  
    const [counter, setCounter] = useState(start)

    useEffect(() => {

        let time = setInterval(() => {
            setCounter((p) => {
                if(p === end){
                    clearInterval(time)
                    return end
                }else {
                    return p + 1
                }
            })
        },1000)

        return () => {
            clearInterval(time)
        }

    },[])

    return (
        <div>
            <h1>Timer will start at 0th second and it will end at 10th second</h1>
            <h2>Counter is : {counter}</h2>
        </div>
    )
}

export default Timer
