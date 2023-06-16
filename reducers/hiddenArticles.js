import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHidden: (state, action) => {
			state.value.push(action.payload);
		},
		removeHidden: (state, action) => {
			state.value = state.value.filter(hiddenArticle => hiddenArticle.title !== action.payload.title);
		},
		removeAllHidden: (state) => {
			state.value = [];
		},
	},
});

export const { addHidden, removeHidden, removeAllHidden } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;