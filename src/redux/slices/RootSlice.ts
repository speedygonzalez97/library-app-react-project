import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_name: "author_name",
        book_length: "book_length",
        cover_type: "cover_type",
        id: "id",
        isbn: "isbn",
        title: "title",
    },
    reducers: {
        chooseauthor: (state, action) => { state.author_name = action.payload},
        choosebooklength: (state, action) => { state.book_length = action.payload},
        choosecovertype: (state, action) => { state.cover_type = action.payload},
        chooseid: (state, action) => { state.id = action.payload},
        chooseisbn: (state, action) => { state.isbn = action.payload},
        choosetitle: (state, action) => { state.title = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseauthor, choosebooklength, choosecovertype, chooseid, chooseisbn, choosetitle} = rootSlice.actions