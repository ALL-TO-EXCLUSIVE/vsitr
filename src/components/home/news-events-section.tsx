
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "VSITR Receives NAAC 'A' Grade Accreditation",
    date: "June 15, 2023",
    category: "Achievements",
    image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    excerpt: "VSITR has been awarded 'A' grade by the National Assessment and Accreditation Council (NAAC), recognizing our commitment to quality education.",
  },
  {
    id: 2,
    title: "Annual Tech Fest 'Innovision 2023' Announced",
    date: "July 10, 2023",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    excerpt: "The much-awaited technical festival of VSITR, Innovision 2023, is scheduled for October. Register now to participate in exciting competitions and workshops.",
  },
  {
    id: 3,
    title: "VSITR Students Win Smart India Hackathon",
    date: "August 5, 2023",
    category: "Achievements",
    image: "https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    excerpt: "Our team of six students won the prestigious Smart India Hackathon 2023 for their innovative solution addressing healthcare challenges.",
  },
];

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "Seminar on Machine Learning Applications",
    date: "September 25, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall",
  },
  {
    id: 2,
    title: "Campus Recruitment Drive - TCS",
    date: "October 5, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Placement Cell",
  },
  {
    id: 3,
    title: "Workshop on IoT Development",
    date: "October 12, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Electronics Lab",
  },
  {
    id: 4,
    title: "Alumni Meet 2023",
    date: "October 20, 2023",
    time: "11:00 AM - 4:00 PM",
    location: "College Auditorium",
  },
];

export function NewsEventsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          pretitle="Latest Updates"
          title="News & Upcoming Events"
          description="Stay informed about the latest happenings, achievements, and upcoming events at VSITR."
          className="max-w-3xl mx-auto mb-16"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="col-span-2 space-y-8">
            <h3 className="text-xl font-semibold mb-6">Latest News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-card hover-lift group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-5">
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.date}
                    </div>
                    <h4 className="text-lg font-medium line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button asChild variant="ghost" className="p-0 h-auto text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                      <Link to={`/news/${item.id}`}>
                        Read more
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Button asChild variant="outline">
                <Link to="/news">View All News</Link>
              </Button>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={cn(
                    "bg-white rounded-lg p-4 border border-border transition-all duration-300",
                    "hover:border-primary/20 hover:shadow-subtle"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-md p-2 flex flex-col items-center justify-center min-w-[52px]">
                      <span className="text-primary font-semibold text-sm">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.date.split(' ')[1].replace(',', '')}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium line-clamp-2">{event.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={12} className="mr-1" />
                        <span>{event.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Button asChild variant="outline">
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
