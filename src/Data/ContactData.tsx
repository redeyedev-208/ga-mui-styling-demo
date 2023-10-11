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
    role: 'Dev',
    skills: ['React', 'JavaScript'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 2,
    name: 'Richard Hendricks',
    role: 'Dev',
    skills: ['C++', 'React', 'Machine Learning'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 3,
    name: 'Nelson Bighetti',
    role: 'Dev',
    skills: ['Node'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 4,
    name: 'Bertram Gilfoyle',
    role: 'Dev',
    skills: ['Network Engineer', 'Python', 'DevOps'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    role: 'Dev',
    skills: ['Java', 'React', 'Angular'],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 'Work From Home',
  },
];
