import { useRouter } from "next/router";
import Script from "next/script";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/flowinquiry",
  },
  docsRepositoryBase: "https://github.com/flowinquiry/flowinquiry-docs",
  logo: (
    <>
      <img alt="FlowInquiry Logo" src="/logo.png" />
    </>
  ),
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const isDefault = route === "/" || !config.title;
    const image =
      "https://docs.flowinquiry.io/" +
      (isDefault ? "og.jpeg" : `api/og?title=${config.title}`);

    const description =
      config.frontMatter.description ||
      "FlowInquiry: Streamline workflows and manage inquiries effortlessly. Optimize collaboration, enhance productivity, and simplify tracking. Try FlowInquiry today!";
    const title = config.title + (route === "/" ? "" : " - FlowInquiry");

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="flowinquiry" />
        <meta name="twitter:url" content="https://flowinquiry.io" />
        <meta name="apple-mobile-web-app-title" content="FlowInquiry" />
        <meta
          name="keywords"
          content="workflow management, inquiry tracking, collaboration tools, team productivity, on-call, case management"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4LSJST7J1G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-4LSJST7J1G');
          `}
        </Script>
      </>
    );
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  gitTimestamp: null,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="nextra-focus flex items-center gap-1 text-current"
            target="_blank"
            rel="noreferrer"
            title="flowinquiry.io homepage"
            href="https://flowinquiry.io"
          >
            <span>Powered by FlowInquiry</span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The FlowInquiry Project.
        </p>
      </div>
    ),
  },
};

export default config;
