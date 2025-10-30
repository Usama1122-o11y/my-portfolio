import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    },
    {
      title: "Pakistan Tour Website",
      image:
        "https://media.gettyimages.com/id/1319188329/photo/woman-looking-at-mountains-of-northern-pakistan-from-window-in-the-van.jpg?s=1024x1024&w=gi&k=20&c=Ls3V0rp2_-GJ4snFbQJeTcOcgssj0zdbnI7Mjf0mjHw=",
    },
    {
      title: "Tic Tac Toe Game",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzu_EbS4CfCGvwMltZjZG90b4zE2oDFhh5w&s",
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>

        <div className="project-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
