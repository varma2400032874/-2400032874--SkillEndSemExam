<!DOCTYPE html>
<html>
<head>
<title>Course List</title>
<style>
  .item{padding:8px;margin:5px;background:#dcdcdc;cursor:move;}
</style>
</head>
<body>

<h3>Simple Course List Application</h3>

<ul id="courses">
  <li class="item" draggable="true">Data Structures</li>
  <li class="item" draggable="true">Operating Systems</li>
  <li class="item" draggable="true">DBMS</li>
  <li class="item" draggable="true">Networks</li>
  <li class="item" draggable="true">Software Engineering</li>
</ul>

<h4>Updated Order:</h4>
<p id="output"></p>

<script>
let items=document.querySelectorAll(".item");
items.forEach(item=>{
  item.addEventListener("dragstart",e=>drag=item);
  item.addEventListener("dragover",e=>e.preventDefault());
  item.addEventListener("drop",e=>{
    e.target.before(drag);
    showOrder();
  });
});

function showOrder(){
  document.getElementById("output").innerText=
   [...document.querySelectorAll(".item")].map(i=>i.innerText).join(", ");
}
showOrder();
</script>

</body>
</html>