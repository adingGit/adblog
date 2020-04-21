
module.exports = {
  mode: 'universal',
  
  /*
  ** Headers of the page
  */
  head: {
    title: '阿丁的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: '3000',
    host: '0.0.0.0'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/iconfont.css',
    '@/assets/css/iframe.css',
    '@/assets/css/pagination.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    { src: '@/plugins/element-ui', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n', 'element-ui'],
    // 开启打包分析
    //analyze: true, 	
    //assetFilter: function(assetFilename) {	    		
    //  return assetFilename.endsWith('.js');	    	
    //},
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    }
  },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  //generate: {
  //  routes: ['/', '/about', '/zh', '/zh/about', 'ading']
  //}
}
