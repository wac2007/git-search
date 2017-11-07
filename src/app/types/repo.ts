import { User } from './user';

export class Repo {
  name: String;
  full_name: String;
  owner: User;
  html_url: String;
  description: String;
  watchers: Number;
  stargazers_count: Number;
}
