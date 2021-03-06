import gql from 'graphql-tag';

export interface FetchHomePage {
  homePage: {
    edges: Array<{
      node: {
        hero: object;
        logo: {
          alt: string;
          copyright: string | null;
          dimensions: {
            width: number;
            height: number;
          };
          url: string;
        };
        metaDescription: string;
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
          logo
          metaDescription: meta_description
        }
      }
    }
    articles: allArticles(first: 3, sortBy: custom_publish_at_DESC) {
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
