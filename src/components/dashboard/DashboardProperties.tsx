
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Eye, Home, Building2, Building, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Sample properties data
const propertiesData = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Malibu, California',
    price: 2950000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    type: 'Villa',
    status: 'For Sale',
    featured: true,
    images: []
  },
  {
    id: '2',
    title: 'Luxury Oceanfront Apartment',
    location: 'Miami Beach, Florida',
    price: 1875000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: 'Apartment',
    status: 'For Sale',
    featured: true,
    images: []
  },
  {
    id: '3',
    title: 'Coastal Retreat with Pool',
    location: 'Naples, Florida',
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    type: 'House',
    status: 'For Rent',
    featured: false,
    images: []
  },
  {
    id: '4',
    title: 'Premium Ocean View Penthouse',
    location: 'San Diego, California',
    price: 2250000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    type: 'Penthouse',
    status: 'For Sale',
    featured: false,
    images: []
  },
  {
    id: '5',
    title: 'Beach House with Private Access',
    location: 'Outer Banks, North Carolina',
    price: 1950000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    type: 'House',
    status: 'For Sale',
    featured: true,
    images: []
  }
];

// Updated according to the provided image
const propertyTypes = [
  { id: 'villa', label: 'Villa', icon: Building },
  { id: 'apartment', label: 'Apartment', icon: Building2 },
  { id: 'penthouse', label: 'Penthouse', icon: Building2 },
  { id: 'house', label: 'House', icon: Home },
  { id: 'cottage', label: 'Cottage', icon: Home },
  { id: 'townhouse', label: 'Townhouse', icon: Building },
  { id: 'condo', label: 'Condo', icon: Building2 },
  { id: 'land', label: 'Land', icon: Building },
  { id: 'plot', label: 'Plot', icon: Building },
  { id: 'commercial', label: 'Commercial', icon: Building },
];

const propertyStatus = [
  { id: 'sale', label: 'For Sale' },
  { id: 'rent', label: 'For Rent' },
  { id: 'reserved', label: 'Reserved' },
  { id: 'sold', label: 'Sold' }
];

