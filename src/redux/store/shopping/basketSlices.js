import { createSlice } from "@reduxjs/toolkit";

const handleInitialState = () => {

    //Se encatga de verificar si existe un objeto "basket"
    //En el local storage, si es true, lo utiliza como estado inicial, 
    //Sino se crea el objeto en localStorage y se devuelve.

    const initialState = {
        products: [],
        amount: 0,
        total: 0
    }

    const state = JSON.parse(localStorage.getItem("basket"));

    if (!Object.keys(state).length) {
        localStorage.setItem("basket", JSON.stringify(initialState));
        return initialState;
    } else {
        return state;
    }
};

const basketSlice = createSlice({
    name: "basket", // el store tiene un action que se llama basket
    initialState: handleInitialState(),
    reducers: {
        addItem: (state, { payload }) => {
            const itemDuplicate = state.products.find(element => element.id === payload.id);
            if (itemDuplicate) {
                alert("ya cargo este item a su carrito");
            } else {
                state.products.push(payload);
                state.amount++;
                state.total = state.total + payload.price;
            }
            localStorage.setItem("basket", JSON.stringify({ ...state }));
        },
        removeItem: (state, { payload }) => {
            let deletedItem;
            state.products = state.products.reduce((accumulator, element) => {
                if (element.id === payload) {
                    deletedItem = element;
                } else {
                    accumulator.push(element);
                }
                return accumulator;
            }, []);
            state.amount--;
            state.total = state.total - deletedItem.price;
            localStorage.setItem("basket", JSON.stringify({ ...state }));
        },

        updateLocal: (state) => {
            localStorage.setItem("basket", JSON.stringify(state));
            console.log(state);
        }

    }
})

export const { increaseAmount, decreaseAmount, removeItem, updateTotal, createBasket, updateLocal, addItem } = basketSlice.actions;


export default basketSlice.reducer; 