import gql from 'graphql-tag';

export interface FetchArticle {
  article: {
    audioEmbed?: {
      html: string;
    };
    citation: string;
    content: object;
    customPublishedAt: string | null;
    intro: object;
    metaDescription: string;
    pageTitle: string;
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
      audioEmbed: audio_embed
      citation
      content
      customPublishedAt: custom_publish_at
      intro
      metaDescription: meta_description
      pageTitle: page_title
      profileImage: profile_image
      quote
      title
      _meta {
        publishedAt: firstPublicationDate
      }
    }
  }
`;
