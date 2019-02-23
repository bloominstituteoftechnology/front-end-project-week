import React from 'react'

class DropMenu extends React.Component {
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }
    }

    showMenu = event => {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu = () => {
        this.setState({ showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }

 

    

    render(){
        return (
            <div>
                <button onClick={this.showMenu}>
                    Show menu
                </button>

                {
                    this.state.showMenu
                    ? (
                        <div 
                            className="menu"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}
                        >
                            <button onclick={this.props.myFunction}> Menu item 1 </button>
                            <button> Menu item 2 </button>
                            <button> Menu item 3 </button>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        );
    }
}

export default DropMenu