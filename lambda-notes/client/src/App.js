import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import CreateNote from './components/Notes/CreateNote';
import NoteNav from './components/Notes/NoteNav';


const defaultNotes = [{"id":0,"title":"Test note 1","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non hendrerit orci. Integer justo magna, malesuada posuere sapien non, imperdiet mattis velit. Nullam sit amet nisi ac justo egestas pulvinar vel nec massa. Suspendisse at dignissim augue. Phasellus vitae blandit massa. In hac habitasse platea dictumst. Pellentesque vitae diam turpis. Vivamus ac dapibus metus. "},{"id":1,"title":"Test note 2","body":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non hendrerit orci. Integer justo magna, malesuada posuere sapien non, imperdiet mattis velit. Nullam sit amet nisi ac justo egestas pulvinar vel nec massa. Suspendisse at dignissim augue. Phasellus vitae blandit massa. In hac habitasse platea dictumst. Pellentesque vitae diam turpis. Vivamus ac dapibus metus.\n\nDonec scelerisque hendrerit orci, nec porta ligula ornare non. Aenean sollicitudin porta ipsum nec eleifend. Sed id dapibus enim. Integer blandit ligula a eros ullamcorper feugiat. Duis maximus nec elit ac rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur consequat mauris, tempor dapibus lorem euismod quis. Vestibulum sit amet condimentum nisi. Vestibulum consectetur rutrum quam, non tincidunt ipsum sagittis in. "},{"id":2,"title":"Test note 3","body":" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non hendrerit orci. Integer justo magna, malesuada posuere sapien non, imperdiet mattis velit. Nullam sit amet nisi ac justo egestas pulvinar vel nec massa. Suspendisse at dignissim augue. Phasellus vitae blandit massa. In hac habitasse platea dictumst. Pellentesque vitae diam turpis. Vivamus ac dapibus metus.\n\nDonec scelerisque hendrerit orci, nec porta ligula ornare non. Aenean sollicitudin porta ipsum nec eleifend. Sed id dapibus enim. Integer blandit ligula a eros ullamcorper feugiat. Duis maximus nec elit ac rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur consequat mauris, tempor dapibus lorem euismod quis. Vestibulum sit amet condimentum nisi. Vestibulum consectetur rutrum quam, non tincidunt ipsum sagittis in.\n\nSuspendisse non sagittis felis. Fusce diam nisi, mattis et tristique vel, aliquam ac sem. Etiam rhoncus interdum magna ac blandit. Nam ut mi finibus, vestibulum ipsum eu, malesuada mauris. Aenean aliquet ex id nisi efficitur aliquam. Sed elementum lorem lectus, vitae bibendum diam semper sed. Quisque vitae leo tellus. Aenean fermentum id dui mattis gravida. Pellentesque consequat urna sed lacus maximus, id ullamcorper justo ornare. Phasellus tortor libero, maximus sed placerat quis, pellentesque eu dui. In aliquet ex lobortis nunc feugiat, in aliquam nisi interdum. Vestibulum mattis sem eget nunc porta, eu euismod arcu porttitor. Vestibulum efficitur metus velit, ac iaculis metus tristique nec. Morbi suscipit fermentum lacus ut euismod. Ut blandit vulputate massa. "},{"id":3,"title":"Test note 4","body":" Donec tincidunt lacus nibh, id laoreet massa blandit vitae. Etiam sagittis nulla sed pretium laoreet. Etiam id lacinia lacus, et aliquam nunc. Praesent eget volutpat turpis. Nam eleifend, elit eget ullamcorper dapibus, lorem diam lacinia lorem, eget mollis purus dui non diam. Aliquam convallis eros elit, vitae porta libero vestibulum eget. Vestibulum efficitur et nunc et dignissim. Vestibulum eget quam iaculis, dignissim arcu et, sodales libero. Fusce ex turpis, tempus sit amet sem sit amet, auctor mattis libero.\n\nEtiam sit amet commodo dolor, at mattis mi. Maecenas lobortis, enim ut lacinia efficitur, neque urna rhoncus risus, vel egestas magna urna et felis. Proin euismod, nibh vestibulum elementum dignissim, ipsum diam consectetur lorem, a mollis est mi maximus arcu. Morbi molestie metus eget velit aliquet feugiat. Aliquam et quam lorem. Sed luctus ut tortor congue ullamcorper. Integer non nisl metus. Suspendisse potenti. Nullam eu interdum elit, non suscipit nunc. Nunc commodo hendrerit malesuada. Ut pellentesque nisi eget elit ullamcorper hendrerit. Proin leo eros, fermentum et nisi at, facilisis dictum diam. Duis placerat libero quis porta tempus. "},{"id":4,"title":"Test note 5","body":"Ad vim paulo temporibus consequuntur, sed dicam prompta pericula ne. Mollis invidunt intellegat qui ei, ad duo ullum adipisci adversarium, mundi regione splendide mel in. Tota voluptaria eu cum, ceteros maiorum docendi mea an. Eos amet iriure appellantur no, dolor albucius ea eum. Ea est tritani denique, delenit sapientem molestiae in sea. Ea nam integre labores torquatos, sint lucilius rationibus no mel, cetero sanctus dissentiunt ne quo. Eam facilisis persecuti delicatissimi no, per nobis patrioque posidonium an, et mollis assentior nam.\n\nPro id aperiri splendide, iusto verterem ex mei. Illum altera instructior duo in, qui cu liber congue. Consul legendos recusabo et has, veniam altera noster sea no. Simul primis lucilius ius ei.\n"},{"id":5,"title":"Test note 6","body":"Eu quo nostro cetero elaboraret, sit te suas natum semper, vix laboramus assentior quaerendum ne. Ut mel affert tincidunt, et duis zril mollis eum, an congue mediocrem quo. Vis ei mazim aliquam senserit, errem putent signiferumque no vel. Percipit aliquando sit eu. Tibique prodesset intellegebat in vix, latine invenire at per. Stet cotidieque no sea, eu omnis everti disputando nec.\n\nPer ei numquam ponderum, sit at zril expetenda molestiae. Ad sed dicta libris, dicat quodsi in usu, te sit regione appetere abhorreant. An mel quaeque tractatos efficiantur, iudico audiam incorrupte sea id. Mandamus neglegentur id vim, cu omnis inani efficiantur cum, pri habemus delicata et. Invenire salutandi et nec, ad putent iriure maluisset vim. Esse posidonium in vix, ut pro elit justo homero, audiam aperiam ullamcorper nec ad."},{"id":6,"title":"Test note 7","body":"Eu quo nostro cetero elaboraret, sit te suas natum semper, vix laboramus assentior quaerendum ne. Ut mel affert tincidunt, et duis zril mollis eum, an congue mediocrem quo. Vis ei mazim aliquam senserit, errem putent signiferumque no vel. Percipit aliquando sit eu. Tibique prodesset intellegebat in vix, latine invenire at per. Stet cotidieque no sea, eu omnis everti disputando nec.\n\nPer ei numquam ponderum, sit at zril expetenda molestiae. Ad sed dicta libris, dicat quodsi in usu, te sit regione appetere abhorreant. An mel quaeque tractatos efficiantur, iudico audiam incorrupte sea id. Mandamus neglegentur id vim, cu omnis inani efficiantur cum, pri habemus delicata et. Invenire salutandi et nec, ad putent iriure maluisset vim. Esse posidonium in vix, ut pro elit justo homero, audiam aperiam ullamcorper nec ad."},{"id":7,"title":"Test note 8","body":"Eu pri facilisi deseruisse. Ne vim diceret fierent, sea utroque patrioque no. Consequat ullamcorper sea te, viris graece dissentiunt vel ex. Ius atomorum."},{"id":8,"title":"Test note 9","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non hendrerit orci. Integer justo magna, malesuada posuere sapien non, imperdiet mattis velit. Nullam sit amet nisi ac justo egestas pulvinar vel nec massa. Suspendisse at dignissim augue. Phasellus vitae blandit massa. In hac habitasse platea dictumst. Pellentesque vitae diam turpis. Vivamus ac dapibus metus. Donec scelerisque hendrerit orci, nec porta ligula ornare non. Aenean sollicitudin porta ipsum nec eleifend. Sed id dapibus enim. Integer blandit ligula a eros ullamcorper feugiat. Duis maximus nec elit ac rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur consequat mauris, tempor dapibus lorem euismod quis. Vestibulum sit amet condimentum nisi. Vestibulum consectetur rutrum quam, non tincidunt ipsum sagittis in. "}];


class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("names") === null) {
      localStorage.setItem("names", JSON.stringify(defaultNotes));
    }
  }

  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        <h1>Lambda Notes</h1>
          <Link to='/' ><div className='App__left-buttons'>
            <span>View Your Notes</span>
          </div></Link>
          <Link to='/NewNote'>
          <div className='App__left-buttons'>
            <span>+ Create New Note</span>
          </div></Link>
          
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        {/* <NoteList /> */}
        <NoteNav />
        <Route exact path='/NewNote' component={CreateNote} />
        <Route exact path='/' component={NoteList} />
        {/* <CreateNote /> */}
        {/* <ViewNote 
        name='somthing' 
        body='some body holder note text for simple testing'
        /> */}
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
