<script>

</script>


<template>
  <div class="headercontainer">
    <div class="header-logo">
       <h1>Aligarh House</h1>
    </div>
    <div>
      <input class="input" placeholder="search your product"/>
    </div>
    <div class="button-container">
      <button style="margin-right: 10px;">SignIn</button>
      <button>Cart</button>
    </div>
  </div>
</template>

<style>
  .headercontainer{
    background-color: bisque;
    display:flex;
    border : 1px solid red;
    justify-content: space-between;
  }

  .headercontainer .header-logo h1{
    margin : 20px;
  }

  .headercontainer .button-container{
    margin: 20px;
     display: flex;
     
  }
  .input{
    width: 1000px;
    margin:20px;
    height: 30px
  }

 .headercontainer .button-container button{
    width: 60px;
    height: px;
  }


</style>