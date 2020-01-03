import { format } from 'date-fns';
import React, { FC } from 'react';
import { FaFacebook, FaShare, FaTwitter } from 'react-icons/fa';
import Divider from '../Divider';
import { Content, Header, SocialShareIcons } from './styles';

interface IntroProps {
  customPublishedAt: string | null;
  hasAudioEmbed: boolean;
  intro: string;
  publishedAt: string;
}

const POPUP_HEIGHT = 450;
const POPUP_WIDTH = 600;

function getSocialShareUrl(type: string) {
  const title = window.document.title;
  const url = window.location.href;

  switch (type) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    case 'mail':
      return `mailto:?&subject=${title}&body=${url}`;
    default:
      throw new Error(`Unrecognized social share type "${type}"`);
  }
}

const ArticleIntro: FC<IntroProps> = ({
  customPublishedAt,
  hasAudioEmbed,
  intro,
  publishedAt,
}) => {
  const handleShareClick = (type: string) => {
    window.open(
      getSocialShareUrl(type),
      'shareWindow',
      [
        'directories=0',
        `height=${POPUP_HEIGHT}`,
        'location=0',
        'menubar=0',
        'scrollbars=0',
        'toolbar=0',
        `width=${POPUP_WIDTH}`,
        `left=${window.innerWidth / 2 - POPUP_WIDTH / 2}`,
        `top=${window.innerHeight / 2 - POPUP_HEIGHT / 2}`,
      ].join(',')
    );
  };

  const publishDate = (customPublishedAt || publishedAt)
    .substring(0, 10)
    .replace('-', '/');

  return (
    <>
      <Header>
        <SocialShareIcons>
          <FaFacebook onClick={() => handleShareClick('facebook')} />
          <FaTwitter onClick={() => handleShareClick('twitter')} />
          <FaShare onClick={() => handleShareClick('mail')} />
        </SocialShareIcons>
        <span>{format(new Date(publishDate), 'LLLL d, yyyy')}</span>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: intro }} />
      <Content>
        This print interview has been edited, condensed, and annotated.
        {hasAudioEmbed && (
          <>
            {' '}
            The podcast version is available <a href="#audio-version">below</a>.
          </>
        )}
      </Content>
      <Divider isHiddenDesktop />
    </>
  );
};

export default ArticleIntro;
