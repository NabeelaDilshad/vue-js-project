<template>
  <div class="headerContainer">
    <div style="display: flex">
      <h1>Aligarh Shop</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
        <RouterLink to="/userList">User Record</RouterLink>
      </nav>
    </div>
    <div>
      <input class="searchBar" placeholder="Search Product" />
    </div>
    <div class="headerButton">
      <button style="margin-right: 10px">Cart</button>
      <button>Login</button>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.headerContainer {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #e1d0d0;
  margin: 8px;
}

.headerContainer .headerButton button {
  border-radius: 5px;
  font-weight: 600;
  width: 50px;
  height: 30px;
  cursor: pointer;
}

.headerContainer .searchBar {
  padding: 5px;
  border-radius: 5px;
  height: 35px;
  width: 400px;
}
.headerContainer .headerButton button:hover {
  background-color: rgb(148, 99, 99);
}

.headerContainer nav {
  margin-left: 11px;
  margin-top: 11px;
}
.headerContainer nav a {
  padding: 0px 5px 0px 5px;
}
</style>
