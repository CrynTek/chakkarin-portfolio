function ProjectCard({ title, description, image, link }) {
    return (
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-5 w-full sm:w-60">
        <img className="rounded-lg w-full h-32 object-cover" src={image} alt={title} />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline text-white py-4 transition"
        >
          View Project
        </a>
      </div>
    );
  }
  
  export default ProjectCard;
  