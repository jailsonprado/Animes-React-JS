import React, {useState} from 'react';
import useDebounce from '../utils/UseDebounce'
import styles from './styles.module.css'


const SearchInput = ({value, onChange}) => {
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedValue = useDebounce(onChange, 500)

    function handleChange(e) {
        setDisplayValue(e.target.value)
        debouncedValue(e.target.value)
    }
    return (
        <input className={styles.searchInput} placeholder="Pesquisar animes" type="search" value={displayValue} onChange={handleChange}/>
    )
}

export default SearchInput;
