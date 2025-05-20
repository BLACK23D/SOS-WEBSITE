export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  content: string;
  image: string;
  type: 'worker' | 'corporate';
}
