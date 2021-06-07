<template>
<div>
 
 <section class="section-hero">
    <div class="container">
        <h1 class="hero-heading">{{$store.state.idioma.headlineHero}} <br/> {{$store.state.idioma.headlineHero2}}</h1>
        <p class="hero-subhead">{{$store.state.idioma.subheadHero}}</p>

        <div class="columns " style="    margin-top: 60px;">
            <div class="column is-3">
                <a href="/crear">
                    <div class="crear-producto">
                        <div class="div-block-2">
                            <div class="text-block"><strong class="bold-text">{{$store.state.idioma.pollHeadBlock}}</strong></div>
                            <div class="text-block-2">{{$store.state.idioma.pollSubBlock}}</div>
                        </div>
                        <div class="tag is-danger">
                            <div class="text-block-3">{{$store.state.idioma.tagGratis}}</div>
                        </div>
                    </div>
                </a>
                
        </div>

            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.qaHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.qaSubBlock}}</div>
                    </div>
                    <div class="tag is-danger">
                        <div class="text-block-3">{{$store.state.idioma.tagGratis}}</div>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.dateHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.dateSubBlock}}</div>
                    </div>
                    <div class="tag is-danger">
                        <div class="text-block-3">{{$store.state.idioma.tagGratis}}</div>
                    </div>
                </div>
            </div>

            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.cloudHeadBlock}} </strong></div>
                        <div class="text-block-2">{{$store.state.idioma.cloudSubBlock}}</div>
                    </div>
                    <div class="tag is-info">
                        <div class="text-block-3">{{$store.state.idioma.tagRegistro}}</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="columns ">
            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.rateHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.rateSubBlock}}</div>
                    </div>
                    <div class="tag is-info">
                        <div class="text-block-3">{{$store.state.idioma.tagRegistro}}</div>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <a href="/sorteos">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.giveHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.giveSubBlock}}</div>
                    </div>
                    <div class="tag is-info">
                        <div class="text-block-3">{{$store.state.idioma.tagRegistro}}</div>
                    </div>
                </div>
                </a>
            </div>
            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.quizzHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.quizzSubBlock}}</div>
                    </div>
                    <div class="tag is-success">
                        <div class="text-block-3">{{$store.state.idioma.tagPro}}</div>
                    </div>
                </div>
            </div>

            <div class="column is-3">
                <div class="crear-producto">
                    <div class="div-block-2">
                        <div class="text-block"><strong class="bold-text">{{$store.state.idioma.triviaHeadBlock}}</strong></div>
                        <div class="text-block-2">{{$store.state.idioma.triviaSubBlock}}
                        </div>
                    </div>
                    <div class="tag is-success">
                        <div class="text-block-3">{{$store.state.idioma.tagPro}}</div>
                    </div>
                </div>
            </div>
            
            

        </div>

        <div class="button-group">
            <a href="/dashboard" class="buttonN blue ">{{$store.state.idioma.buttonHero}}</a>
            <a href="/dashboard" class="buttonN ">{{$store.state.idioma.buttonSubHero}}</a>
        </div>

        <img src="img/portada2.png"
            width="940" 
            alt="" class="image">

            <div class="div-block-14"><h3 class="heading-3">{{$store.state.idioma.brandTitle}}</h3><div class="w-layout-grid grid-2"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b3e9785508bb3835515e7a_home-logo-facebook.svg" loading="lazy" alt="" class="image-4"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b3e987d63585722a12233d_home-logo-amazon.svg" loading="lazy" alt="" class="image-3"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b3e9938e7b7ae950e9922d_home-logo-linkedin.svg" loading="lazy" alt=""><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b3e99cef9192be59080443_home-logo-whatsapp.svg" loading="lazy" alt=""><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b3e9a5388e8b33fad8a14e_home-logo-mailchimp.svg" loading="lazy" alt=""></div></div>
    </div>
</section>



