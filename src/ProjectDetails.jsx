
import { Link, useParams } from "react-router-dom";
import { projects } from "./data/projectsData";
import PageHero from "./PageHero";

export default function ProjectDetails() {

      const { id } = useParams();

  const project = projects.find(
    p => p.id === Number(id)
  );

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

    return(
        <>
{/* <PageHero
  title={project.title}
  bgImage={project.image}
/> */}

<PageHero
  title={project.title}
//   subtitle={project.category}
  bgImage={project.image}
  breadcrumb={
    <>
      <Link to="/">Home</Link>
      {" / "}
      <Link to="/Projects">Projects</Link>
      {" / "}
      {project.title}
    </>
  }
/>

<section className="project-overview">
  <div className="container">

    <div className="project-card">

      <img
        src={project.image}
        className="project-cover"
      />

      <div className="project-meta">

        <div className="meta-item">
          <span>CLIENT</span>
          <h4>{project.client}</h4>
        </div>

        <div className="meta-item">
          <span>CATEGORY</span>
          <h4>{project.category}</h4>
        </div>

        <div className="meta-item">
          <span>SERVICES</span>

          <div className="service-tags">

            {project.service.map((item,index)=>

              <span key={index}>
                {item}
              </span>

            )}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<section className="project-scope">

       <div className="container">
          <div className="section-header">
            {/* <small>OUR WORK</small> */}
            <h2 className="section-title">Project Scope</h2>
          </div>
          <div className="scope-list">
            {project.scope.map((item,index)=>(

              <div
                className="scope-row"
                key={index}
              >

                <span>
                  {String(index+1).padStart(2,"0")}
                </span>

                <p>{item}</p>

              </div>

            ))}

          </div>
                  </div>

      </section>

{/* <section className="scope-section">

<div className="container">

<h2>Scope Of Work</h2>

<div className="scope-grid">

{project.scope.map((item,index)=>(

<div
className="scope-card"
key={index}
>

<div className="scope-number">
0{index+1}
</div>

<p>{item}</p>

</div>

))}

</div>

</div>

</section> */}
<section className="gallery-section">

<div className="container">

<h2 className="section-title">Project Gallery</h2>

<div className="gallery-grid">

{project.gallery.map((img,index)=>(

<div className="gallery-item" key={index}>

<img src={img}/>

</div>

))}

</div>

</div>

</section>



    </>
  );

}