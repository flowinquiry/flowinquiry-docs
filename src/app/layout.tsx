import "./globals.css";

import type { Metadata } from "next";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Link, Navbar } from "nextra-theme-docs";
import type { FC, ReactNode } from "react";
import FlowInquiryIcon from "@components/app-logo";

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
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FlowInquiryIcon size={50} />
        <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          FlowInquiry
        </span>
      </div>
    }
    projectLink="https://github.com/flowinquiry"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="mt-6 text-xs">
      Copyright © {new Date().getFullYear()}{" "}
      <a href={"https://flowinquiry.io"}>FlowInquiry</a>. All rights reserved.
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
