import { useState } from "react";

export default function QwestPageForm({setUser}) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState({})
  const [description, setDescription] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const newQwest = { title, price, description }
  }
}