import { createSlice } from '@reduxjs/toolkit';

const handleInitialState = () => {

    //Se encarga de verificar si existe un objeto "basket"
    //En el local storage, si es true, lo utiliza como estado inicial, 
    //Sino se crea el objeto en localStorage y se devuelve.

    const initialState = {
        favorite: []
    }

    const state = JSON.parse(localStorage.getItem("favorite"));

    if (!state) {
        localStorage.setItem("favorite", JSON.stringify(initialState));
        return initialState;
    } else {
        return state;
    }
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: handleInitialState(),
  reducers: {
    addFavorite: (state, {payload}) => {
        state.favorite.push(payload);
    },
    removeFavorite: (state, {payload}) => {
        state.favorite = state.favorite.filter(element => element.id !== payload)
    }
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer