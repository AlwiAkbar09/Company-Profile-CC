export interface ITeam {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
  role?: string;
}
