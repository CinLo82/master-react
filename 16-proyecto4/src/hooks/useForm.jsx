import { useState } from "react";

export const useForm = (initialObj = {}) => {

    const [form, setForm] = useState(initialObj)

    const handleChange = ({ target }) => {
        if (target && target.name && target.value !== undefined) {
            const { name, value } = target
            setForm({
                ...form,
                [name]: value
            });
        }
    }

  return {
    form,
    handleChange
  }
}
