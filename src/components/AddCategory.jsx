
import {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('');

    const OnInputChange = ({target}) => {
        SetInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories])
        SetInputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={onSubmit}>
         <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={OnInputChange}
        />
    </form>
   
  );

};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
  };
