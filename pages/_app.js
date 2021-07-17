import 'bootstrap/dist/css/bootstrap.min.css'

import '@fontsource/abril-fatface'
import '@fontsource/bungee'
import '@fontsource/lato'
import '@fontsource/montserrat'
import '@fontsource/roboto'
import '@fontsource/roboto-slab'

import KleptoLayout from "../layouts/KleptoLayout"

function MyApp({ Component, pageProps }) {
  return (
      <KleptoLayout>
        <Component {...pageProps} />
      </KleptoLayout>
  )
}

export default MyApp
