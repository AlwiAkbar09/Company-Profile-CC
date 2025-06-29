
export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface ITeams {
    picture : string ;
    name: IUserName;
    role:string;
    bio: string;
}