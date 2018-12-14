import React from "react";
import './index.css';
// import {connect} from "react-redux"

export const Loading = (Component) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (<Component {...props} />);
        return (<p>Be Hold, fetching data may take some time :)</p>);
      }
}

// class LoadingView extends Component{

//     render() {
//         if(this.props.waiting){
//             return(
//                 <p>Loading...</p>
//             )
//         } else{
//             return(
//                 <p>Not Waiting on Response from server</p>
//             );
//         }
//     }
// }

// const mapStateToProps = state => {
//     return({
//         notes:state.notes,
//         waiting:state.waiting
//     })
// }

// export default connect(mapStateToProps)(LoadingView);
