import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardColumns, CardGroup } from 'reactstrap';

const notes = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ante, tincidunt a ex ac, dictum condimentum enim. ',
	'Praesent sed ullamcorper velit. Vestibulum volutpat leo eleifend ante volutpat, et posuere metus pellentesque. Sed molestie ',
	'Nulla eu auctor dui. Integer convallis purus id risus condimentum venenatis. Quisque blandit elit justo, ac semper enim bibendum ',
	'Nunc finibus ornare vehicula. Nunc eu leo maximus, tincidunt tortor non, sagittis neque. Sed nec ex lacus. Duis elementum sem at ',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ',
	'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. ',
	'Sed bibendum placerat faucibus. Pellentesque non magna lobortis, ullamcorper diam ut, euismod felis. Aliquam eget feugiat ipsum, quis','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ',
	'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. '
];
// const notes = [
// 	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ante, tincidunt a ex ac, dictum condimentum enim. Nunc hendrerit et nunc at interdum. Nulla fermentum augue eu nunc finibus laoreet. Aenean blandit at augue in tincidunt. Quisque urna tortor, congue vel tincidunt vitae, varius a libero. Aenean rhoncus porta elit, id maximus dui egestas quis. Mauris volutpat eros vel dignissim tempor. Vestibulum efficitur metus id orci sollicitudin auctor. Ut eu nisi in orci maximus bibendum. Praesent ultricies, quam eget tempus vulputate, eros ex bibendum sem, sit amet malesuada sem libero eu justo. In eu interdum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla laoreet nisi vitae bibendum aliquet. Suspendisse ut eros feugiat, varius nibh vitae, mollis lorem. Suspendisse porttitor dui aliquam dolor ornare molestie.',
// 	'Praesent sed ullamcorper velit. Vestibulum volutpat leo eleifend ante volutpat, et posuere metus pellentesque. Sed molestie posuere tincidunt. Etiam egestas, risus et ultrices posuere, tortor sapien laoreet nibh, vel viverra mauris tellus sit amet libero. Donec sodales sem vehicula, ultrices mauris in, iaculis arcu. In non lacinia purus. Morbi gravida justo at leo bibendum tristique. Nullam aliquam felis eget ultricies fermentum. Phasellus imperdiet mauris sit amet ipsum pharetra, sed fringilla nibh pellentesque. Fusce finibus vulputate dui eget tincidunt. Aliquam molestie massa in varius porttitor. Praesent maximus pharetra vehicula.',
// 	'Nulla eu auctor dui. Integer convallis purus id risus condimentum venenatis. Quisque blandit elit justo, ac semper enim bibendum rutrum. Nulla at purus vitae justo semper vulputate non in mauris. Mauris feugiat pretium leo id cursus. Cras sit amet tristique libero, ut ultricies velit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sagittis leo non dolor vulputate pellentesque.',
// 	'Nunc finibus ornare vehicula. Nunc eu leo maximus, tincidunt tortor non, sagittis neque. Sed nec ex lacus. Duis elementum sem at dolor iaculis, sit amet congue quam vulputate. Sed non nisi eget erat fermentum tempor. Curabitur ac suscipit nunc. Duis mattis ex tellus, at vestibulum dui porta sed. Integer eu turpis odio. Pellentesque vitae feugiat ipsum.',
// 	'Sed rutrum sagittis sem, vitae aliquet velit vulputate et. In mollis suscipit odio sed blandit. Donec sed tellus quis metus congue iaculis. Morbi convallis nisi sed mi interdum, ut pretium sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vulputate dolor vitae arcu tristique laoreet. Vestibulum at facilisis turpis. Quisque condimentum gravida massa, ut aliquet enim. Aliquam iaculis justo felis. Nulla facilisi. Ut a mi rutrum lorem porta condimentum eget ac diam. Nulla fermentum cursus consequat. Quisque venenatis sodales libero sit amet dignissim.',
// 	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio at sem sollicitudin fringilla. Vestibulum lacinia ante at nisl dapibus, ut ornare neque sodales. Suspendisse ut leo sed mi condimentum euismod eu nec metus. Morbi ut nibh nulla. Phasellus quis massa mi. Aliquam id libero ac arcu hendrerit fringilla non nec tortor. Vestibulum laoreet felis eu metus tempus, vitae hendrerit nisl pulvinar.',
// 	'Praesent finibus justo diam, id elementum nulla faucibus a. Suspendisse non dolor eu ipsum lobortis pretium. Duis vel metus vel urna vulputate luctus. Aenean fringilla, purus nec laoreet vestibulum, massa magna ultrices augue, in mollis ex purus quis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla risus neque, sit amet rhoncus orci commodo non. Praesent luctus aliquam diam et tincidunt. Morbi vehicula rutrum lacus.',
// 	'Pellentesque id velit elementum, accumsan ligula non, mattis lacus. Phasellus dui leo, porttitor id pharetra et, convallis vel lacus. Mauris lobortis eros turpis. Etiam in tortor tellus. Proin dui ligula, facilisis sit amet mollis vel, accumsan vel nisl. Fusce rutrum ut felis vestibulum porta. Integer dictum arcu ut faucibus pretium. Integer pharetra leo at massa vestibulum luctus. Donec faucibus feugiat felis, quis faucibus turpis dictum vulputate.',
// 	'Sed bibendum placerat faucibus. Pellentesque non magna lobortis, ullamcorper diam ut, euismod felis. Aliquam eget feugiat ipsum, quis convallis dui. Donec viverra quis ligula ut ultricies. Suspendisse potenti. Sed et nisi tempus, sagittis eros ut, finibus urna. Donec a justo magna. Mauris lacus tellus, ultrices ut ullamcorper vitae, iaculis non eros. Ut fringilla libero dui, id luctus odio viverra sed. Vivamus interdum, tellus vel malesuada efficitur, neque massa ornare quam, at condimentum justo risus a augue. Integer molestie purus vitae sollicitudin euismod. Etiam auctor neque ut orci gravida, ac cursus leo efficitur.'
// ];
const cStyle = {
    // width: '22%',
    marginLeft: '10%',
    // marginRight: '8%',
    // height: '30px',
    border: '2px solid red',
    display: 'flex',

}
const lambda = {
    // width: '8%',
    // height: 1000,
    // marginRight: 0,
    // marginTop: 10,
    // marginLeft: 0,
    // display: 'inline-block',
    // border: '2px solid red',
    // display: 'flex',

}
const lStyle = {
    width: '20%',
    marginLeft: '1%',
    marginRight: '1%',
    display: 'inline-block',
    height: 1000,
    border: '2px solid red',
    // position: 'relative'
}
const icSt = {
    display:'inline-flex',
    width: '30%',
    marginLeft: '1%',
    marginRight: '1%',
    border: '2px solid red',
    height: 300,
    // marginLeft: '26%',
    marginTop: 0,
    // position: 'relative'
}

