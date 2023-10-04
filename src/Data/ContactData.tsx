export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();
export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: 'Erlach Bachman',
    role: 'CTO',
    skills: ['BS Ologoy', 'Aviato', 'Master Negotiator'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 2,
    name: 'Richard Hendricks',
    role: 'CEO',
    skills: ['CEO', 'Chief Technology Officer', 'Full Stack Engineeer'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 3,
    name: 'Nelson Bighetti',
    role: 'Full Stack Engineer',
    skills: ['Consultant', 'Hooli', 'Collector of Fine Things'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 4,
    name: 'Bertram Gilfoyle',
    role: 'Network Engineer',
    skills: ['Satanist', 'Influencer of People', 'Drinker of Fine Hops'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    role: 'Programmer',
    skills: ['Java', 'Obsessed with One-Upmanship', 'Loves Hardware'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
];
