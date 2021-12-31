import { v4 as uuid } from 'uuid';
import { ResumeData } from '../types/data';

const sampleResume: ResumeData = {
  personal: {
    firstName: 'Steven',
    lastName: 'Careers',
    title: 'Web Developer',
    streetAddress: '2101 Waverley St.',
    cityStateZip: 'Palo Alto, CA 94301',
    phone: '012-345-6789',
    email: 'steve.careers@apple.com',
    summary:
      'Donec molestie nibh magna. Aliquam erat volutpat. Donec vel orci neque. Curabitur dignissim bibendum libero, vitae aliquam ipsum gravida sed. Sed vel lectus in orci tincidunt consectetur. Mauris vitae condimentum neque. Nulla vulputate sem ac enim iaculis rhoncus. Aenean bibendum volutpat pulvinar. Maecenas posuere pretium diam, ut pellentesque velit ullamcorper vitae. Cras vel risus quis.',
  },
  experience: [
    {
      id: uuid(),
      title: 'Web Developer',
      company: 'Apple Inc.',
      location: 'Cupertino, CA, USA',
      startDate: 'Dec 1996',
      endDate: 'present',
    },
    {
      id: uuid(),
      title: 'Junior Developer',
      company: 'Apple Inc.',
      location: 'Cupertino, CA, USA',
      startDate: 'Apr 1976',
      endDate: 'Dec 1996',
    },
    {
      id: uuid(),
      title: 'Game Designer',
      company: 'Atari',
      location: 'Sunnyvale, CA, USA',
      startDate: 'Jan 1974',
      endDate: 'Apr 1976',
    },
  ],
  education: [
    {
      id: uuid(),
      school: 'Reed College',
      degree: 'Bachelor of Science (unfinished)',
      concentration: 'Computer Science',
      location: 'Portland, OR, USA',
      startDate: 'Sep 1972',
      endDate: 'Dec 1972',
    },
    {
      id: uuid(),
      school: 'Homestead High School',
      degree: 'High School Diploma',
      concentration: 'Computer Science',
      location: 'Cupertino, CA, USA',
      startDate: 'Aug 1968',
      endDate: 'May 1972',
    },
  ],
};

export default sampleResume;
