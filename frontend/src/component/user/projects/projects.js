import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    { id: 1, name: "Project A", imageUrl: "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/uzfho1fszbsmym1vbgyu.jpg" },
    { id: 2, name: "Project B", imageUrl: "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/azqo7gqtzganz5ks7tcy.jpg" },
    { id: 3, name: "Project C", imageUrl: "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/oywawqucufwdk68luqet.jpg" },
    { id: 4, name: "Project D", imageUrl: "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077969/qo9azmgrfmmj8ckwz4po.jpg" },
    { id: 5, name: "Project E", imageUrl: "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077969/s1kuactwsqzbhu3uj7m7.jpg" },
   
  ];

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-6">
                <Link to="/" className="btn btn-secondary mb-4">
                    <i className="bi bi-arrow-left"></i>
                </Link>
            </div>
        </div>
     
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
            <Link to={`/detail`}>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="card-img-top"
              />
            </Link>
              <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
