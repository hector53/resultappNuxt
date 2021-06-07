<template>
<header class="nav-bar">
        <div class="container" style="max-width: 940px;">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand mr-2 is-flex is-align-items-center">
                   <a href="/" class=" is-flex is-align-items-center"><div class="logotipo"><div class="logotipo-fill"></div></div>
                    <div class="company">result.app</div></a>
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                          <button class="button buttonLang" aria-haspopup="true" aria-controls="dropdown-menu3">
                            <span>
                               {{languaje}}
                            </span>
                            <span class="icon is-small">
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            </span>
                          </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                          <div class="dropdown-content">
                              <div id="appLang">
                                <a  class="dropdown-item" @click="cambiarIdioma($store.state.lang)" >
                                    {{languajeDrop}}
                                </a>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                    
                    <a role="button" class="navbar-burger" @click="navBar = !navBar" 
					:class="{'is-active': navBar}" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>

                <div class="navbar-menu is-hidden-desktop menuPhone " :class="{'dBlock': navBar}" >
                    <div class="navbar-start">
                        <div class="my-4">
                            <a class="navbar-item title is-5 my-2" href="/">PRODUCTOS</a>
                        </div>
                        <div class="my-4">
                            <a class="navbar-item title is-5 my-2" href="/">PRECIOS</a>
                        </div>

                            <div class="navbar-item is-hidden-desktop">
                                <a href="/dashboard" class="button is-light is-fullwidth title is-5">DASHBOARD</a>
                                <a href="/logout" class="button is-light is-fullwidth title is-5">LOGOUT</a>
                            </div>
                            <div class="navbar-item is-hidden-desktop">
                            <a href="/login" class="button is-light is-fullwidth title is-5">LOGIN</a>
                            <a href="/signup" class="button is-light is-fullwidth title is-5">SIGNUP</a>
                            </div>

                    </div>
                </div>

                <div class="navbar-menu">


                    <div class="navbar-end">
                        <a class="navbar-item">
                            PRODUCTOS
                        </a>
                        <a class="navbar-item">
                            PRECIOS
                        </a>
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-info" href="/dashboard" style="font-size: 14px; background-color:#59b1ff">
                                       DASHBOARD
                                    </a>
                                    <a class="button is-info" href="/logout" 
                                    style="font-size: 14px; background-color:#59b1ff">
                                    SALIR
                                    </a>
                                </div>
                            </div>
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-info" href="/login"
                                     style="font-size: 14px; background-color:#59b1ff">
                                     LOGIN
                                    </a>
                                    <a class="button is-info" href="signup"
                                     style="font-size: 14px; background-color:#59b1ff">
                                     SIGNUP
                                    </a>
                                    
                                </div>
                            </div>
                        



                    </div>
                </div>
            </nav>

        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        navBar: false, 
        languaje: "English", 
        languajeDrop: "Español"
	};
  },
  methods: {
      cambiarIdioma(val){
          if(val==0){
               this.$store.commit('setIdioma', 1);
               this.$store.commit('setLang', 1);
                 this.languaje = 'Español'
          this.languajeDrop = 'English'
           this.$cookies.set(
                "_lang_poll",
                '1',
                {
                path: "/",
                maxAge: 10000 * 60 * 24 * 7,
                }
                );
          }else{
              this.$store.commit('setIdioma', 0);
               this.$store.commit('setLang', 0);
               this.languaje = 'English'
          this.languajeDrop = 'Español'
          
           this.$cookies.set(
                "_lang_poll",
                '0',
                {
                path: "/",
                maxAge: 10000 * 60 * 24 * 7,
                }
                );
          }
      }
  },
  mounted() {
      if(this.$store.state.lang == 0){
          this.languaje = 'English'
          this.languajeDrop = 'Español'
      }else{
          this.languaje = 'Español'
          this.languajeDrop = 'English'
      }
  },
};
</script>
