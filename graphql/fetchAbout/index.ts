import gql from 'graphql-tag';

export interface FetchAbout {
  allAbouts: {
    edges: Array<{
      node: {
        content: object;
        metaDescription: string;
        pageTitle: string;
      };
    }>;
  };
}

export const FETCH_ABOUT = gql`
  {
    allAbouts {
      edges {
        node {
          pageTitle: page_title
          metaDescription: meta_description
          content
        }
      }
      totalCount
    }
  }
`;
