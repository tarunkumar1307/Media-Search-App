import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExist) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.setItem('collection', JSON.stringify(state.items))
        },

        addCollectionToast: () => {
            toast.success('Added to Collection', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            })
        },

        removeCollectionToast: () => {
            toast.warn('Removed from Collection', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            })
        }
    }
})

export const { addCollection, removeCollection, clearCollection, addCollectionToast, removeCollectionToast } = collectionSlice.actions
export default collectionSlice.reducer