import React from "react"
import "./SearchBar.css"

class SearchBar extends React.Component{

           constructor(props){
              super (props);
              this.state={

              }
           }
        changeHandler=(event)=>{
             event.preventDefault();
             this.props.search(event.target.value)
        }

    render(){

    return(

        <div>

          <input type="text"  placeholder=" Type any title or hint from it ...  " onChange={this.changeHandler}   />

        </div>



    )


    }


}

export default SearchBar