import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Star, Phone, Mail } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    price: "$2,500,000",
    address: "123 Forest Hill Road",
    location: "Forest Hill",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/generated/luxury-home-forest-hill.jpg",
    type: "Luxury Home"
  },
  {
    id: 2,
    price: "$3,200,000",
    address: "456 Rosedale Avenue",
    location: "Rosedale",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    image: "/generated/executive-home-rosedale.jpg",
    type: "Executive Home"
  },
  {
    id: 3,
    price: "$1,800,000",
    address: "789 King Street West",
    location: "King West",
    beds: 2,
    baths: 2,
    sqft: "1,500",
    image: "/generated/downtown-condo-king-west.jpg",
    type: "Downtown Condo"
  }
];

const agents = [
  {
    name: "Sarah Chen",
    title: "Senior Real Estate Advisor",
    image: "/generated/sarah-chen-headshot.jpg",
    phone: "(416) 555-0123",
    email: "sarah.chen@torontoluxe.com",
    specialties: ["Luxury Homes", "Investment Properties"]
  },
  {
    name: "Mike Rodriguez",
    title: "Luxury Property Specialist",
    image: "/generated/mike-rodriguez-headshot.jpg",
    phone: "(416) 555-0124",
    email: "mike.rodriguez@torontoluxe.com",
    specialties: ["Executive Homes", "Condominiums"]
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-primary">
                <span className="text-primary">TORONTO LUXE</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary">Buy</a>
              <a href="#" className="text-gray-700 hover:text-primary">Sell</a>
              <a href="#" className="text-gray-700 hover:text-primary">Rent</a>
              <a href="#" className="text-gray-700 hover:text-primary">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-slate-900/80 to-slate-800/80">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              FIND YOUR DREAM<br />TORONTO HOME
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/95 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Enter location, address, or MLS®"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="px-8 py-3 bg-primary hover:bg-primary/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Luxury Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              FEATURED LUXURY LISTINGS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {property.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {property.price}
                      </h3>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.address}, {property.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft} sqft
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Find Your New Home Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              READY TO FIND YOUR NEW HOME?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Agents */}
            <div>
              <div className="space-y-6">
                {agents.map((agent, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="h-16 w-16 rounded-full bg-gray-300 flex-shrink-0">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{agent.name}</h3>
                      <p className="text-gray-600 text-sm">{agent.title}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {agent.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="The Annex"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold">The Annex</span>
                </div>
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Liberty Village"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold">Liberty Village</span>
                </div>
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Leslieville"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold">Leslieville</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button className="px-8 py-3 bg-primary hover:bg-primary/90">
              READY TO FIND YOUR NEW HOME?
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">TORONTO LUXE REALTY</h3>
            <p className="text-sm opacity-90">
              Toronto's premier luxury real estate brokerage
            </p>
            <p className="text-xs opacity-75 mt-4">
              © 2024 Toronto Luxe Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}