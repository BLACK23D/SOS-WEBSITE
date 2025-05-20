export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

export interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}
