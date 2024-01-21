import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function CitySearchForm({ citySearched, updateCitySearch, handleForm }) {
    return (
        <div className="search-container">
            <form onSubmit={handleForm}>
                <InputGroup className="mb-3">
                    <Form.Control
                        value={citySearched}
                        placeholder="City Name"
                        aria-label="City Name"
                        aria-describedby="basic-addon2"
                        onChange={updateCitySearch}
                    />
                    <Button size='lg' variant="primary" type="submit">
                        Explore!
                    </Button>
                </InputGroup>
                <Form.Text id="cityDescription" muted>
                    { /* Display location information if available */ }
                </Form.Text>
            </form>
        </div>
    );
}

export default CitySearchForm;