<section class="section-hero">
    <div class="container">
        <h2 class="section-title">{{$store.state.idioma.callHeadline}}</h2>
        <p class="section-subtitle">{{$store.state.idioma.callSubheadline}}</p>

        <div class="columns">
            <div class="column">
                <img src="img/portada3.png"
                    width="452px"
                    alt="">
            </div>
            <div class="column" style="    padding-top: 79px;
            text-align: left;">
                <img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d5919aa5c02_4-icon-chrome.png"
                    width="37px" alt="" class="grey-icon">
                    <img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d4db8aa5c05_4-icon-fire.png"
                    width="37px" alt="" class="grey-icon">
                    <img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d8446aa5c0c_4-icon-ie.png"
                    width="37px" alt="" class="grey-icon">
                   
                   
                    <img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d71f0aa5c0e_4-icon-safari.png"
                    width="37px" alt="" class="grey-icon">
                <h3>{{$store.state.idioma.call2Headline}}</h3>
                <p>{{$store.state.idioma.call2Subheadline}}</p><img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d4088aa5c10_5-icon-apple.png"
                    width="37px" alt="" class="grey-icon"><img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d02c7aa5c11_6-icon-android.png"
                    width="37px" alt="" class="grey-icon"><img
                    src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d4894aa5c14_7-icon-microsoft.png"
                    width="37px" alt="" class="grey-icon">
                <h3>{{$store.state.idioma.call3Headline}}</h3>
                <p>{{$store.state.idioma.call3Subheadline}}</p>
            </div>

        </div>

    </div>
</section>



<section class="section-hero section-grey ">
    <div class="container">
        <h2 class="section-title">{{$store.state.idioma.productHead}}</h2>
        <p class="section-subtitle">{{$store.state.idioma.productSubhead}}</p>
        <div class="columns">
            <div class="column">
                <div class="circle">
                    <div class="numberM">1</div><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d52ebaa5c01_8-layout1.png"
                        width="243px" alt="" class="frames">
                </div>
                <h3>{{$store.state.idioma.product1Head}}</h3>
                <p>{{$store.state.idioma.product1Subhead}}</p>
            </div>
            <div class="column">
                <div class="circle">
                    <div class="numberM">2</div><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d00ccaa5c00_8-layout2.png"
                        width="243px" alt="" class="frames">

                </div>
                <h3>{{$store.state.idioma.product2Head}}</h3>
                <p>{{$store.state.idioma.product2Subhead}}</p>
            </div>
            <div class="column">
                <div class="circle">
                    <div class="numberM">3</div><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d1e59aa5bfe_8-layout3.png"
                        width="243px" alt="" class="frames">
                </div>
                <h3>{{$store.state.idioma.product3Head}}</h3>
                <p>{{$store.state.idioma.product3Subhead}}</p>
            </div>

        </div>

    </div>
</section>

<section class="section-hero">
    <div class="container">
        <h2 class="section-title">{{$store.state.idioma.featureHead}}</h2>
        <div class="columns">
            <div class="column">
                <div class="icons"><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d6b93aa5c07_9-icon2-brush.png"
                        width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature1Head}}</h3>
                <p>{{$store.state.idioma.feature1Subhead}}</p>
            </div>
            <div class="column">
                <div class="icons"><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d9ae8aa5c08_9-icon2-chat.png"
                        width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature2Head}}</h3>
                <p>{{$store.state.idioma.feature2Subhead}}</p>
            </div>
            <div class="column">
                <div class="icons"><img
                        src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d4d93aa5c09_9-icon2-drops.png"
                        width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature3Head}}</h3>
                <p>L{{$store.state.idioma.feature3Subhead}}</p>
            </div>

        </div>


        <div class="columns">
            <div class="column">
                <div class="icons"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d7e45aa5c0a_9-icon2-eye.png" width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature4Head}}</h3>
                <p>{{$store.state.idioma.feature4Subhead}}</p>
            </div>
            <div class="column">
                <div class="icons"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296daeccaa5c0b_9-icon2-phone.png" width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature5Head}}</h3>
                <p>{{$store.state.idioma.feature5Subhead}}</p>
            </div>
            <div class="column">
                <div class="icons"><img src="https://uploads-ssl.webflow.com/60b13cec71296d20a8aa5bf0/60b13cec71296d716baa5c16_9-icon2-video.png" width="25" alt=""></div>
                <h3>{{$store.state.idioma.feature6Head}}</h3>
                <p>{{$store.state.idioma.feature6Subhead}}</p>
            </div>

        </div>

        <div class="button-group">
            <a href="/dashboard" class="buttonN blue ">{{$store.state.idioma.buttonHero}}</a>
            <a href="/dashboard" class="buttonN ">{{$store.state.idioma.buttonSubHero}}</a>
        </div>

    </div>
</section>

</div>
</template>

<script>
export default {
  data() {
    return {
		navBar: false, 
	};
  },

  methods: {
    async getTest() {
      const response = await this.$axios.$post("_get_test", {
        id: 33,
        size: "small",
      });

      console.log(response);
    },
  },
  mounted() {
     
  },
};
</script>
