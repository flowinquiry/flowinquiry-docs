export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
  },
  developer_guides: {
    type: "page",
    title: "Developer Guides",
    items: {
      index: "Programming languages and development tools",
      frontend: "Front-end",
      backend: {
        title: "Back-end",
        items: {
          getting_started: "Getting-started",
          high_level_architect: "High-level architect",
          database_migration: "Database migration",
        },
      },
      deployment: "Deployment",
      how_to_contributes: "How to contribute",
    },
  },
  about: {
    type: "page",
    title: "About",
  },
};
