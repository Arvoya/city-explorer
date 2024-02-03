import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function CitySearchForm({ citySearched, updateCitySearch, handleForm }) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
         <div className={`search-container ${isFocused ? 'focused' : ''}`}>
             <form onSubmit={handleForm}>
                 <InputGroup size="sm" className={`searchBar ${isFocused ? 'focused' : ''}`}>
                     <Form.Control
                          value={citySearched}
                          placeholder="City Name"
                          onChange={updateCitySearch}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className="transparent-search"
                     />
                     <Button className="search-button" size='sm' variant="secondary" type="submit">
                         Explore!
                     </Button>
                 </InputGroup>
             </form>
         </div>
    );
}

export default CitySearchForm;
