
import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n.js'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props    
      return (<Component {...pageProps} />)
  }
}

export default appWithTranslation(MyApp)
 
