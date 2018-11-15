import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NoteList from "./pages/NoteList";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";
import SideBar from "./components/SideBar";

class App extends Component {
    state = {
        notes: [
            {
                title: "Very Short Note",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Short Note",
                text: "Nullam nulla ante, tincidunt eget mauris vel, dictum sodales augue. Quisque non auctor lacus. Donec in convallis nisl. Sed eget tincidunt augue."
            },
            {
                title: "Medium Note",
                text: "Duis pellentesque efficitur tellus in dapibus. Sed sollicitudin, nibh quis rhoncus varius, odio purus sagittis orci, sed porttitor erat mi ut ex. Aliquam non dui ultricies, tincidunt felis vel, scelerisque metus. Quisque sodales dignissim elit. Aliquam neque tellus, efficitur vitae aliquam a, interdum ac lacus. Integer nulla urna, ultrices id massa vitae, sollicitudin mattis lorem. Curabitur a sem nunc."
            },
            {
                title: "Long Note",
                text: "Pellentesque feugiat, lorem non blandit cursus, dui leo mollis dui, quis imperdiet erat tortor et sem. Aliquam mi magna, congue sed lacus nec, molestie maximus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce a pretium libero. Phasellus eget purus sit amet leo viverra hendrerit. Phasellus mattis eget sapien in maximus. Etiam quis enim quis augue tincidunt convallis. Ut nisi urna, laoreet nec diam laoreet, faucibus lobortis velit. Nullam nec ornare orci, vitae vestibulum lacus. Aliquam a dui diam. Aliquam vel libero sem. Pellentesque fringilla ornare sapien, quis lacinia felis pulvinar in. Nulla facilisi. Ut diam nulla, laoreet id blandit eu, porta non risus. Nullam pharetra purus et metus porta, ac aliquam metus semper. Proin in sodales arcu. "
            },
            {
                title: "Very Long Note",
                text: " Nulla malesuada lectus magna, sed consectetur mi malesuada eu. Mauris egestas, urna sit amet sollicitudin sodales, purus ante sagittis magna, non tempor elit nisl pellentesque magna. Vivamus ante tortor, convallis at malesuada non, convallis sed massa. Vivamus congue metus varius elit tincidunt egestas. Duis vel faucibus augue, vel imperdiet nisi. Ut finibus sed lectus non posuere. Nam facilisis euismod mauris eu finibus. Donec nec felis semper risus feugiat pharetra. Nulla tempor a enim nec ornare. Aliquam ut sem tempus, pharetra libero sit amet, pulvinar orci. Duis ac leo in magna molestie pulvinar. Morbi nec est ac justo dapibus gravida in ac diam. In tristique ex sed lacus pharetra, id egestas sem finibus. Cras felis risus, lacinia in dictum et, feugiat id erat. Maecenas ultrices, nisi eget euismod consequat, erat dolor dictum massa, dignissim convallis justo justo bibendum eros. Duis pretium, sem eget porta hendrerit, ex turpis rhoncus tortor, in pretium odio felis vel augue. Duis augue tortor, efficitur eget ligula id, porttitor viverra sem. Aliquam erat volutpat. Morbi efficitur, lorem in tincidunt aliquam, ex sapien tristique magna, at pretium diam sem a sapien. Aenean mi nunc, pellentesque ac blandit ut, hendrerit non risus. Phasellus placerat aliquet enim, vel pulvinar tellus luctus ac. Vivamus sed interdum justo. Nunc malesuada velit ac bibendum rhoncus. Praesent molestie vehicula consectetur. Mauris a justo auctor metus dictum suscipit ac nec massa. In sit amet nisl facilisis, bibendum nunc ac, blandit nunc. Vestibulum vel pretium purus, id lobortis magna. In eget maximus ipsum, vel fringilla orci. Sed mattis volutpat quam sit amet ultricies. Vivamus vehicula sem non lobortis tincidunt. Donec sit amet tempus enim, vitae vestibulum metus. Mauris accumsan ligula ac faucibus sollicitudin. Suspendisse at nibh tristique, pellentesque urna in, pulvinar ipsum. Sed eu diam ut magna volutpat iaculis tristique vitae nunc."
            },
        ]
    };

    render() {
        return (
            <div>
                <SideBar /> {/*Always display sidebar regardless of URL*/}
                <Router>
                    <div>
                        <Route exact path="/" render={ //Rendering NoteList while also passing it array of notes as a prop
                            props => <NoteList {...props} notes={this.state.notes} />
                        } />
                        <Route exact path="/view/:id" render={
                            props => <ViewNote {...props} notes={this.state.notes} />   
                        }/>
                    </div>
                </Router>
            </div>
        );
    };
};

export default App;
