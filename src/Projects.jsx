import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
// import projects from "./data/projectsData";
import { projects, services } from "./data/projectsData";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Projects() {

   
//   const filteredProjects = projects.filter((project) => {


//     if (search.trim() !== "") {
//       return project.title
//         .toLowerCase()
//         .includes(search.toLowerCase());
//     }
// const serviceMatch =
// selectedService === "" ||
// project.service.includes(selectedService);

// const filteredProjects = projects.filter(project => {

//     const serviceMatch =
//       selectedService === "" ||
//       project.service.includes(selectedService);
  
//     const searchMatch =
//       project.title.toLowerCase().includes(search.toLowerCase());
  
//     return serviceMatch && searchMatch;
  
//   });
 
    // return category === "All" || project.category === category;
//   });


const [searchParams]=useSearchParams();

const initialService=searchParams.get("service") || "";

const [selectedService,setSelectedService]=useState(initialService);

const [category,setCategory]=useState("All");

const [search,setSearch]=useState("");

useEffect(() => {
    setSelectedService(initialService);
  }, [initialService]);

  const categories=[
    "All",
    ...new Set(projects.map(project=>project.category))
    ];

    const filteredProjects = projects.filter((project) => {
        const serviceMatch =
          selectedService === "" ||
          project.service.includes(selectedService);
      
        const categoryMatch =
          search.trim() !== "" ||
          category === "All" ||
          project.category === category;
      
        const searchMatch =
          project.title.toLowerCase().includes(search.toLowerCase());
      
        return serviceMatch && categoryMatch && searchMatch;
      });

    // const filteredProjects = projects.filter((project) => {
    //     const serviceMatch =
    //       selectedService === "" ||
    //       project.service.includes(selectedService);
      
    //     const categoryMatch =
    //       category === "All" ||
    //       project.category === category;
      
    //     const searchMatch =
    //       project.title
    //         .toLowerCase()
    //         .includes(search.toLowerCase());
      
    //     return serviceMatch && categoryMatch && searchMatch;
    //   });


  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Explore Our Portfolio"
        bgImage={bg}
      />

      <section className="projects-page">
        <div className="container px-5">

          {/* Filter */}

          <div className="project-filter">

            {/* <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index}>
                  {cat}
                </option>
              ))}
            </select> */}
<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

{categories.map(cat=>

<option key={cat}>{cat}</option>

)}

</select>



<input

placeholder="Search project..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

           {/* <button
              className="reset-btn"
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
            >
              Reset
            </button> */}

<button
 className="reset-btn"
 onClick={()=>{

setCategory("All");

setSearch("");

setSelectedService("");

}}

>

Reset

</button>

          </div>

          {/* Cards */}

          <div className="row g-4">

            {filteredProjects.map((project, index) => (

              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div className="project-card-page">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-info">

                    <span>{project.category}</span>

                    <h4>{project.title}</h4>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}