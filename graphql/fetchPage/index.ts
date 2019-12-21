import gql from 'graphql-tag';

export interface FetchPage {
  page: {
    content: object;
    metaDescription: string;
    pageTitle: string;
  };
}

export const FETCH_PAGE = gql`
  query fetchPage($slug: String!) {
    page(uid: $slug, lang: "en-us") {
      pageTitle: page_title
      metaDescription: meta_description
      content
    }
  }
`;
