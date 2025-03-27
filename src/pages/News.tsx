
import React, { useState } from "react";
import Layout from "@/components/Layout";
import EventCalendar from "@/components/EventCalendar";
import { Calendar, Clock, MapPin, User, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const News = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    
    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Submission Received",
      description: "Thank you for submitting your event. It will be reviewed by our team.",
    });
    
    // Reset form
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      name: "",
      email: "",
    });
  };

  const newsItems = [
    {
      id: "news-1",
      title: "Annual Science Fair Winners Announced",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1581093450021-a7a0e06be92f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      content: "Congratulations to all participants in our Annual Science Fair. The results are in and we're proud to announce that Sarah Johnson and Michael Lee have taken first place for their innovative project on renewable energy sources. Second place went to Emma Thompson for her research on local water quality, and third place to David Rodriguez for his study on plant growth factors. All winners will represent our school at the Regional Science Competition next month. We're incredibly proud of all students who participated and showcased their scientific inquiry skills.",
    },
    {
      id: "news-2",
      title: "Robotics Team Advances to National Finals",
      date: "April 27, 2023",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      content: "Our robotics team has qualified for the National Robotics Championship. After months of hard work and dedication, the Northridge Robotics Club secured their spot by winning the regional competition with their innovative robot design. The team demonstrated exceptional problem-solving skills and teamwork throughout the competition. They will now represent our school at the national level in Chicago next month. Special thanks to Mr. Garcia and Dr. Lee for their outstanding coaching and mentorship. The school community is rallying behind our team as they prepare for this prestigious competition.",
    },
    {
      id: "news-3",
      title: "Music Department Announces Spring Concert",
      date: "April 12, 2023",
      image: "https://images.unsplash.com/photo-1516280030650-7315070d1fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      content: "Join us for an evening of beautiful music at our annual Spring Concert. Students from all grade levels will perform a diverse repertoire spanning classical, jazz, and contemporary pieces. The concert will feature performances by our school orchestra, concert band, jazz ensemble, and choir. This year's program includes works by Mozart, Gershwin, and several original compositions by our talented students. The concert will take place in our auditorium on May 20 at 7:00 PM. Tickets are $8 for adults and $5 for students and seniors. All proceeds will support the music department's scholarship fund.",
    },
    {
      id: "news-4",
      title: "Basketball Team Wins District Championship",
      date: "March 24, 2023",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      content: "Congratulations to our varsity basketball team on winning the district championship! In an intense final game against our rivals, the team showed remarkable skill and perseverance, coming from behind to win with a final score of 78-72. Team captain James Wilson led the scoring with 24 points, while Sarah Martinez contributed 18 points and 12 rebounds. Coach Thompson praised the team's dedication and teamwork throughout the season. The team will now advance to the state tournament beginning next week. The entire school community is incredibly proud of their achievement and wishes them continued success.",
    },
    {
      id: "news-5",
      title: "Environmental Club Completes Community Garden Project",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1466692476655-abc7e673b1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      content: "Our Environmental Club has successfully completed their community garden project after months of planning and hard work. The garden, located on the east side of campus, now features native plants, vegetables, and a butterfly sanctuary. The project was made possible through a grant from the Local Green Initiative and support from parent volunteers. The garden will serve as an outdoor classroom for science classes and provide fresh produce for our cafeteria and local food banks. Club president Emily Chen noted that the garden will help reduce our school's carbon footprint while providing educational opportunities about sustainable agriculture.",
    },
  ];

  const events = [
    {
      id: "event-1",
      title: "Parent-Teacher Conference",
      date: new Date(2023, 5, 15), // June 15, 2023
      description: "Individual meetings to discuss student progress and goals.",
    },
    {
      id: "event-2",
      title: "End of Year Art Exhibition",
      date: new Date(2023, 5, 22), // June 22, 2023
      description: "Showcasing student artwork from throughout the academic year.",
    },
    {
      id: "event-3",
      title: "Graduation Ceremony",
      date: new Date(2023, 5, 30), // June 30, 2023
      description: "Celebration of our graduating seniors' achievements.",
    },
    {
      id: "event-4",
      title: "Science Fair",
      date: new Date(2023, 5, 8), // June 8, 2023
      description: "Students present their science projects to the community.",
    },
    {
      id: "event-5",
      title: "Drama Club Performance",
      date: new Date(2023, 5, 10), // June 10, 2023
      description: "Spring performance of 'A Midsummer Night's Dream'.",
    },
    {
      id: "event-6",
      title: "Sports Day",
      date: new Date(2023, 5, 24), // June 24, 2023
      description: "Annual athletics competition between house teams.",
    },
  ];

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-muted/30">
        <div className="container-lg">
          <div className="max-w-2xl">
            <h1 className="h2 mb-6">News & Events</h1>
            <p className="text-lg text-muted-foreground">
              Stay up to date with the latest happenings at Northridge Academy and upcoming events.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container-lg">
          <h2 className="h3 mb-8 text-center">Latest News</h2>
          
          <div className="space-y-10">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-background rounded-lg overflow-hidden shadow-sm border border-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover aspect-video md:aspect-auto"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="mb-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-3">{news.title}</h3>
                    <p className="text-muted-foreground">{news.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-muted/30">
        <div className="container-lg">
          <h2 className="h3 mb-8 text-center">Upcoming Events</h2>
          <EventCalendar events={events} />
        </div>
      </section>
      
      <section className="section">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="h3 mb-6 text-center">Submit News or Event</h2>
            <p className="text-center text-muted-foreground mb-8">
              Have a news item or event you'd like to share with the school community? Submit it here for review.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-6 rounded-lg border border-border">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Event Title <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                      errors.title ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.title && (
                  <p className="mt-1 text-sm text-destructive">{errors.title}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Date <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border pl-10 px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                        errors.date ? "border-destructive" : "border-input"
                      )}
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1 text-sm text-destructive">{errors.date}</p>
                  )}
                </div>
                
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Location <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border pl-10 px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                        errors.location ? "border-destructive" : "border-input"
                      )}
                    />
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-sm text-destructive">{errors.location}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Description <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border pl-10 px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                      errors.description ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.description && (
                  <p className="mt-1 text-sm text-destructive">{errors.description}</p>un
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border pl-10 px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                        errors.name ? "border-destructive" : "border-input"
                      )}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Your Email <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border pl-10 px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                        errors.email ? "border-destructive" : "border-input"
                      )}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-2 text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit
                </button>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  All submissions will be reviewed before publishing
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
