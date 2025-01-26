import "./globals.css";

import type { Metadata } from "next";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Link, Navbar } from "nextra-theme-docs";
import type { FC, ReactNode } from "react";

export const metadata: Metadata = {
  description: "Make beautiful websites with Next.js & MDX.",
  metadataBase: new URL("https://https://flowinquiry.io"),
  keywords: [
    "FlowInquiry",
    "Next.js",
    "React",
    "JavaScript",
    "MDX",
    "Markdown",
    "Static Site Generator",
  ],
  generator: "Next.js",
  applicationName: "FlowInquiry",
  appleWebApp: {
    title: "FlowInquiry",
  },
  title: {
    default: "FlowInquiry – Next.js Static Site Generator",
    template: "%s | FlowInquiry",
  },
  openGraph: {
    url: "./",
    siteName: "FlowInquiry",
    locale: "en_US",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
};

const banner = (
  <Banner dismissible={false}>
    🚀 Want to try FlowInquiry? Navigate to flowinquiry.io{" "}
    <Link href="https://flowinquiry.io">and sign up now!</Link>.
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      // <NextraLogo
      //     height="20"
      //     className={cn(
      //         '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
      //         'hover:[mask-position:100%] hover:[transition:mask-position_1s_ease]'
      //     )}
      // />
      <>Logo</>
    }
    projectLink="https://github.com/flowinquiry"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="FlowInquiry homepage"
      href="https://flowinquiry.io"
    >
      Powered by
      {/*<VercelLogo height="20" />*/}
      <>FlowInquiry Logo</>
    </a>
    <p className="mt-6 text-xs">
      Copyright © {new Date().getFullYear()} FlowInquiry. All rights reserved.
    </p>
  </Footer>
);

const RootLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/flowinquiry"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
