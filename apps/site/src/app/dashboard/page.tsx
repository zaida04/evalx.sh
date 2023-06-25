export default function Page() {
  return (
    <div className="container flex flex-col gap-8">
      <h2>Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="hover:shadow-2xl hover:shadow-base-content transition-shadow px-6 py-8 border-2 border-base-content rounded-xl gap-4 flex flex-col">
      <h3>Example Project One</h3>
      <p className="text-md">
        Example Project One Description of stuff long maybe potentially idk
      </p>
    </div>
  );
}
