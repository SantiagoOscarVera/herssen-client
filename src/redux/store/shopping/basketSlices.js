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
    console.log(state);

    if (state && Object.keys(state).length) {
        return state;
    } else {
        localStorage.setItem("basket", JSON.stringify(initialState));
        return initialState;
    }
};

const basketSlice = createSlice({
    name: "basket", // el store tiene un action que se llama basket
    initialState: handleInitialState(),
    reducers: {
        addItem: (state, { payload }) => {
            state.products.push({ item: payload, itemAmount: 1 });
            updateTotal();
        },
        removeItem: (state, { payload }) => {
            state.products = state.products.filter(element => element.item.id !== payload.id);
            updateTotal();
        },
        increaseAmount: (state, { payload }) => {
            const product = state.products.find(element => element.item.id === payload.id);
            product.itemAmount++;
            updateTotal();
        },
        decreaseAmount: (state, { payload }) => {
            const product = state.products.find(element => element.item.id === payload.id);
            product.itemAmount--;
            updateTotal();
        },
        updateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.products.forEach(element => {
                amount += element.itemAmount;
                total += element.itemAmount * element.item.price;
            });
            state.amount = amount;
            state.total = total;
            updateLocal();
        },
        updateLocal: (state) => {
            localStorage.setItem("basket", JSON.stringify(state));
            console.log(state);
        }

    }
})

export const { increaseAmount, decreaseAmount, removeItem, updateTotal, createBasket, updateLocal, addItem } = basketSlice.actions;


export default basketSlice.reducer; 