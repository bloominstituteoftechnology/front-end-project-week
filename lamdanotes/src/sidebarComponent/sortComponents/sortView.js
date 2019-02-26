import React from 'react';

import SortInactive from './sortInactive';
import SortActive from './sortActive';

// props from SortButtonView 
//handleAscendingSort={props.handleAscendingSort} 
//handleDescendingSort={props.handleDescendingSort} 

class SortButtonView extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    handleToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        console.log(this.state.active)
        let view;
        if(this.state.active) {
            view = <SortActive 
                            handleToggle={this.handleToggle} 
                            handleAscendingSort={this.props.handleAscendingSort}
                            handleDescendingSort={this.props.handleDescendingSort} 
                        />
        } else {
            view = <SortInactive handleToggle={this.handleToggle} />
        }

        return (
            <div className="sort">
                {view}
            </div>
        )
    }
}

export default SortButtonView;