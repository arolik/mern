import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { checkIsAuth, registerUser } from "../redux/authSlice";

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuth = useAppSelector(checkIsAuth);
    const status = useAppSelector(state => state.authSlice.status);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    

    useEffect(() => {
        if(isAuth){
            navigate('/')
        }
    }, [isAuth, navigate])

    function handdleSubmit () {
        try {
            dispatch(registerUser({username, password}))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 w-11/12 mx-auto mt-8 flex flex-col bg-amber-200 p-10" onSubmit={(e) => e.preventDefault() }>
            <h3 className="text-lg text-center font-medium">Registration</h3>
            {!isAuth && <p className="text-red-500 text-center">{status}</p>}
            <label className="text-sm text-amber-950">
                Login:
            <input type="text" placeholder="login" 
            className="mt-1 w-full border py-2 px-2 outline-none bg-gray-200 focus:bg-gray-50" 
            defaultValue={username}
            onChange={(e) => {setUsername(e.target.value)}}
            />
            </label>
            <label className="text-sm text-amber-950">
                Password:
            <input type="password" placeholder="password" 
            className="mt-1 w-full border py-2 px-2 outline-none bg-gray-200 focus:bg-gray-50"
            defaultValue={password}
            autoComplete="on"
            onChange={(e) => {setPassword(e.target.value)}}
            />
            </label>
            <div className="mt-4 text-sm flex flex-row justify-center gap-8">
                <button 
                className="flex items-center py-2 px-6 rounded-lg bg-teal-600 border hover:bg-teal-700 hover:text-red outline-none"
                onClick={handdleSubmit}
                >
                    Register
                </button>
                <NavLink to="/login" className="flex items-center py-2 px-2 hover:text-gray-400">Already have an accaunt?</NavLink>
            </div>
        </form>
    )
}

export default RegisterPage;