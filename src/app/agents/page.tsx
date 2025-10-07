"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Star, Award, TrendingUp, Home } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Real Estate Advisor",
    image: "/generated/sarah-chen-headshot.jpg",
    phone: "(416) 555-0123",
    email: "sarah.chen@torontoluxe.com",
    specialties: ["Luxury Homes", "Investment Properties", "First-Time Buyers"],
    experience: "12 years",
    salesVolume: "$150M+",
    listings: 45,
    bio: "Sarah Chen is a distinguished real estate professional with over 12 years of experience in Toronto's luxury market. She specializes in high-end properties in Forest Hill, Rosedale, and Yorkville, consistently ranking among the top 1% of realtors in the GTA.",
    languages: ["English", "Mandarin", "Cantonese"],
    certifications: ["SRES", "CRS", "ABR"],
    recentSales: [
      { address: "123 Forest Hill Rd", price: "$2.5M", date: "2024-01" },
      { address: "456 Rosedale Ave", price: "$3.2M", date: "2024-02" },
      { address: "789 Yorkville St", price: "$1.8M", date: "2024-03" }
    ]
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    title: "Luxury Property Specialist",
    image: "/generated/mike-rodriguez-headshot.jpg",
    phone: "(416) 555-0124",
    email: "mike.rodriguez@torontoluxe.com",
    specialties: ["Executive Homes", "Condominiums", "Relocation Services"],
    experience: "8 years",
    salesVolume: "$95M+",
    listings: 32,
    bio: "Mike Rodriguez brings exceptional knowledge of Toronto's condominium market and executive housing. With a background in finance and real estate development, he provides clients with comprehensive market insights and strategic buying/selling advice.",
    languages: ["English", "Spanish", "Portuguese"],
    certifications: ["GRI", "CIPS", "SFR"],
    recentSales: [
      { address: "321 King St W", price: "$1.2M", date: "2024-01" },
      { address: "654 Bay St", price: "$2.1M", date: "2024-02" },
      { address: "987 Queen St", price: "$1.5M", date: "2024-03" }
    ]
  }
];

const teamStats = {
  totalSales: "$245M+",
  propertiesSold: 234,
  averageDays: 18,
  clientSatisfaction: "98%"
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest: string;
}

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: ""
  });

  const handleContactSubmit = (agentId: number) => {
    console.log("Contact form submitted for agent:", agentId, formData);
    // Simulate form submission
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyInterest: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary">
                TORONTO LUXE
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
              <Link href="/properties" className="text-gray-700 hover:text-primary">Properties</Link>
              <Link href="/agents" className="text-primary font-medium">Agents</Link>
              <a href="#" className="text-gray-700 hover:text-primary">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Real Estate Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our experienced agents combine deep local knowledge with proven track records
              to deliver exceptional results for every client.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{teamStats.totalSales}</div>
                <div className="text-sm text-gray-600">Total Sales Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{teamStats.propertiesSold}</div>
                <div className="text-sm text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{teamStats.averageDays}</div>
                <div className="text-sm text-gray-600">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{teamStats.clientSatisfaction}</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Agent Photo */}
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                          <p className="text-primary font-medium">{agent.title}</p>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {agent.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{agent.experience}</div>
                          <div className="text-xs text-gray-600">Experience</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{agent.salesVolume}</div>
                          <div className="text-xs text-gray-600">Sales Volume</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{agent.listings}</div>
                          <div className="text-xs text-gray-600">Active Listings</div>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                        <p className="text-sm text-gray-600">{agent.languages.join(", ")}</p>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-2">
                        <Button size="sm" className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {agent.phone}
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" onClick={() => setSelectedAgent(agent)}>
                              <Mail className="h-4 w-4 mr-1" />
                              Contact
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Contact {agent.name}</DialogTitle>
                            </DialogHeader>
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                handleContactSubmit(agent.id);
                              }}
                              className="space-y-4"
                            >
                              <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                  id="name"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="property-interest">Property Interest</Label>
                                <Input
                                  id="property-interest"
                                  placeholder="e.g., 3BR condo in King West"
                                  value={formData.propertyInterest}
                                  onChange={(e) => setFormData({...formData, propertyInterest: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                  id="message"
                                  rows={3}
                                  placeholder="Tell us about your real estate needs..."
                                  value={formData.message}
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                                  required
                                />
                              </div>
                              <Button type="submit" className="w-full">
                                Send Message
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" variant="ghost">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Toronto Luxe Realty?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">
                Recognized as Toronto's top luxury real estate team with multiple industry awards
                and consistently high client satisfaction ratings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Toronto's luxury market trends, pricing strategies,
                and neighborhood insights to maximize your investment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-gray-600">
                Tailored service that understands your unique needs, timeline, and budget
                to deliver exceptional results every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}