const PresentationMain = (props) => {
	return (
		<div>
            {/* <div style={lStyle} >
            <h1>Hello, testing</h1>
            </div> */}
            <div style={icSt}>
            <h3>{notes[0]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[1]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[2]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[3]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[4]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[5]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[6]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[7]}</h3>
            </div>
            <div style={icSt}>
            <h3>{notes[8]}</h3>
            </div>

            
            {/* <div style={lambda}> */}

		</div>
	);
};

export default PresentationMain;
{/* <CardColumns style={lambda}> 
<h1>Hey </h1>
</CardColumns>
{/* </div> */}
 {/* <CardGroup> */}
//  <CardGroup>
//  <CardColumns>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 1</CardTitle>
//             <CardText>{notes[0]}</CardText>
//         </CardBody>
//     </Card>
    // <Card style={cStyle}>
    //     <CardBody>
    //         <CardTitle>Note 2</CardTitle>
    //         <CardText>{notes[1]}</CardText>
    //     </CardBody>
    // </Card>
    // <Card style={cStyle}>
    //     <CardBody>
    //         <CardTitle>Note 3</CardTitle>
    //         <CardText>{notes[2]}</CardText>
    //     </CardBody>
    // </Card>
    // </CardColumns>
    
//     </CardGroup>
//     <CardGroup>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 4</CardTitle>
//             <CardText>{notes[3]}</CardText>
//         </CardBody>
//     </Card>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 5</CardTitle>
//             <CardText>{notes[4]}</CardText>
//         </CardBody>
//     </Card>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 6</CardTitle>
//             <CardText>{notes[5]}</CardText>
//         </CardBody>
//     </Card>
//     </CardGroup>
//     <CardGroup>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 7</CardTitle>
//             <CardText>{notes[6]}</CardText>
//         </CardBody>
//     </Card>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 8</CardTitle>
//             <CardText>{notes[7]}</CardText>
//         </CardBody>
//     </Card>
//     <Card style={cStyle}>
//         <CardBody>
//             <CardTitle>Note 9</CardTitle>
//             <CardText>{notes[8]}</CardText>
//         </CardBody>
//     </Card>
// </ CardGroup> 