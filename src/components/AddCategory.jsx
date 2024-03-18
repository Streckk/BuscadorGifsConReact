import { useState } from 'react'


const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;

        //setcategories( categorias => [...categorias , inputValue]);
        onNewCategory( newInputValue )
        setinputValue('')
    }
    

    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>

    )
}

export default AddCategory
