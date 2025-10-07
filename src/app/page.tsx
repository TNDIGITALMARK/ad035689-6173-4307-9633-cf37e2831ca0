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
      <nav className="bg-background border-b border-border/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-light tracking-wider text-primary">
                TORONTO LUXE
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Buy</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Sell</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Rent</a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
                Find Your<br />
                <span className="text-primary font-normal">Toronto Home</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                Discover exceptional properties in Canada's premier city with our curated selection of luxury homes.
              </p>
              <div className="max-w-2xl">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter location or address"
                        className="w-full px-6 py-4 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-medium">
                      Search Properties
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Luxury Listings */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">
              Featured Properties
            </h2>
            <div className="w-24 h-px bg-primary" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-80">
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-6 left-6 bg-primary/90 text-primary-foreground backdrop-blur-sm border-0">
                    {property.type}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-light text-primary mb-3">
                      {property.price}
                    </h3>
                    <p className="text-muted-foreground flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 opacity-60" />
                      {property.address}, {property.location}
                    </p>
                  </div>
                  <div className="flex justify-between pt-6 border-t border-border/50">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Bed className="h-4 w-4 mr-2 opacity-60" />
                      {property.beds}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Bath className="h-4 w-4 mr-2 opacity-60" />
                      {property.baths}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Square className="h-4 w-4 mr-2 opacity-60" />
                      {property.sqft}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">
              Meet Our Experts
            </h2>
            <div className="w-24 h-px bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {agents.map((agent, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="h-20 w-20 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-foreground mb-2">{agent.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{agent.title}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {agent.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="border-border/50 hover:border-primary/50">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="border-border/50 hover:border-primary/50">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-foreground mb-8">
              Popular Neighborhoods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-40 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="The Annex"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">The Annex</span>
                </div>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Liberty Village"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">Liberty Village</span>
                </div>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Leslieville"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">Leslieville</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="px-12 py-4 bg-primary hover:bg-primary/90 rounded-xl text-lg font-medium">
              Start Your Search
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-light text-primary mb-3 tracking-wider">
              TORONTO LUXE
            </h3>
            <p className="text-muted-foreground mb-8">
              Toronto's premier luxury real estate brokerage
            </p>
            <div className="w-24 h-px bg-border mx-auto mb-8" />
            <p className="text-sm text-muted-foreground/60">
              © 2024 Toronto Luxe Realty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}