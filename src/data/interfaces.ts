export interface ResumeData {
  personal: PersonalData;
  experience: ExperienceData;
  education: EducationData;
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  title: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
  email: string;
  summary: string;
}

export type ExperienceData = Array<ExperienceItemData>;

export type EducationData = Array<EducationItemData>;

export interface ExperienceItemData {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface EducationItemData {
  id: string;
  school: string;
  degree: string;
  concentration: string;
  location: string;
  startDate: string;
  endDate: string;
}
