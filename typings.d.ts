export type Post = [
  {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
      name: string;
      image: string;
    };
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: object[];
  }
];

export type IndividualPost = {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  subImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: object[];
};

export type IFormInput = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

export type Config = {
  dataset: string;
  projectId: string;
  useCdn: string;
  token: string;
};
