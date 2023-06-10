import { createSlice } from '@reduxjs/toolkit';
import { ProductService } from '../../../components/service/ProductService';


export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detail: {}
  },
  reducers: {
    getItem: (state, { payload }) => {
      state.detail = payload;
    }
  },
});

export const { getItem} = detailSlice.actions;

export const getDetailItem = (id) => (dispatch) => {
  const products = ProductService.getProductsData();
  const itemById = products.filter(element => element.id === id);
  dispatch(getItem(itemById));
}

export default detailSlice.reducer;
