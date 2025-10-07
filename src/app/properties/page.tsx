"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MapPin, Bed, Bath, Square, Filter, Heart } from "lucide-react";

const allProperties = [
  {
    id: 1,
    price: "$2,500,000",
    address: "123 Forest Hill Road",
    location: "Forest Hill",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/generated/luxury-home-forest-hill.jpg",
    type: "Luxury Home",
    status: "For Sale",
    featured: true
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
    type: "Executive Home",
    status: "For Sale",
    featured: true
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
    type: "Downtown Condo",
    status: "For Sale",
    featured: true
  },
  {
    id: 4,
    price: "$2,100,000",
    address: "321 Yorkville Avenue",
    location: "Yorkville",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    image: "/generated/downtown-condo-king-west.jpg",
    type: "Luxury Condo",
    status: "For Sale",
    featured: false
  },
  {
    id: 5,
    price: "$4,500,000",
    address: "654 The Bridle Path",
    location: "North York",
    beds: 6,
    baths: 5,
    sqft: "5,200",
    image: "/generated/luxury-home-forest-hill.jpg",
    type: "Estate Home",
    status: "For Sale",
    featured: false
  },
  {
    id: 6,
    price: "$1,950,000",
    address: "789 Queen Street West",
    location: "Queen West",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "/generated/downtown-condo-king-west.jpg",
    type: "Modern Condo",
    status: "For Sale",
    featured: false
  },
  {
    id: 7,
    price: "$3,800,000",
    address: "123 The Beaches",
    location: "The Beach",
    beds: 4,
    baths: 4,
    sqft: "3,600",
    image: "/generated/waterfront-home-beaches.jpg",
    type: "Waterfront Home",
    status: "For Sale",
    featured: false
  },
  {
    id: 8,
    price: "$2,750,000",
    address: "456 Leslieville Avenue",
    location: "Leslieville",
    beds: 3,
    baths: 3,
    sqft: "2,900",
    image: "/generated/family-home-leslieville.jpg",
    type: "Family Home",
    status: "For Sale",
    featured: false
  }
];

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    let filtered = allProperties;

    if (searchTerm) {
      filtered = filtered.filter(
        property =>
          property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[$,]/g, ""));
        switch (priceRange) {
          case "under-2m":
            return price < 2000000;
          case "2m-3m":
            return price >= 2000000 && price <= 3000000;
          case "3m-4m":
            return price >= 3000000 && price <= 4000000;
          case "over-4m":
            return price > 4000000;
          default:
            return true;
        }
      });
    }

    if (propertyType) {
      filtered = filtered.filter(property =>
        property.type.toLowerCase().includes(propertyType.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange("");
    setPropertyType("");
    setLocation("");
    setFilteredProperties(allProperties);
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
              <Link href="/properties" className="text-primary font-medium">Properties</Link>
              <Link href="/agents" className="text-gray-700 hover:text-primary">Agents</Link>
              <a href="#" className="text-gray-700 hover:text-primary">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Luxury Properties in Toronto
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover exceptional homes in Toronto's most desirable neighborhoods.
              From luxury condos to executive estates, find your perfect property.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by location, address, or property type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-2m">Under $2M</SelectItem>
                <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                <SelectItem value="3m-4m">$3M - $4M</SelectItem>
                <SelectItem value="over-4m">Over $4M</SelectItem>
              </SelectContent>
            </Select>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="estate">Estate</SelectItem>
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="forest-hill">Forest Hill</SelectItem>
                <SelectItem value="rosedale">Rosedale</SelectItem>
                <SelectItem value="king-west">King West</SelectItem>
                <SelectItem value="yorkville">Yorkville</SelectItem>
                <SelectItem value="north-york">North York</SelectItem>
                <SelectItem value="queen-west">Queen West</SelectItem>
                <SelectItem value="the-beach">The Beach</SelectItem>
                <SelectItem value="leslieville">Leslieville</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleSearch} className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Search Properties
            </Button>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest Listed</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="sqft">Square Footage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {property.featured && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="destructive">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {property.price}
                      </h3>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.address}
                      </p>
                      <p className="text-sm text-gray-500">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
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
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all properties.
              </p>
              <Button onClick={clearFilters}>View All Properties</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}