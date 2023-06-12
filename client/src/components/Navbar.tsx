import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mx-auto flex flex-row justify-between bg-teal-700 py-4 px-4 text-base text-left">
            <div className="w-1/3 text-amber-950">Logo</div>
            <div className="w-1/3  flex justify-center gap-x-5">
                <NavLink to="/" className="text-amber-950 hover:text-amber-400">Main</NavLink>
                <NavLink to="/posts" className="text-amber-950 hover:text-amber-400 ">My posts</NavLink>
                <NavLink to="/addPost" className="text-amber-950 hover:text-amber-400 ">Add post</NavLink>
            </div>
            <div className="w-1/3 text-right text-amber-950">
                <NavLink to="/login">Login</NavLink>
            </div>
            
        </div>
    )
}

export default Navbar;