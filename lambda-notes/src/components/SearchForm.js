import React from 'react';
import { Input, Form, Button} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            term: ''
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    searchTermHandler = e => {
        e.preventDefault();
        this.props.searchTerm(this.state.term);
        this.setState({
          term: ''  
        })
    }
    render() {
        return(
            <Form className="search-form" onSubmit={this.searchTermHandler}>
                <Input 
                    placeholder="Search"
                    value={this.state.term}
                    name="term"
                    onChange={this.changeHandler}
                />
                <FaSearch />
                {/* <Button color=""></Button> */}
            </Form>
        )
    }
}

export default SearchForm;