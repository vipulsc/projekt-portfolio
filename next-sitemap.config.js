/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vipulsc.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,

  transform: async (config, path) => {
    const customConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };

    if (path === "/") {
      customConfig.priority = 1.0;
      customConfig.changefreq = "daily";
    }

    if (path === "/about" || path === "/projects" || path === "/contact") {
      customConfig.priority = 0.9;
      customConfig.changefreq = "weekly";
    }

    return customConfig;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://vipulsc.com/sitemap.xml"],
  },

  exclude: ["/api/*", "/_next/*", "/admin/*"],
};
