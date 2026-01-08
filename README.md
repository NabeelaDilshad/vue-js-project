# my-vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



<script setup>
import { ref } from 'vue'

const userName = ref("")
const userAge = ref('')
const passWord = ref('12345')
const country = ref('')
const gender = ref('male')




const countryList = [
  { name: 'India', value: 'india' },
  { name: 'United States', value: 'united_states' },
  { name: 'United Kingdom', value: 'united_kingdom' },
  { name: 'Canada', value: 'canada' },
  { name: 'Australia', value: 'australia' },
  { name: 'Germany', value: 'germany' },
  { name: 'France', value: 'france' },
  { name: 'Japan', value: 'japan' },
  { name: 'China', value: 'china' },
  { name: 'Brazil', value: 'brazil' }
];



const Save = () => {
   /*
   const uname = document.getElementById("username").value
   const uage = document.getElementById("age").value
   const upassword = document.getElementById("passWord").value
   userName.value = uname
   userAge.value = uage
   passWord.value = upassword
   */

}

/*
const handleuserName = ($event) => {
   userName.value = $event.target.value
}

const handleuserAge = ($event) => {
   userAge.value = $event.target.value
}

const handleuserPassword = ($event) => {
    passWord.value = $event.target.value
}

*/

const handleCountry = ($event) =>{
  country.value= $event.target.value
}

const handleGender = ($event) =>{
  gender.value = $event.target.value
}
</script>



<template>
     <form @submit.prevent="Save">
        <lable for="username">First name</lable>
        <input v-model="userName" id="username" placeholder="enter Your name"  />
        <br/>
        <br/>

        <lable for="age">Age</lable>
        <input v-model="userAge" id="age" placeholder="enter Your age"  />
        <br/>
        <br/>

        <lable for="passWord">PassWord</lable>
        <input v-model="passWord" id="passWord" placeholder="enter Your PassWord"  />
        <br/>
        <br/>

         <lable>Gender</lable>
          <input id="male" type="radio" value="male" name="gender" :checked="gender === 'male'" @change="handleGender" />
          <lable for="male">Male</lable>
          <input id="female" type="radio" value="female" name="gender" :checked="gender === 'female'" @change="handleGender" />
          <lable for="female">Female</lable>
         <br/>
         <br/>
      
         <lable for="country">Country</lable>
         <select id="country" :value="country" @change="handleCountry">
            <option v-for="item in countryList" :value="item.value">{{item.name}}</option>
         </select>

        <br/>
      <br/>
        
        <button> Save</button>
     </form>


    <p>userName - {{userName }}</p>
    <p>age --  {{userAge }}</p>
     <p> passWord - {{passWord}}</p>
    <p> conutry - {{country}}</p>
     <p> gender - {{gender}}</p>
     
     

</template>