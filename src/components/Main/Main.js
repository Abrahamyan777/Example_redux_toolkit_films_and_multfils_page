import React, {useEffect} from 'react';
import css from './Main.module.css'
import {NavLink} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Films from "../Films/Films";
import Multfilms from "../Multfilms/Multfilms";
import Serials from "../Serials/Serials";
import Switcher from "../Switcher/Switcher";
import {useNavigate , useSearchParams } from "react-router-dom"
import {useSelector} from "react-redux";



const Main = () => {

    const {films} = useSelector(state => state.filmsReducer)


    const [searchedParam , setSearchedParam] = useSearchParams()

    const navigate = useNavigate()

    console.log(searchedParam.get('genre'))

    return (
        <div className={css.mainBlock}>
            <div className={css.categories}>
                <h1>Categories</h1>
                <NavLink to='films'>
                    Films
                </NavLink>
                <button onClick={() => setSearchedParam('?genre=action')}>Action</button>
                <NavLink to='multfilms'>
                    Multfilms
                </NavLink>

                <NavLink to='serials'>
                    Serials
                </NavLink>
            </div>
            <div className={css.hidden}></div>
            <div className={css.movieSection}>
                <Routes>
                    <Route path='/films' element={<Films films={films}/>}/>
                    <Route path='/multfilms' element={<Multfilms/>}/>
                    <Route path='/serials' element={<Serials/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Main;