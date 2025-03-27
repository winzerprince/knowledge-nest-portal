
import React from "react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16 bg-muted/30">
        <div className="container-lg">
          <div className="max-w-2xl">
            <h1 className="h2 mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to learn more about our school? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We welcome your inquiries and feedback. Please fill out the form, and a member of our team will get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="lg:pl-10">
              <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <address className="not-italic text-muted-foreground">
                      <p>123 School Lane</p>
                      <p>Northridge, CA 91330</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">Main Office: (555) 123-4567</p>
                    <p className="text-muted-foreground">Admissions: (555) 123-4568</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">General Inquiries: info@northridge.edu</p>
                    <p className="text-muted-foreground">Admissions: admissions@northridge.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:30 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 12:00 PM (Admissions Only)</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden border border-border shadow-sm h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.9057860518065!2d-118.53039392426608!3d34.15908571335261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0b1f1b3db3%3A0x53cb81f8c49ef98e!2sCalifornia%20State%20University%2C%20Northridge!5e0!3m2!1sen!2sus!4v1685662230260!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="School Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="h3 mb-4">Department Contacts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need to reach a specific department? Here's how to contact them directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Administration</h3>
              <p className="text-sm text-muted-foreground mb-4">For questions about school policies and administration.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:admin@northridge.edu" className="text-primary hover:underline">
                  admin@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4570
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Academic Affairs</h3>
              <p className="text-sm text-muted-foreground mb-4">For questions about curriculum, classes, and academic programs.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:academics@northridge.edu" className="text-primary hover:underline">
                  academics@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4571
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Student Services</h3>
              <p className="text-sm text-muted-foreground mb-4">For student support, counseling, and wellness resources.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:studentservices@northridge.edu" className="text-primary hover:underline">
                  studentservices@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4572
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Athletics</h3>
              <p className="text-sm text-muted-foreground mb-4">For information about sports teams and physical education.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:athletics@northridge.edu" className="text-primary hover:underline">
                  athletics@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4573
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Arts Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">For visual and performing arts information and events.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:arts@northridge.edu" className="text-primary hover:underline">
                  arts@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4574
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Parent Association</h3>
              <p className="text-sm text-muted-foreground mb-4">For parent involvement opportunities and information.</p>
              <p className="text-sm">
                <span className="font-medium">Contact:</span>{" "}
                <a href="mailto:parents@northridge.edu" className="text-primary hover:underline">
                  parents@northridge.edu
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> (555) 123-4575
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary text-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Visit Our Campus</h2>
            <p className="text-white/80 mb-8 text-lg">
              The best way to experience Northridge Academy is to see it firsthand. Schedule a tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn bg-white text-primary hover:bg-white/90 px-6 py-3"
              >
                Schedule a Tour
              </button>
              <button
                className="btn bg-primary-foreground/10 text-white border border-white/30 hover:bg-primary-foreground/20 px-6 py-3"
              >
                Download Campus Map
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
