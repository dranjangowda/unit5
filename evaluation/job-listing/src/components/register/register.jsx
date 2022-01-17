import REACT,{useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { regFailure,regRequest,regSuccess } from "../../ redux/register/action";
import {useNavigate,Link} from "react-router-dom"

export const Register = () =>{

    const [form,setForm] = useState({})
    const {isLoading,message,isError} =  useSelector(state => state.regState)
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const handleChange=(e)=>{

    }
    return (
        <div className="register">
            <h6>{message}</h6>
            <form method="POST" className="form">
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="name" name="name" onChange={(e)=>handleChange(e)}/>
                <button>Register</button>
            </form>
        </div>
    )
}
