interface Role {
  name: string;
  description: string;
}

interface Subcategory {
  title: string;
  roles: Role[];
}

export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Job {
  jobTitle: string;
  location: string;
  jobType: string;
  specialty: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  image: string;
  name: string;
  title: string;
}
