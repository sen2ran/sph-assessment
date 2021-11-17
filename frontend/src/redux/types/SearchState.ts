interface ISelectedDetails {
  author: string;
  title: string;
  content: string;
  edited: string;
  created: string;
}

export interface ISearchState {
  searchList: Array<any>;
  selectedDetails: ISelectedDetails | undefined;
}
