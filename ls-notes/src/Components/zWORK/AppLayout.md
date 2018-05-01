<!-- HTML -->
<div id="container" class="flexChild rowParent">
  
  <div id="rowChild12968" class="flexChild"></div>

  <div id="rowChild78792" class="flexChild selected"></div>
</div>
<!-- CSS -->
#flexcanvas{
  width: 100%;
  height: 600px !important;
}

.rowParent, .columnParent{
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.columnParent{
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flexChild{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}


#rowChild78792{
 -webkit-box-flex: 0;
 -webkit-flex: 0 0 auto;
 -ms-flex: 0 0 auto;
 flex: 0 0 auto; width: 80%; -webkit-align-self: auto; -ms-flex-item-align: auto; align-self: auto;
}


#rowChild12968{
 -webkit-box-flex: 0;
 -webkit-flex: 0 0 auto;
 -ms-flex: 0 0 auto;
 flex: 0 0 auto; width: 20%;
}