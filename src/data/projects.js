// Each project's data comes only from confirmed notes.
// liveUrl / repoUrl / description are left null when not yet confirmed —
// the ProjectCard component shows "Coming soon" instead of guessing a link.

export const projects = [
  {
    id: "stylic",
    name: "Stylic.pk",
    description:
      "A full-stack e-commerce application for a handmade and beaded jewelry brand. Customers browse the product catalog, add items to a cart, and place orders through a live frontend connected to a working backend API.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB"],
    status: "Completed",
    liveUrl: null, // TODO: confirm live URL
    repoUrl: null, // TODO: confirm repo link
  },
  {
    id: "doctor-prescription",
    name: "Doctor Prescription Project",
    description: null, // TODO: add project description
    stack: [], // TODO: confirm tech stack
    status: "In Progress",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "ecommerce-store",
    name: "Ecommerce-Store",
    description:
      "A full-stack e-commerce store with frontend, backend, and MongoDB integration — including CRUD operations and order handling.",
    stack: [], // TODO: confirm exact tech stack
    status: "Completed",
    liveUrl: null, // TODO: confirm live URL
    repoUrl: null, // TODO: confirm repo link
  },
  {
    id: "silent-language-coach",
    name: "Silent Language Coach",
    description: null, // TODO: add project description
    stack: [],
    status: null, // TODO: confirm status
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "greencart",
    name: "GreenCart",
    description:
      "A full-stack e-commerce application with user authentication, an admin dashboard, and Stripe-based checkout.",
    stack: ["React", "Context API", "Node.js", "Express.js", "MongoDB", "Stripe"],
    status: "Completed",
    liveUrl: "https://green-cart-mern-ashen.vercel.app/",
    repoUrl: "https://github.com/Maniha-dev/Green-Chart-MERN",
  },
  {
    id: "edupanda",
    name: "EduPanda",
    description: null, // TODO: add project description
    stack: [],
    status: null, // TODO: confirm status
    liveUrl: null,
    repoUrl: null,
  },
];

export const contactEmail = "maneehanasir.2024@gmail.com";
