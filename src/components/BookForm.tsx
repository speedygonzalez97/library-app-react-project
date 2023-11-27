// @ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseauthor, choosebooklength, choosecovertype, chooseid, chooseisbn, choosetitle } from "../redux/slices/RootSlice"


interface BookFormProps {
  id?: string[]
  onClose: () => void;
}

  const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseauthor(data.author_name));
      dispatch(choosebooklength(data.book_length));
      dispatch(choosecovertype(data.cover_type));
      dispatch(chooseid(data.id));
      dispatch(chooseisbn(data.isbn));
      dispatch(choosetitle(data.title));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID</label>
          <Input {...register('id')} name='id' placeholder="id" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="isbn" />
        </div>
        <div>
          <label htmlFor="title">Book Title</label>
          <Input {...register('title')} name='title' placeholder="title" />
        </div>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="author_name" />
        </div>
        <div>
          <label htmlFor="book_length">Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="book_length" />
        </div>
        <div>
          <label htmlFor="cover_type">Cover Type</label>
          <Input {...register('cover_type')} name='cover_type' placeholder="cover_type" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm