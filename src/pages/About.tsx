
import React from "react";
import Layout from "@/components/Layout";
import TabbedContent from "@/components/TabbedContent";
import { ArrowRight } from "lucide-react";

const About = () => {
  const aboutTabs = [
    {
      id: "history",
      label: "History",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1965, Northridge Academy began as a small community school with just 12 teachers and 150 students. The school was established by a group of local educators who envisioned a learning environment that would combine academic excellence with character development.
              </p>
              <p>
                Through the decades, the school has grown both in size and reputation. In 1985, we expanded our campus to include new science laboratories and a modern library. The 1990s saw the addition of our award-winning performing arts center and sports facilities.
              </p>
              <p>
                Today, Northridge Academy stands as one of the region's premier educational institutions, serving over 2,000 students from diverse backgrounds. While much has changed over the years, our fundamental commitment to nurturing well-rounded individuals remains unwavering.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Historical photo of school"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "mission",
      label: "Mission & Vision",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              Northridge Academy is dedicated to providing a comprehensive, balanced education that fosters intellectual curiosity, builds character, and prepares students to be contributing members of a global society.
            </p>
            <p className="text-muted-foreground">
              We strive to create a supportive learning environment where students can discover and develop their unique talents, pursue academic excellence, and cultivate a lifelong love of learning.
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-4">
              Our vision is to be recognized as a center of educational excellence that prepares students to thrive in a rapidly changing world.
            </p>
            <p className="text-muted-foreground">
              We envision graduates who are critical thinkers, effective communicators, and ethical leaders, equipped with the knowledge, skills, and mindset to make meaningful contributions to society and achieve personal fulfillment.
            </p>
          </div>
          <div className="md:col-span-2 mt-4">
            <h3 className="text-xl font-medium mb-4">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="font-medium mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Striving for the highest standards in all endeavors</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="font-medium mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">Acting with honesty, ethics, and responsibility</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="font-medium mb-2">Respect</h4>
                <p className="text-sm text-muted-foreground">Valuing diversity and treating all with dignity</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="font-medium mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Embracing creativity and forward thinking</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "leadership",
      label: "Leadership",
      content: (
        <div>
          <h3 className="text-xl font-medium mb-6">School Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="aspect-square mx-auto w-48 overflow-hidden rounded-full mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Dr. James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium">Dr. James Wilson</h4>
              <p className="text-primary text-sm mb-2">Principal</p>
              <p className="text-sm text-muted-foreground">
                Dr. Wilson has led Northridge Academy for 12 years, bringing over 25 years of experience in education.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square mx-auto w-48 overflow-hidden rounded-full mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                  alt="Dr. Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium">Dr. Sarah Chen</h4>
              <p className="text-primary text-sm mb-2">Vice Principal, Academics</p>
              <p className="text-sm text-muted-foreground">
                Dr. Chen oversees all academic programs and curriculum development at Northridge Academy.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square mx-auto w-48 overflow-hidden rounded-full mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Mr. David Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium">Mr. David Rodriguez</h4>
              <p className="text-primary text-sm mb-2">Vice Principal, Student Affairs</p>
              <p className="text-sm text-muted-foreground">
                Mr. Rodriguez leads student support services and extracurricular activities.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Board of Trustees</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Ms. Elizabeth Taylor</h5>
                <p className="text-sm text-muted-foreground">Board Chair</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Mr. Robert Johnson</h5>
                <p className="text-sm text-muted-foreground">Vice Chair</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Dr. Maria Gonzalez</h5>
                <p className="text-sm text-muted-foreground">Secretary</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Mr. Thomas Lee</h5>
                <p className="text-sm text-muted-foreground">Treasurer</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Dr. Michael Patel</h5>
                <p className="text-sm text-muted-foreground">Member</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h5 className="font-medium">Ms. Susan Williams</h5>
                <p className="text-sm text-muted-foreground">Member</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "facilities",
      label: "Facilities",
      content: (
        <div>
          <h3 className="text-xl font-medium mb-6">Campus Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80"
                alt="Academic buildings"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Academic Facilities</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Modern Classrooms:</span> 45 classrooms equipped with the latest technology for interactive learning.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Science Laboratories:</span> Dedicated labs for biology, chemistry, and physics with state-of-the-art equipment.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Library & Media Center:</span> A comprehensive collection of books, digital resources, and study spaces.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Computer Labs:</span> Multiple computer labs with the latest hardware and software for technology education.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="order-2 md:order-1">
              <h4 className="text-lg font-medium mb-3">Arts & Performance</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Performing Arts Center:</span> 500-seat theater with professional lighting and sound systems.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Music Studios:</span> Dedicated spaces for band, orchestra, and choir practices.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Art Studios:</span> Specialized rooms for painting, sculpture, and digital arts.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Dance Studio:</span> Sprung floor studio with mirrors and ballet barres.
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1598386651573-9232cc0c2d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Performing arts center"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Athletic facilities"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Athletic Facilities</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Gymnasium:</span> Full-size gymnasium with bleacher seating for basketball and volleyball games.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Athletic Fields:</span> Soccer field, baseball diamond, and track and field facilities.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Swimming Pool:</span> Olympic-size swimming pool for aquatic sports and physical education.
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Fitness Center:</span> Modern fitness equipment for strength and conditioning training.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-muted/30">
        <div className="container-lg">
          <div className="max-w-2xl">
            <h1 className="h2 mb-6">About Northridge Academy</h1>
            <p className="text-lg text-muted-foreground">
              Discover our rich history, mission, and the dedicated team behind our commitment to educational excellence.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container-lg">
          <TabbedContent tabs={aboutTabs} defaultTab="history" />
        </div>
      </section>
      
      <section className="section-sm bg-muted/30">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h3 mb-4">Why Choose Northridge Academy?</h2>
              <p className="text-muted-foreground mb-6">
                At Northridge Academy, we combine academic rigor with a nurturing environment that recognizes and develops each student's unique potential.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Comprehensive academic program with AP and honors courses</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Low student-to-teacher ratio ensuring personalized attention</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>State-of-the-art facilities supporting all aspects of learning</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Diverse extracurricular activities developing well-rounded students</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Strong college preparatory focus with excellent placement rates</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-lg">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="h2 mb-4">Our Achievements</h2>
            <p className="text-muted-foreground">
              Recognition and accolades that reflect our commitment to excellence in education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Award" className="h-8 w-8" />
              </div>
              <h3 className="font-medium text-lg mb-2">National Blue Ribbon School</h3>
              <p className="text-muted-foreground">Recognized for academic excellence and closing achievement gaps.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Science" className="h-8 w-8" />
              </div>
              <h3 className="font-medium text-lg mb-2">STEM Excellence Award</h3>
              <p className="text-muted-foreground">Honored for our innovative approach to science and technology education.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/placeholder.svg" alt="Arts" className="h-8 w-8" />
              </div>
              <h3 className="font-medium text-lg mb-2">Arts Program Distinction</h3>
              <p className="text-muted-foreground">Acclaimed for our comprehensive and outstanding arts curriculum.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary text-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">Join Our Community</h2>
              <p className="text-white/80 mb-8 text-lg">
                We invite you to explore all that Northridge Academy has to offer. Schedule a visit to experience our dynamic learning environment firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/academics"
                  className="btn bg-white text-primary hover:bg-white/90 px-6 py-3"
                >
                  Explore Programs
                </a>
                <a
                  href="/contact"
                  className="btn bg-primary-foreground/10 text-white border border-white/30 hover:bg-primary-foreground/20 px-6 py-3"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
