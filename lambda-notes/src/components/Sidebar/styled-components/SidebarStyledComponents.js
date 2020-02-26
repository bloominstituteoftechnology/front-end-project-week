import styled from 'styled-components'

export const drawerWidth = 330 

export const H1 = styled.div `
font-size: 1.6rem ;
font-family: 'Oxygen Mono' ;
margin-bottom: 5px ;
color: black ;
`
export const H4 = styled.h4 `
font-size: 1rem ;
font-family: 'Oxygen Mono' ;
margin-bottom: 5px ;
color: #90A4AE ;
`

export const Div = styled.div `
 margin-bottom: 3px ;
 margin-left: 3px ;
`

export const ContainerStyle = styled.div `
max-width: 180px  ;
width: 100% ;
${'' /* background: gray ; */}
display: flex;
flex-direction: column ;
`
export const styles = theme => ({
 root: {
  display: 'flex',
 },
 toolbar: {
  paddingRight: 24,
 },
 toolBarIcon: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 8px',
  ...theme.mixins.toolbar,
 },
 appBar: {
  zIndex: theme.zIndex.Drawer + 1, 
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen,
  }),
 },
 appBarShift: {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 },
 menuButton: {
  marginLeft: 12,
  marginRight: 36,
 },
 menuButtonHidden: {
  display: 'none',
 },
 title: {
  flexGrow: 1
 },
 drawerPaper: {
  position: 'relative',
  whiteSpace: 'nowrap',
  border: '1px solid black',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 },
 drawerPaperClose: {
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen
  }),
  width: theme.spacing.unit * 7,
  [theme.breakpoints.up('sm')] :{
   width: theme.spacing.unit * 9
  },
 },
 appBarSpacer: theme.mixins.toolbar,
 content: {
  flexGrow: 1,
  padding: theme.spacing.unit * 3,
  height: '100vh',
  overflow: 'auto',
 },
 chartContainer: {
  marginLeft: 280,
  width: '75%',
  flexGrow: 1,
 },
 tableContainer: {
  height: 320,
  width: 500,
  border: '1px solid black',
 },
 h5: {
  marginBottom: theme.spacing.unit * 2
 }
})