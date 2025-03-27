
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
      </div>
      
      <div className="container-lg relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-block mb-6 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Excellence in Education
          </div>
          <h1 className="h1 mb-6">
            Northridge Academy
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
            Empowering students to become leaders in a global community through academic excellence, creative exploration, and ethical development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/about"
              className="btn btn-primary px-6 py-3"
            >
              Discover Our School
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact" 
              className="btn btn-secondary px-6 py-3"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
