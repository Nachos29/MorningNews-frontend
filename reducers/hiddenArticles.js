import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		hideArticle: (state, action) => {
            state.value.push(action.payload);
        },
        unhideArticle: (state) => {
            state.value = [];
        }
	},
});

export const { hideArticle, unhideArticle } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
