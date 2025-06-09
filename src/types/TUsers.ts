export interface User {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  image: {
    url: string;
    alt: string;
  };
  isBusiness: boolean;
}
