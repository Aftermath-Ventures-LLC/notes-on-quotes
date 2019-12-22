import gql from 'graphql-tag';

export interface FetchHomePage {
  homePage: {
    edges: Array<{
      node: {
        hero: object;
      };
    }>;
  };
  articles: {
    edges: Array<{
      node: {
        profileImage: {
          alt: string;
          copyright: string | null;
          dimensions: {
            width: number;
            height: number;
          };
          url: string;
        };
        quote: object;
        title: object;
        meta: {
          uid: string;
        };
      };
    }>;
  };
}

export const FETCH_HOME_PAGE = gql`
  {
    homePage: allHome_pages {
      edges {
        node {
          hero
        }
      }
    }
    articles: _allDocuments(
      last: 3
      sortBy: meta_lastPublicationDate_DESC
      type: "article"
    ) {
      edges {
        node {
          ... on Article {
            profileImage: profile_image
            quote
            title
            meta: _meta {
              uid
            }
          }
        }
      }
    }
  }
`;
