
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "School building",
      caption: "Our beautiful campus",
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Students in classroom",
      caption: "Engaging classroom activities",
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Sports field",
      caption: "Sports and physical education",
    },
  ];

  const featuredNews = [
    {
      id: "news-1",
      title: "Annual Science Fair Winners Announced",
      date: "May 15, 2023",
      excerpt: "Congratulations to all participants in our Annual Science Fair. The results are in and we're proud to announce...",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "news-2",
      title: "Robotics Team Advances to National Finals",
      date: "April 27, 2023",
      excerpt: "Our robotics team has qualified for the National Robotics Championship. After months of hard work...",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "news-3",
      title: "Music Department Announces Spring Concert",
      date: "April 12, 2023",
      excerpt: "Join us for an evening of beautiful music at our annual Spring Concert. Students from all grade levels will perform...",
      image: "https://images.unsplash.com/photo-1516280030650-7315070d1fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const upcomingEvents = [
    {
      id: "event-1",
      title: "Parent-Teacher Conference",
      date: "June 15, 2023",
      time: "3:00 PM - 7:00 PM",
      location: "School Auditorium",
    },
    {
      id: "event-2",
      title: "End of Year Art Exhibition",
      date: "June 22, 2023",
      time: "5:30 PM - 8:00 PM",
      location: "Gallery Hall",
    },
    {
      id: "event-3",
      title: "Graduation Ceremony",
      date: "June 30, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Main Campus",
    },
  ];

  return (
    <Layout>
      <Hero />
      
      <section className="section-sm bg-muted/50">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Students" className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">2000+ Students</h3>
              <p className="text-muted-foreground text-sm">Diverse learning community</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Teachers" className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">150+ Teachers</h3>
              <p className="text-muted-foreground text-sm">Experienced educators</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Courses" className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">60+ Courses</h3>
              <p className="text-muted-foreground text-sm">Comprehensive curriculum</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Activities" className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">25+ Activities</h3>
              <p className="text-muted-foreground text-sm">Extracurricular opportunities</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-lg">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="h2 mb-4">Campus Life at Northridge</h2>
            <p className="text-muted-foreground">
              Experience the vibrant community and diverse opportunities that make our school special.
            </p>
          </div>
          
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
      
      <section className="section bg-muted/50">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="h3">Latest News</h2>
                <Link to="/news" className="text-primary text-sm font-medium flex items-center link-hover">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {featuredNews.map((news) => (
                  <div
                    key={news.id}
                    className="bg-background rounded-lg overflow-hidden shadow-sm group card-hover"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                        <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                        <Link
                          to="/news"
                          className="text-primary text-sm font-medium flex items-center link-hover"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="h3">Upcoming Events</h2>
                <Link to="/news" className="text-primary text-sm font-medium flex items-center link-hover">
                  All Events <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-background rounded-lg p-5 shadow-sm card-hover"
                  >
                    <h3 className="font-medium mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link
                  to="/news"
                  className="btn btn-secondary inline-flex items-center"
                >
                  View Calendar <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Start Your Journey at Northridge Academy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our vibrant community of learners and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="btn btn-primary px-6 py-3"
              >
                Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary px-6 py-3"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
