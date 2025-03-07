import ProjectCard from "./Card";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    image: "https://source.unsplash.com/400x300/?technology",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "An online store with full shopping cart functionality.",
    image: "https://source.unsplash.com/400x300/?shopping",
    link: "https://yourecommerce.com",
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with rich-text editing.",
    image: "https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    link: "https://yourblog.com",
  },
];

function Portfolio() {
  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-gray-400">Font-End & Back-End Projects</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
