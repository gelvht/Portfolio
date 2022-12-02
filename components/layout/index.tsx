import Head from "next/head";

import { ILayoutProps } from "./layout";

import { CardStyle, ContainerStyle } from "../container/index";
import Header from "../header/index";
import Footer from "../footer/index";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <ContainerStyle>
      <Head>
        <title>Gelareh Vahdat</title>
      </Head>
      <CardStyle>
        <Header />
        {children}
        <Footer />
      </CardStyle>
    </ContainerStyle>
  );
};
export default Layout;
