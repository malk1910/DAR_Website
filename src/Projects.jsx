import { Pagination } from "swiper/modules";
import PageHero from "./PageHero";
import ProjectDetails from "./ProjectDetails";
import bg from "./assets/helmetConst.png";
// import projects from "./data/projectsData";
import { projects, services } from "./data/projectsData";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

const [searchParams]=useSearchParams();

const initialService=searchParams.get("service") || "";

const [selectedService,setSelectedService]=useState(initialService);

const [category,setCategory]=useState("All");

const [search,setSearch]=useState("");

const [currentPage, setCurrentPage] = useState(1);

const projectsPerPage = 9;

useEffect(() => {
    setSelectedService(initialService);
  }, [initialService]);

  const categories = [
    "All",
    ...new Set(projects.map(project => project.category))
  ];

    useEffect(() => {
        setCurrentPage(1);
      }, [category, search, selectedService]);

    const filteredProjects = projects.filter((project) => {
        const serviceMatch =
          selectedService === "" ||
          project.service.includes(selectedService);
      
        const categoryMatch =
          search.trim() !== "" ||
          category === "All" ||
          project.category === category;
      
        // const searchMatch =
        //   project.title.toLowerCase().includes(search.toLowerCase());
        const translatedTitle = t(`projects.project${project.id}.title`);
const searchMatch = translatedTitle
  .toLowerCase()
  .includes(search.toLowerCase());
      
        return serviceMatch && categoryMatch && searchMatch;
      });

// for Pagination
const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );
  
  const startIndex =
    (currentPage - 1) * projectsPerPage;
  
  const currentProjects =
    filteredProjects.slice(
      startIndex,
      startIndex + projectsPerPage
    );
  return (
    <>
     <PageHero
  title={t("projects.title")}
  subtitle={t("projects.subtitle")}
  // bgImage={bg}
/>

      <section className="projects-page">
        <div className="container px-5">

          {/* Filter */}

          <div className="project-filter">

          
<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

{categories.map(cat=>

<option key={cat} value={cat}>
  {cat === "All"
    ? t("projects.all")
    : t(`categories.${cat}`)}
</option>
)}

</select>


<div className="search-box">
    <i className="fa-solid fa-magnifying-glass"></i>
<input

placeholder={t("projects.search")}

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>
</div>


<button
 className="reset-btn"
 onClick={()=>{

setCategory("All");

setSearch("");

setSelectedService("");

}}

>

{t("projects.reset")}

</button>

          </div>

          {/* Cards */}

          <div className="row g-4">


{currentProjects.map((project, index) => (



              <div
                className="col-md-6 col-lg-4"
                key={index}
              >


<Link to={`/projects/${project.id}`} className="text-decoration-none">
  <div className="project-card-page">

    <img src={project.image} alt={t(`projects.project${project.id}.title`)} />

    <div className="project-info">
      
    <span>
  {t(`categories.${project.category}`)}
</span>
<h4>{t(`projects.project${project.id}.title`)}</h4>
    </div>

  </div>
</Link>
              </div>

            ))}

          </div>


          {currentProjects.length === 0 && (
  <div className="text-center py-5">

    <h4>{t("projects.noProjects")}</h4>

  </div>
)}


          <div className="pagination-wrapper">

<button
  onClick={() => setCurrentPage(currentPage - 1)}
  disabled={currentPage === 1}
>
  <i className="fa-solid fa-chevron-left"></i>
</button>

{Array.from({ length: totalPages }, (_, index) => (

  <button
    key={index}
    className={
      currentPage === index + 1
        ? "active-page"
        : ""
    }
    onClick={() => setCurrentPage(index + 1)}
  >
    {index + 1}
  </button>

))}

<button
  onClick={() => setCurrentPage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  <i className="fa-solid fa-chevron-right"></i>
</button>

</div>

        </div>
      </section>
    </>
  );
}