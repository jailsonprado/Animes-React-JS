import React, {useState} from 'react';
import useDebounce from '../utils/UseDebounce'
import * as S from './search.styles'


interface Props {
    value: string,
    onChange: () => void
}

const SearchInput = ({value, onChange}: Props) => {
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedValue = useDebounce(onChange, 500)

    function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setDisplayValue(e.target.value)
        debouncedValue(e.target.value)
    }
    return (
        <S.Input  placeholder="Pesquisar animes" type="search" value={displayValue} onChange={handleChange}/>
    )
}

export default SearchInput;
