
<!-- HTML -->
<div id="container" class="flexChild rowParent">
  
  <div id="rowChildNavPanel" class="flexChild columnParent">
    <div id="columnChild-02" class="flexChild"></div>

    <div id="columnChild19959" class="flexChild columnParent">
      <div id="columnChild-01" class="flexChild"></div>

      <div id="columnChild91761" class="flexChild selected"></div>
</div>
</div>

  <div id="rowChildNotePanel" class="flexChild columnParent">
    <div id="columnChild-05" class="flexChild"></div>

    <div id="columnChild21162" class="flexChild columnParent">
      <div id="columnChild-04" class="flexChild"></div>

      
</div>
</div>
</div>

<!-- CSS -->
#flexcanvas{
  width: 100%;
  height: 600px !important;
}

.rowParent, .columnParent{
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
}

.columnParent{
  flex-direction: column;
}

.flexChild{
  flex: 1;
  align-self: auto;
}

#columnChild-01{
 flex: 0 0 auto; height: 10%;
    border-style: solid !important;
    border-width: 2px !important;
       border-color: green;
}

#columnChild-02{
 flex: 0 0 auto; height: 20%;

    border-style: solid !important;
    border-width: 2px !important;
       border-color: blueviolet;
}

#columnChild-03{
 flex: 0 0 auto; height: 80%;

    border-style: solid !important;
    border-width: 2px !important;
       border-color: firebrick;
}

#columnChild-04{
 flex: 0 0 auto; height: 10%;

    border-style: solid !important;
    border-width: 2px !important;
       border-color: darkorange;
}

#columnChild-05{
 flex: 0 0 auto; height: 20%;

    border-style: solid !important;
    border-width: 2px !important;
       border-color: yellow;
}

#rowChildNotePanel{
 flex: 0 0 auto; width: 80%;

    border-style: solid !important;
    border-width: 2px !important;
   border-color: darkviolet;
}

#rowChildNavPanel{
 flex: 0 0 auto; width: 20%;

    border-style: solid !important;
    border-width: 2px !important;
   border-color: burlywood;
}

/* DD Additions */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.Container {
  width: 100%;
  /* DD FFC */
  height: 800px !important;

}
.Nav-Panel, .Notes-Panel {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: space-between;
  /* border-style: solid;
  border-width: 2px; */
}

.Nav-panel {
  width: 18%;
  border-style: solid;
  border-width: 2px;
  border-color: blue;
}

.Notes-panel {
  /* FFC */
  width: 78%;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  
  /* DD */
  display: "inline-block";
  width: 70%;
  background: lightgrey;

}

.View-header {
  background-color: rgb(182, 90, 90);
  height: 50px;
  padding: 20px;
  color: white;
}

.Note-row {
  display: inline-flex;
	margin: 10px;
	/* border: 1px solid #eee;
	box-shadow: 0 2px 2px #ccc; */
	width: 70%;
	padding: 20px;
}
.Note-header {
  background-color: blue;
  height: 40px;
  width: 200px;
  margin: 10px 10px 20px;
  padding: 20px 20px;
  color: white;
}

.Note-item {
	display: inline-block;
	margin: 10px;
	border: 1px solid #eee;
	box-shadow: 0 2px 2px #ccc;
	width: 200px;
  padding: 20px;
  background: lightcyan;
  color: black;
}

.Input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.Label {
  font-weight: bold;
  display:  block;
  margin-bottom: 8px;
}

.InputElement {
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.InputElement:focus {
  outline: none;
  background-color: #ccc;
}