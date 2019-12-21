import gql from 'graphql-tag';

export interface FetchArticle {
  article: {
    citation: string;
    content: object;
    intro: object;
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
    _meta: {
      publishedAt: string;
    };
  };
}
export const FETCH_ARTICLE = gql`
  query fetchArticle($slug: String!) {
    article(uid: $slug, lang: "en-us") {
      citation
      content
      intro
      profileImage: profile_image
      quote
      title
      _meta {
        publishedAt: firstPublicationDate
      }
    }
  }
`;
