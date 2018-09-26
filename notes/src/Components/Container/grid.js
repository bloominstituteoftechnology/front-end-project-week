import React from "react";
import _ from "lodash";

import GridLayout from 'react-grid-layout';

// import RGL, { WidthProvider } from "react-grid-layout";

// const ReactGridLayout = WidthProvider(RGL);

// export class BasicLayout extends React.PureComponent {
//   static defaultProps = {
//     className: "layout",
//     items: 20,
//     rowHeight: 30,
//     onLayoutChange: function() {},
//     cols: 12,
//     width: 1200
//   };

//   constructor(props) {
//     super(props);

//     const layout = this.generateLayout();
//     this.state = { layout };
//   }

//   generateDOM() {
//     return _.map(_.range(this.props.items), function(i) {
//       return (
//         <div key={i}>
//           <span className="text">{i}</span>
//         </div>
//       );
//     });
//   }

//   generateLayout() {
//     const p = this.props;
//     return _.map(new Array(p.items), function(item, i) {
//       const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
//       return {
//         x: (i * 2) % 12,
//         y: Math.floor(i / 6) * y,
//         w: 2,
//         h: y,
//         i: i.toString()
//       };
//     });
//   }

//   onLayoutChange(layout) {
//     this.props.onLayoutChange(layout);
//   }

//   render() {
//     return (
//       <ReactGridLayout
//         layout={this.state.layout}
//         onLayoutChange={this.onLayoutChange}
//         {...this.props}
//       >
//         {this.generateDOM()}
//       </ReactGridLayout>
//     );
//   }
// }

export class BasicLayout extends React.Component {
    render() {
      // layout is an array of objects, see the demo for more complete usage
      var layout = [
        {i: 'a', x: 0, y: 0, w: 2, h: 2},
        {i: 'b', x: 2, y: 0, w: 2, h: 2},
        {i: 'c', x: 4, y: 0, w: 2, h: 2}
      ];

      var layout2 = this.props.notes.map((note, index) => {return {i: note._id.toString(), x: (index) * 2, y: 0, w: 2, h: 2}});
      console.log(layout2);
      return (
        <GridLayout className="layout" layout={layout2} cols={12} rowHeight={30} width={1200}>
          {/* <div style={{backgroundColor: "tomato"}} key="a">a</div>
          <div style={{backgroundColor: "tomato"}} key="b">b</div>
          <div style={{backgroundColor: "tomato"}} key="c">c</div> */}

          {this.props.notes.map((note, index) => <div style={{backgroundColor: "tomato"}} key={note._id.toString()}>{note.title}</div>)}
        </GridLayout>
      )
    }
  }