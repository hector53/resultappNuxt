module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "TItulo de la app",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "descripcion de la app" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/faviconR.png' }, 
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'}, 

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Varela+Round&display=swap' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/static/css/bulma.css',
    '~/static/css/poll.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  axios: {
    //  baseURL: 'https://indiehackersapi.hectoracosta.site/api',
    baseURL: 'http://127.0.0.1:5000/api/',
    },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    optimization: {
     splitChunks: {
       cacheGroups: {
         styles: {
           name: 'styles',
           test: /\.(css|vue)$/,
           chunks: 'all',
           enforce: true
         }
       }
     }
   },
 
  //analyze: true,
    
   }
}
