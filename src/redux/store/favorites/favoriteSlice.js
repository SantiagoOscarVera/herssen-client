import { createSlice } from '@reduxjs/toolkit';

const handleInitialState = () => {

    //Se encarga de verificar si existe un objeto "basket"
    //En el local storage, si es true, lo utiliza como estado inicial, 
    //Sino se crea el objeto en localStorage y se devuelve.

    const initialState = {
        favorites: []
    }

    const state = JSON.parse(localStorage.getItem("favorites"));

    if (!state) {
        localStorage.setItem("favorites", JSON.stringify(initialState));
        return initialState;
    } else {
        return state;
    }
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: handleInitialState(),
    reducers: {
        addFavorite: (state, { payload }) => {
            const duplicatedFav = state.favorites.find(element => element.id === payload.id)
            if (duplicatedFav) {
                alert("Ya tiene como favorito este Item");
            } else {
                state.favorites.push(payload);
                localStorage.setItem("favorites", JSON.stringify({ ...state }));
            }
        },
        removeFavorite: (state, { payload }) => {
            state.favorites = state.favorites.filter(element => element.id !== payload)
            localStorage.setItem("favorites", JSON.stringify({ ...state }));
        }
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer