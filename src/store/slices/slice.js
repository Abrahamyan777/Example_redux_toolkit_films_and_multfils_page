import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import DB from '../../DB/allFilms.json'



const initialState = {
    all_films: DB.all_films,
    films: DB.all_films.films,
    anim_films: [],
    serials: []
}

export const slice = createSlice(
    {
        name : 'movie/slice',
        initialState,
        reducers: {

        }
    }
)

export const {} = slice.actions

export default slice.reducer