const DashboardProperties = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("listings");
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState(propertiesData);
  const [selectedProperty, setSelectedProperty] = useState<null | any>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    type: '',
    status: '',
    description: '',
    images: [] as string[]
  });
  const [filterType, setFilterType] = useState('all');
  
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesType;
  });

  const handleViewProperty = (property: any) => {
    setSelectedProperty(property);
  };

  const handleEditProperty = (property: any) => {
    setSelectedProperty(property);
    setFormData({
      title: property.title,
      location: property.location,
      price: property.price,
      bedrooms: property.bedrooms || 0,
      bathrooms: property.bathrooms || 0,
      area: property.area || 0,
      type: property.type,
      status: property.status,
      description: property.description || '',
      images: property.images || []
    });
    setShowEditDialog(true);
  };

  const handleDeleteProperty = (property: any) => {
    setSelectedProperty(property);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (selectedProperty) {
      setProperties(properties.filter(p => p.id !== selectedProperty.id));
      toast({
        title: "Property deleted",
        description: `The property "${selectedProperty.title}" has been successfully deleted.`,
      });
      setShowDeleteDialog(false);
      setSelectedProperty(null);
    }
  };

  const handleToggleFeatured = (property: any) => {
    setProperties(properties.map(p => {
      if (p.id === property.id) {
        return { ...p, featured: !p.featured };
      }
      return p;
    }));
    
    toast({
      title: property.featured ? "Property removed from featured" : "Property added to featured",
      description: `The property "${property.title}" has been ${property.featured ? "removed from" : "added to"} featured properties.`,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'price' || id === 'bedrooms' || id === 'bathrooms' || id === 'area' 
        ? Number(value) 
        : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
      
      toast({
        title: "Images uploaded",
        description: `${e.target.files.length} new image(s) have been uploaded.`
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSaveChanges = () => {
    if (selectedProperty) {
      setProperties(properties.map(p => {
        if (p.id === selectedProperty.id) {
          return { 
            ...p, 
            ...formData
          };
        }
        return p;
      }));
      
      toast({
        title: "Property updated",
        description: "Changes have been saved successfully."
      });
      
      setShowEditDialog(false);
      setSelectedProperty(null);
    }
  };

  const handleAddProperty = () => {
    const newProperty = {
      id: Date.now().toString(),
      ...formData,
      featured: false
    };
    
    setProperties([...properties, newProperty]);
    
    toast({
      title: "Property added",
      description: "The property has been added successfully."
    });
    
    setFormData({
      title: '',
      location: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      type: '',
      status: '',
      description: '',
      images: []
    });
    
    setShowEditDialog(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Property Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Property
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>
                Complete the details to add a new property
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder="Property title"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={formData.location} 
                  onChange={handleInputChange} 
                  placeholder="Property location"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input 
                    id="price" 
                    type="number"
                    value={formData.price} 
                    onChange={handleInputChange} 
                    placeholder="Price"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="area">Area (sq ft)</Label>
                  <Input 
                    id="area" 
                    type="number"
                    value={formData.area} 
                    onChange={handleInputChange} 
                    placeholder="Area in sq ft"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input 
                    id="bedrooms" 
                    type="number"
                    value={formData.bedrooms} 
                    onChange={handleInputChange} 
                    placeholder="Number of bedrooms"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input 
                    id="bathrooms" 
                    type="number"
                    value={formData.bathrooms} 
                    onChange={handleInputChange} 
                    placeholder="Number of bathrooms"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Property Type</Label>
                  <Select value={formData.type} onValueChange={(value) => handleSelectChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map(type => (
                        <SelectItem key={type.id} value={type.label}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleSelectChange('status', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyStatus.map(status => (
                        <SelectItem key={status.id} value={status.label}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  placeholder="Detailed description of the property"
                  rows={4}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="images">Images</Label>
                <div className="flex items-center gap-4">
                  <label 
                    htmlFor="image-upload" 
                    className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Images
                  </label>
                  <Input 
                    id="image-upload" 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <span className="text-sm text-gray-500">
                    {formData.images.length} image(s) selected
                  </span>
                </div>
                
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={image} 
                          alt={`Image ${index + 1}`} 
                          className="h-24 w-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleAddProperty}>Add Property</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="listings" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="listings">Listings</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>
        
        <TabsContent value="listings" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select 
              defaultValue="all" 
              value={filterType} 
              onValueChange={setFilterType}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {propertyTypes.map(type => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Featured</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.title}</TableCell>
                      <TableCell>{property.location}</TableCell>
                      <TableCell>{property.type}</TableCell>
                      <TableCell>${property.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={property.featured ? "text-amber-500" : "text-gray-400"}
                          onClick={() => handleToggleFeatured(property)}
                        >
                          {property.featured ? '★' : '☆'}
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleViewProperty(property)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>{property.title}</DialogTitle>
                                <DialogDescription>{property.location}</DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4 py-4">
                                <div>
                                  <h3 className="font-medium mb-2">General Information</h3>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Type:</span>
                                      <span>{property.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Price:</span>
                                      <span>${property.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Status:</span>
                                      <span>{property.status}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Featured:</span>
                                      <span>{property.featured ? 'Yes' : 'No'}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">Features</h3>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Bedrooms:</span>
                                      <span>{property.bedrooms}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Bathrooms:</span>
                                      <span>{property.bathrooms}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Area:</span>
                                      <span>{property.area} sq ft</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {property.images && property.images.length > 0 && (
                                <div>
                                  <h3 className="font-medium mb-2">Images</h3>
                                  <div className="grid grid-cols-3 gap-4">
                                    {property.images.map((img: string, index: number) => (
                                      <img 
                                        key={index} 
                                        src={img} 
                                        alt={`Image ${index + 1}`}
                                        className="h-40 w-full object-cover rounded-lg" 
                                      />
                                    ))}
                                  </div>
                                </div>
                              )}
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Close</Button>
                                </DialogClose>
                                <Button onClick={() => {
                                  handleEditProperty(property);
                                }}>Edit</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditProperty(property)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteProperty(property)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t px-6 py-3">
              <p className="text-sm text-gray-500">Showing {filteredProperties.length} of {properties.length} properties</p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyTypes.map((type) => (
              <Card key={type.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-coastal-50 rounded-md">
                      <type.icon className="h-5 w-5 text-coastal-600" />
                    </div>
                    <CardTitle>{type.label}s</CardTitle>
                  </div>
                  <Badge variant="outline">{
                    properties.filter(p => p.type.toLowerCase() === type.label.toLowerCase()).length
                  }</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Manage all {type.label.toLowerCase()} properties.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setActiveTab("listings");
                      setFilterType(type.id);
                      toast({
                        title: `${type.label} Properties`,
                        description: `Showing ${type.label} properties.`
                      });
                    }}
                  >
                    View {type.label}s
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="featured">
          <Card>
            <CardHeader>
              <CardTitle>Featured Properties</CardTitle>
              <CardDescription>
                Manage properties that appear in the featured section of the homepage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties
                    .filter(property => property.featured)
                    .map((property) => (
                      <TableRow key={property.id}>
                        <TableCell className="font-medium">{property.title}</TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>{property.type}</TableCell>
                        <TableCell>${property.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleToggleFeatured(property)}
                          >
                            Remove from featured
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Dialog for editing properties */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
            <DialogDescription>
              Modify the details of this property
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="Property title"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                value={formData.location} 
                onChange={handleInputChange} 
                placeholder="Property location"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input 
                  id="price" 
                  type="number"
                  value={formData.price} 
                  onChange={handleInputChange} 
                  placeholder="Price"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="area">Area (sq ft)</Label>
                <Input 
                  id="area" 
                  type="number"
                  value={formData.area} 
                  onChange={handleInputChange} 
                  placeholder="Area in sq ft"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input 
                  id="bedrooms" 
                  type="number"
                  value={formData.bedrooms} 
                  onChange={handleInputChange} 
                  placeholder="Number of bedrooms"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input 
                  id="bathrooms" 
                  type="number"
                  value={formData.bathrooms} 
                  onChange={handleInputChange} 
                  placeholder="Number of bathrooms"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="type">Property Type</Label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map(type => (
                      <SelectItem key={type.id} value={type.label}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleSelectChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyStatus.map(status => (
                      <SelectItem key={status.id} value={status.label}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={formData.description} 
                onChange={handleInputChange} 
                placeholder="Detailed description of the property"
                rows={4}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="images">Images</Label>
              <div className="flex items-center gap-4">
                <label 
                  htmlFor="image-edit-upload" 
                  className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Upload Images
                </label>
                <Input 
                  id="image-edit-upload" 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="text-sm text-gray-500">
                  {formData.images.length} image(s) selected
                </span>
              </div>
              
              {formData.images.length > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-2">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={image} 
                        alt={`Image ${index + 1}`} 
                        className="h-24 w-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Dialog for confirming deletion */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the property
              "{selectedProperty?.title}" from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardProperties;
