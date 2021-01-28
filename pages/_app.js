import { ChakraProvider } from "@chakra-ui/react"

import { Layout } from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return <ChakraProvider resetCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
