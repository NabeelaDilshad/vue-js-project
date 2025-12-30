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
import{ref} from "vue"
   const form = ref({
    name:"",
    email:"",
    mobileNumber:"",
    gender:"",
    country:"india",
    skill: []
   })

  const  nameInput= (event)=>{
    form.value.name= event.target.value
  }
  const emailInput=(event)=>{
     form.value.email= event.target.value
  }
  const mobileInput =(event)=>{

    form.value.mobileNumber=  event.target.value
  }
  const genderChange=(event ,gender)=>{
     if(event.target.checked == true){
      form.value.gender = gender
     } 
  }
  const changeCountry=(event)=>{
    form.value.country=event.target.value
  }
  const changeSkill =(event,skills)=>{
    const index=  form.value.skill.indexOf(skills)
      if(event.target.checked == true){
        form.value.skill.push(skills)
      }
      else{
       form.value.skill.splice(index,1)
      }
  }

</script>
<template>

  <form>
  <label for="name">Name:</label><br/>
  <input id="name"type="text" :value="form.name" @input="nameInput($event)" placeholder="username"/> <br/><br/>

   <label for="email">Email:</label><br/>
  <input id="email"type="text" :value= "form.email" @input= "emailInput($event)" placeholder="username"/> <br/><br/>

     <label for="mobnum">Mobilenumber:</label><br/>
  <input id="mobnum"type="text" :value="form.mobileNumber" @input="mobileInput($event)"  placeholder="username"/> <br/><br/>


  <lable>Gender:</lable><br/>
  <input type="radio" id="male" :value="form.gender" @change="genderChange($event , 'male')"   name="gender"/>
  <lable for="male">male</lable><br/>
   <input type="radio" id="female" :value="form.gender" @change="genderChange($event, 'female')"   name="gender"/>
  <lable for="female">female</lable><br/><br/>
  
  <label for="country">Country:</label><br/>
  <select id="country" :value="form.country" @change="changeCountry($event)">
    <option value="usa">USA</option>
     <option value="america">AMERICA</option>
      <option value="india">INDIA</option>
       <option value="pakistan">PAKISTAN</option>
        <option value="london">LONDON</option>
         <option value="canada">CANADA</option>
  </select><br/><br/>

  <label>Skills</label><br/>
  <input type="checkbox" id="javascipt" :value="form.skill"  @change=" changeSkill($event , 'Javascipt' )"   name="skills"/>
  <lable for="javascript">Javascript</lable><br/>
    <input type="checkbox" id="html" :value="form.skill"  @change="changeSkill($event ,'Html')"   name="skills"/>
  <lable for="html">Html</lable><br/>
   <input type="checkbox" id="react"  :value="form.skill"  @change="changeSkill($event,'React')"     name="skills"/>
  <lable for="react">React</lable><br/>
   <input type="checkbox" id="angular" :value="form.skill"  @change="changeSkill($event ,'Angular')"    name="skills"/>
  <lable for="angular">Angular</lable><br/>
   <input type="checkbox" id="vuejs" :value="form.skill"  @change="changeSkill($event,'Vuejs')"    name="skills"/>
  <lable for="vuejs">Vue js</lable><br/><br/>

  <button style="margin: 2px;">Reset</button>
  <button>Submit</button>
  </form>

  <p>userdata</p>
  <p>{{form}}</p>
</template>
<style></style>