export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
  },
  user_guides: {
    type: "page",
    title: "User Guides",
    items: {
      introduction: "Introduction",
      getting_started: "Get started",
      workflow_management: "Workflow management",
      working_with_requests: "Working with requests",
    },
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
          overview: {
            title: "Overview",
            items: {
                high_level_architect: "High-level architect",
                data_layer: "Data Layer"
            }
          },
          database_migration: "Database migration",
        },
      },
      deployment: {
        title: "Deployment",
        items: {
          build_docker_image: "Build FlowInquiry Docker Images (Optional)",
          docker: "Docker",
          kubernetes: "Kubernetes",
        },
      },
    },
  },
  how_to_contributes: {
    title: "How to Contribute",
    type: "page",
    items: {
      your_action_is_meaningful_to_us: "Your Action Is Meaningful to Us",
      your_first_pr: "Your first PR",
    }
  },
  about: {
    type: "page",
    title: "About",
  },
};
