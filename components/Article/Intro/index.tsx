import React from 'react';
import { FaFacebook, FaShare, FaTwitter } from 'react-icons/fa';
import Divider from '../../Divider';
import { Content, Header, IntroContainer, SocialShareIcons } from './styles';

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

const Intro = () => {
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

  return (
    <IntroContainer>
      <Header>
        <SocialShareIcons>
          <FaFacebook onClick={() => handleShareClick('facebook')} />
          <FaTwitter onClick={() => handleShareClick('twitter')} />
          <FaShare onClick={() => handleShareClick('mail')} />
        </SocialShareIcons>
        <span>Published September 2, 2019</span>
      </Header>
      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          asperiores amet doloremque, cupiditate ex corrupti veniam. Tempore
          reprehenderit aspernatur quidem, aperiam eveniet saepe facilis
          inventore nesciunt molestiae ullam impedit consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          dolorem at itaque cum voluptas quidem perferendis iste rerum placeat
          commodi nemo quos ratione recusandae, nesciunt assumenda corporis,
          dolor rem minus!Perspiciatis saepe aut magni mollitia, dignissimos,
          ullam quasi cumque qui facilis aliquid, pariatur voluptates. Autem
          deserunt eos quasi, excepturi magnam odio incidunt dicta atque, porro
          labore tempora eaque? Cumque, sit.
        </p>
        <p>
          This print interview has been edited, condensed, and annotated. The
          podcast version is currently private – contact{' '}
          <a href="mailto:notesonquotes@gmail.com">notesonquotes@gmail.com</a>{' '}
          with inquiries.
        </p>
      </Content>
      <Divider isHiddenDesktop />
    </IntroContainer>
  );
};

export default Intro;
