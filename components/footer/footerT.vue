<template>
<footer class="section-footer">
        <div class="w-container isFlexCenter">
            <div class="columns">
                <div class="column">
                   
                    <div class="div-block-16">
                        <a href="/" class=" is-flex is-align-items-center"><div class="logotipo-dark">
                            <div class="logotipo-fill"></div></div>
                            <div class="company">result.app</div></a>
                    </div>
                   
                    <div class="div-block-15"><a href="#" class="social-icon w-inline-block">
                        <img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d43d2aa5c12_14-social-email.png" width="20" alt=""></a><a href="#" target="_blank" class="social-icon w-inline-block"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d0b0faa5c13_14-social-facebook.png" width="20" alt=""></a><a href="#" target="_blank" class="social-icon w-inline-block"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296de436aa5c15_14-social-twitter.png" width="20" alt=""></a></div>
                  
                </div>
                <div class="column" >
                    <h3 class="heading-2">{{idioma.footer1Head}}</h3>
                    <a href="#" class="link-3">{{idioma.footer1Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer2Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer3Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer4Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer5Link}}</a>
                </div>

                <div class="column">
                    <h3 class="heading-2">{{idioma.footer2Head}}</h3>
                    <a href="#" class="link-3">{{idioma.footer6Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer7Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer8Link}}</a>
                    <a href="#" class="link-3">{{idioma.footer9Link}}</a>
                </div>
              
              </div>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
        idioma: {}
	};
  },
  methods: {

  },
  mounted() {
       this.idioma = this.$store.state.idioma
  },
};
</script>

 