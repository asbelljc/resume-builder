import { v4 as uuid } from 'uuid';
import { ResumeData } from '../types/data';

const emptyResume: ResumeData = {
  personal: {
    firstName: '',
    lastName: '',
    title: '',
    streetAddress: '',
    cityStateZip: '',
    phone: '',
    email: '',
    summary: '',
  },
  experience: [
    {
      id: uuid(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
    },
  ],
  education: [
    {
      id: uuid(),
      school: '',
      degree: '',
      concentration: '',
      location: '',
      startDate: '',
      endDate: '',
    },
  ],
};

export default emptyResume;
