<!-- LAYOUT FOR ALL BLOCKS ON PAGE -->
/* HTML */
<div id="container" class="flexChild rowParent">
  
  <div id="rowChild18977" class="flexChild"></div>

  <div id="rowChild15152" class="flexChild columnParent">
    <div id="columnChild94464" class="flexChild"></div>

    <div id="columnChild21162" class="flexChild columnParent">
      <div id="columnChild8122" class="flexChild"></div>

      <div id="columnChild33883" class="flexChild columnParent">
        <div id="columnChild85373" class="flexChild"></div>

        <div id="columnChild36525" class="flexChild selected"></div>
</div>
</div>
</div>
</div>

<!-- /* CSS */ -->
<!-- OPTIMIZED FOR CHROME BROWSER ONLY -->

#flexcanvas{
  width: 100%;
  height: 600px !important;
}

.rowParent, .columnParent{
 
  display: flex;
  
  flex-direction: row;
  
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


#columnChild85373{

 flex: 0 0 auto; height: 80%;
}


#columnChild36525{
 flex: 0 0 auto; height: 10%;
}


#columnChild8122{
 flex: 0 0 auto; height: 10%;
}


#columnChild94464{
 flex: 0 0 auto; height: 15%;
}


#rowChild15152{
 flex: 0 0 auto; width: 80%;
}


#rowChild18977{
 -webkit-box-flex: 0;
 -webkit-flex: 0 0 auto;
 -ms-flex: 0 0 auto;
 flex: 0 0 auto; width: 20%;
}