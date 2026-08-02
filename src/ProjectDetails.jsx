
import { Link, useParams } from "react-router-dom";
import { projects } from "./data/projectsData";
import PageHero from "./PageHero";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function ProjectDetails() {
  const { t } = useTranslation();

      const { id } = useParams();

  const project = projects.find(
    p => p.id === Number(id)
  );


  if (!project) {
    return <h2>{t("projectDetails.notFound")}</h2>;  }



    return(
        <>
<div className="ProjectDetails">

<PageHero

  key={project.id}



  title={t(`projects.project${project.id}.title`)}
  bgImage={project.image}
  breadcrumb={
    <>
     <Link to="/">
  {t("navbar.home")}
</Link>

{" / "}

<Link to="/Projects">
  {t("navbar.projects")}
</Link>

{" / "}

{t(`projects.project${project.id}.title`)}
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
        <span>{t("projectDetails.client")}</span>
        <h4>{t(`projects.project${project.id}.client`)}</h4>
          </div>

        <div className="meta-item">
        <span>{t("projectDetails.category")}</span>
        <h4>{t(`categories.${project.category}`)}</h4>
          </div>

        <div className="meta-item">
        <span>{t("projectDetails.services")}</span>
          <div className="service-tags">

          {project.service.map((item, index) => (

<span key={index}>
  {t(`services.${item}`)}
</span>

))}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<section className="project-scope">

       <div className="container">
          <div className="section-header">
            <h2 className="section-title">
  {t("projectDetails.scope")}
</h2>
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

                <p>{t(item)}</p>

              </div>

            ))}

          </div>
                  </div>

      </section>


<section className="gallery-section">

<div className="container">

<h2 className="section-title">
  {t("projectDetails.gallery")}
</h2>
<div className="gallery-grid">

{project.gallery.map((img,index)=>(



<div className="gallery-item" key={index}>
<img src={img}/>

</div>

))}

</div>

</div>

</section>
</div>


    </>
  );

}