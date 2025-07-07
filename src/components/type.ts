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
  role?: string;
  bio : string
}
