/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://docs.flowinquiry.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://docs.flowinquiry.com/sitemap-0.xml"],
  },
};
