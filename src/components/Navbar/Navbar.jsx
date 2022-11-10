import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function Navbar({user, setAuthState, setUser}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <Menu left>
            <button onClick={signOutHandler} className='p-0 m-0 w-40 h-12 flex justify-center items-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg'>
                <p>Se déconnecter</p>
            </button>
        </Menu>
    );
}

export default Navbar;