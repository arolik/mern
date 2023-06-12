import { NavLink } from "react-router-dom";

const LoginPage = () => {

    return (
        <form className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 w-11/12 mx-auto mt-8 flex flex-col bg-amber-200 p-10" onSubmit={(e) => e.preventDefault() }>
            <h3 className="text-lg text-center font-medium">Authorization</h3>
            <label className="text-sm text-amber-950">
                Login:
            <input type="text" placeholder="login" className="mt-1 w-full border py-2 px-2 outline-none bg-gray-200 focus:bg-gray-50" />
            </label>
            <label className="text-sm text-amber-950">
                Password:
            <input type="password" placeholder="password" className="mt-1 w-full border py-2 px-2 outline-none bg-gray-200 focus:bg-gray-50" />
            </label>
            <div className="mt-4 text-sm flex flex-row justify-center gap-8">
                <button className="flex items-center py-2 px-6 rounded-lg bg-teal-600 border hover:bg-teal-700 hover:text-red outline-none">
                    Login
                </button>
                <NavLink to="/register" className="flex items-center py-2 px-2 hover:text-gray-400">No accaunt?</NavLink>
            </div>
        </form>
    )
}

export default LoginPage;