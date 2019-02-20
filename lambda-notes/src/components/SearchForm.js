import React from 'react';
import { Input, Form, Button} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            [<Form className="search-form" onSubmit={this.searchTerm}>
                <Input 
                    placeholder="Search"

                    
                />
                <FaSearch />
                {/* <Button color=""></Button> */}
            </Form>]
        )
    }
}

export default SearchForm;