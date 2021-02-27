<template>
  <div class="container">
        <div id="header">
         <div id="logo">
            <h3><span>Bricolage</span> Chez Amine</h3>
         </div>
         <nav class="navbar">
               <router-link :to="{name: 'hello'}">
            <a href="#"><strong>Accueil</strong></a>
               </router-link>
            <a href="#"><strong>Trouver un bricoleur </strong></a>
              <router-link :to="{name: 'Login'}">
            <a href="#" class="last"><strong>Connexion</strong></a>
              </router-link>
                     <router-link :to="{name: 'SignUp'}">
            <a href="#" class="last"><strong>Inscription</strong></a>
                     </router-link>
         </nav>
    </div>
    </div>
</template>

<script>
export default {
name: "PageHeader"
}
</script>

<style scoped>
*{
padding: 0px;
margin: 0px;
font-family: poppins, sans-serif;
font-weight: 700;
box-sizing: border-box;
}

#header{
padding: 20px;
width: 100%;
background: #FFF;
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
}

#header #logo{
font-style: italic;
font-size: 20px;
}

#header #logo span{
color: #564FCC;
}
#header nav{
color: #000;
}

#header nav a{
font-size: 14px;
text-decoration: none;
padding: 10px;
text-align: center;
color: black;
}

#header nav a:hover{
opacity: 0.9;
}
#header .last{
color: white;
background: #6C63FF;
padding: 10px 20px;
margin-left: 30px;
border-radius: 30px;
}
</style>