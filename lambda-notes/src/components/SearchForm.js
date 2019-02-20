import React from 'react';
import { Input, Form} from 'reactstrap';

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
            </Form>]
        )
    }
}

export default SearchForm;