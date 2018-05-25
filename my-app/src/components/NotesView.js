import React from 'react';
import './css/notesView.css';
import { Link } from 'react-router-dom';
import ModalExample from './ModalExample';

class NotesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  
  }

  render() {
    return (
      <div className = "noteArea">
            <div className="row editDelete">
              <div className="col-1">
                <a><Link to="/editView">edit</Link></a>
              </div>
              <div className="col-1">
               
                <ModalExample />
              </div>
            </div>
            <h4>Note Name</h4>
            <div className="row bodyP">
              <div className="col-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at est lobortis, consectetur est vitae, hendrerit massa. Quisque hendrerit egestas ante vel consectetur. Suspendisse potenti. Donec ut nibh sed risus ultrices luctus vitae ac ante. Nam vel mi volutpat, ultricies neque porttitor, consectetur tellus. Duis ligula libero, placerat id auctor in, elementum in magna. Proin in ipsum blandit, varius risus nec, tincidunt lectus. Nullam eget placerat lacus. Maecenas facilisis auctor euismod. Maecenas cursus lorem mauris, at sodales felis auctor a. Duis sed rutrum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempor nec quam sodales sagittis.

</p>
              </div>
              <div className="col-12">
                <p>Ut viverra dapibus imperdiet. Vestibulum congue iaculis condimentum. Nullam vitae diam diam. Ut malesuada, felis nec faucibus suscipit, diam metus facilisis ipsum, ut euismod nunc mi et enim. Aliquam in diam quis quam sodales gravida. Vestibulum non odio dictum, pharetra eros et, venenatis quam. Integer eget leo porta, pulvinar nisl at, rhoncus magna. Vivamus et pellentesque velit. Vivamus vitae felis ipsum. Ut lobortis, urna in porta fermentum, est leo aliquam odio, a laoreet libero dolor ut urna. Nulla facilisi. Nulla et sapien vitae nisi ornare facilisis. Ut eleifend vulputate posuere. Suspendisse mollis auctor aliquet. Nunc eros nibh, commodo vitae augue nec, placerat convallis eros. Praesent est lacus, dignissim laoreet ante nec, mattis maximus sem.</p>
              </div>
            </div>
      </div>
    );
  }
}

export default NotesView;