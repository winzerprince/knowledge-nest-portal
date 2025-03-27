
import React from "react";
import Layout from "@/components/Layout";
import ImageGallery from "@/components/ImageGallery";

const Gallery = () => {
  const galleryImages = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "School building facade",
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1609618992830-f41b2d82e9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Science lab experiment",
    },
    {
      id: "img3",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Students in classroom",
    },
    {
      id: "img4",
      src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Students studying together",
    },
    {
      id: "img5",
      src: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Music performance",
    },
    {
      id: "img6",
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      alt: "Sports field",
    },
    {
      id: "img7",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Graduation ceremony",
    },
    {
      id: "img8",
      src: "https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "School library",
    },
    {
      id: "img9",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      alt: "Students working on project",
    },
    {
      id: "img10",
      src: "https://images.unsplash.com/photo-1573166855576-bce7888c4f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Art class",
    },
    {
      id: "img11",
      src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "School cafeteria",
    },
    {
      id: "img12",
      src: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Computer lab",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "campus", label: "Campus" },
    { id: "academics", label: "Academics" },
    { id: "events", label: "Events" },
    { id: "activities", label: "Activities" },
    { id: "sports", label: "Sports" },
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  // In a real application, you would filter images based on category
  // For this demo, we'll just show all images regardless of category

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-muted/30">
        <div className="container-lg">
          <div className="max-w-2xl">
            <h1 className="h2 mb-6">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore moments from campus life, academic achievements, and special events at Northridge Academy.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container-lg">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <ImageGallery images={galleryImages} />
        </div>
      </section>
      
      <section className="section-sm bg-muted/30">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">Share Your Photos</h2>
            <p className="text-muted-foreground mb-6">
              Do you have photos from a school event or activity? We'd love to feature them in our gallery!
            </p>
            <a
              href="/contact"
              className="btn btn-primary px-6 py-3 inline-flex"
            >
              Submit Photos
            </a>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-lg">
          <h2 className="h3 mb-8 text-center">Featured Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1560257618-ec2d78b9a9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Graduation Day 2023"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-medium">Graduation Day 2023</h3>
                <p className="text-white/80 text-sm">Celebrating our seniors' achievements</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Spring Arts Festival"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-medium">Spring Arts Festival</h3>
                <p className="text-white/80 text-sm">Showcasing creativity and talent</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Sports Championship"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl font-medium">Sports Championship</h3>
                <p className="text-white/80 text-sm">Our athletes' dedication and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
