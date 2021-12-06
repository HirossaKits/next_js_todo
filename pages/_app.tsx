import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
// import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* <Provider session={pageProps.session}> */}
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* </Provider> */}
    </RecoilRoot>
  );
}

export default MyApp;
