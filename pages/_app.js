
import React from 'react'
import App from 'next/app'
import i18n from '../i18n';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props   
    const { lang } = router.query 
    i18n.changeLanguage(lang)
      return (<Component {...pageProps} />)
  }
}

export default MyApp
 
