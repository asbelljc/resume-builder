import { v4 as uuid } from 'uuid';

const sampleResume = {
  personal: {
    firstName: 'Steven',
    lastName: 'Careers',
    title: 'Web Developer',
    streetAddress: '2101 Waverley St.',
    cityStateZip: 'Palo Alto, CA 94301',
    phone: '012-345-6789',
    email: 'steve.careers@apple.com',
    description:
      'Maecenas libero augue, consequat eget felis a, bibendum condimentum elit. Donec mi lorem, porttitor nec sem vel, sagittis vestibulum ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus mattis libero eu metus mattis, nec dapibus felis pellentesque. In hac habitasse platea dictumst. Cras diam.',
  },
  experience: [
    {
      id: uuid(),
      title: 'Web Developer',
      company: 'Apple Inc.',
      location: 'Cupertino, CA, USA',
      startDate: '12 / 1996',
      endDate: 'present',
    },
    {
      id: uuid(),
      title: 'Junior Developer',
      company: 'Apple Inc.',
      location: 'Cupertino, CA, USA',
      startDate: '4 / 1976',
      endDate: '12 / 1996',
    },
    {
      id: uuid(),
      title: 'Game Designer',
      company: 'Atari',
      location: 'Sunnyvale, CA, USA',
      startDate: '1 / 1974',
      endDate: '4 / 1976',
    },
  ],
  education: [
    {
      id: uuid(),
      school: 'Reed College',
      degree: 'Bachelor of Science (unfinished)',
      concentration: 'Computer Science',
      location: 'Portland, OR, USA',
      startDate: '9 / 1972',
      endDate: '12 / 1972',
    },
    {
      id: uuid(),
      school: 'Homestead High School',
      degree: 'High School Diploma',
      concentration: 'Computer Science',
      location: 'Cupertino, CA, USA',
      startDate: '8 / 1968',
      endDate: '5 / 1972',
    },
  ],
};

export default sampleResume;
