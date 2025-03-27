
import React from "react";
import Layout from "@/components/Layout";
import AccordionList from "@/components/AccordionList";
import { ArrowRight } from "lucide-react";

const Academics = () => {
  const courseCategories = [
    {
      id: "math",
      title: "Mathematics",
      content: (
        <div>
          <p className="mb-4">
            Our mathematics program develops critical thinking and problem-solving skills through a comprehensive curriculum.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Algebra I</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">Ms. Johnson</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Geometry</td>
                  <td className="px-4 py-2">9-10</td>
                  <td className="px-4 py-2">Mr. Rivera</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Algebra II</td>
                  <td className="px-4 py-2">10-11</td>
                  <td className="px-4 py-2">Ms. Peterson</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Pre-Calculus</td>
                  <td className="px-4 py-2">11</td>
                  <td className="px-4 py-2">Dr. Chen</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Calculus AB</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Dr. Chen</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">AP Calculus BC</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Dr. Chen</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Statistics</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Ms. Johnson</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "science",
      title: "Science",
      content: (
        <div>
          <p className="mb-4">
            Our science department emphasizes hands-on learning and scientific inquiry across all disciplines.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Biology</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">Ms. Walker</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Chemistry</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Dr. Martinez</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Physics</td>
                  <td className="px-4 py-2">11</td>
                  <td className="px-4 py-2">Mr. Thompson</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Environmental Science</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Ms. Patel</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Biology</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Ms. Walker</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">AP Chemistry</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Dr. Martinez</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Physics</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Mr. Thompson</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "english",
      title: "English & Literature",
      content: (
        <div>
          <p className="mb-4">
            Our English program develops strong communication skills and fosters an appreciation for literature from diverse perspectives.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">English 9</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">Ms. Davis</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">English 10</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Mr. Wilson</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">American Literature</td>
                  <td className="px-4 py-2">11</td>
                  <td className="px-4 py-2">Ms. Garcia</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">World Literature</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Dr. Williams</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Creative Writing</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Ms. Davis</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">AP English Language</td>
                  <td className="px-4 py-2">11</td>
                  <td className="px-4 py-2">Ms. Garcia</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP English Literature</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Dr. Williams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "history",
      title: "History & Social Sciences",
      content: (
        <div>
          <p className="mb-4">
            Our history and social sciences curriculum encourages students to understand the complexities of human societies past and present.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">World History</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">Mr. Brown</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">U.S. History</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Ms. Rodriguez</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Government & Civics</td>
                  <td className="px-4 py-2">11</td>
                  <td className="px-4 py-2">Dr. Taylor</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Economics</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Mr. Brown</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Psychology</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Ms. Patel</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">AP U.S. History</td>
                  <td className="px-4 py-2">10-11</td>
                  <td className="px-4 py-2">Ms. Rodriguez</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Government</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Dr. Taylor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "languages",
      title: "Foreign Languages",
      content: (
        <div>
          <p className="mb-4">
            Our language program builds proficiency in speaking, reading, writing, and understanding other languages while exploring diverse cultures.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Spanish I</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Sra. Fernandez</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Spanish II</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Sra. Fernandez</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Spanish III</td>
                  <td className="px-4 py-2">10-12</td>
                  <td className="px-4 py-2">Sr. Diaz</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">French I</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mme. Bernard</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">French II</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mme. Bernard</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Mandarin I</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mrs. Liu</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Spanish</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Sr. Diaz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "arts",
      title: "Visual & Performing Arts",
      content: (
        <div>
          <p className="mb-4">
            Our arts program encourages creative expression and develops technical skills across various artistic disciplines.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Introduction to Art</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Ms. Chan</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Advanced Drawing & Painting</td>
                  <td className="px-4 py-2">10-12</td>
                  <td className="px-4 py-2">Ms. Chan</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Ceramics</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mr. Stevens</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Concert Band</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mr. Wallace</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Jazz Ensemble</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mr. Wallace</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Choir</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Ms. Reynolds</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Theater Arts</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Mr. Hoffman</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "technology",
      title: "Technology & Computer Science",
      content: (
        <div>
          <p className="mb-4">
            Our technology program prepares students for an increasingly digital world through hands-on learning experiences.
          </p>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Grade Level</th>
                  <th className="px-4 py-2 text-left">Teacher</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Digital Literacy</td>
                  <td className="px-4 py-2">9</td>
                  <td className="px-4 py-2">Mr. Park</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Introduction to Programming</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Ms. Singh</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Web Design</td>
                  <td className="px-4 py-2">10-12</td>
                  <td className="px-4 py-2">Mr. Park</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">App Development</td>
                  <td className="px-4 py-2">10-12</td>
                  <td className="px-4 py-2">Ms. Singh</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Robotics</td>
                  <td className="px-4 py-2">9-12</td>
                  <td className="px-4 py-2">Dr. Lee</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="px-4 py-2">Digital Media Production</td>
                  <td className="px-4 py-2">10-12</td>
                  <td className="px-4 py-2">Mr. Hoffman</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">AP Computer Science</td>
                  <td className="px-4 py-2">11-12</td>
                  <td className="px-4 py-2">Dr. Lee</td>
                </tr>
              </tbody>
            </table>
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
            <h1 className="h2 mb-6">Academics</h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive curriculum designed to challenge, inspire, and prepare students for future success.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-medium mb-6">Course Offerings</h2>
              <p className="text-muted-foreground mb-8">
                At Northridge Academy, we offer a diverse range of courses to challenge students intellectually and prepare them for college and beyond. Our curriculum is designed to meet the needs of all learners while maintaining high academic standards.
              </p>
              
              <AccordionList items={courseCategories} />
            </div>
            
            <div>
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-medium mb-4">Academic Programs</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Advanced Placement (AP)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Honors Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      STEM Academy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Visual & Performing Arts Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Global Studies Initiative
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Dual Enrollment with Local Colleges
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Academic Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Learning Resource Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Tutoring Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      College Counseling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Writing Lab
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-primary hover:underline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Technology Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-muted/30">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h3 mb-4">Approach to Learning</h2>
              <p className="text-muted-foreground mb-6">
                At Northridge Academy, we believe in a holistic approach to education that balances academic rigor with student well-being and personal growth.
              </p>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-2">Student-Centered Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Our teachers create engaging learning environments that encourage active participation and critical thinking.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-2">Personalized Instruction</h3>
                  <p className="text-sm text-muted-foreground">
                    We recognize that each student learns differently and tailor our teaching methods to individual strengths and needs.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-2">Real-World Applications</h3>
                  <p className="text-sm text-muted-foreground">
                    We connect classroom learning to practical, real-world scenarios to enhance understanding and relevance.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-2">Technology Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    We incorporate the latest technologies to enhance learning experiences and prepare students for the digital age.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt="Students engaged in learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Academic Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to helping every student succeed by providing comprehensive support resources and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Guidance" className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Academic Advising</h3>
              <p className="text-muted-foreground mb-4">
                Our academic advisors work closely with students to develop personalized educational plans and set achievable goals.
              </p>
              <a href="#" className="text-primary text-sm font-medium flex items-center link-hover">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Support" className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Learning Support</h3>
              <p className="text-muted-foreground mb-4">
                Our dedicated learning specialists provide individualized support to students with diverse learning needs.
              </p>
              <a href="#" className="text-primary text-sm font-medium flex items-center link-hover">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="College" className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">College Preparation</h3>
              <p className="text-muted-foreground mb-4">
                Our comprehensive college counseling program guides students through every step of the college application process.
              </p>
              <a href="#" className="text-primary text-sm font-medium flex items-center link-hover">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary text-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Learn with Us?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Join our community of curious and dedicated learners at Northridge Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn bg-white text-primary hover:bg-white/90 px-6 py-3"
              >
                Request Information
              </a>
              <a
                href="/contact"
                className="btn bg-primary-foreground/10 text-white border border-white/30 hover:bg-primary-foreground/20 px-6 py-3"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
