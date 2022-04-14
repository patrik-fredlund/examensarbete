import '../styles/App.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <span className='visit'>Hey! Visit me at:</span>
        <a className='footerLink' href='https://github.com/patrik-fredlund'>
          Github
        </a>
        <a
          className='footerLink'
          href='https://open.spotify.com/artist/7LsmIbjrknNXxVSEVsvljl?si=8sDDum7ZRq6ljZxL33aSsw'
        >
          Spotify
        </a>
        <a
          className='footerLink'
          href='https://www.instagram.com/putteochhoket/?hl=sv'
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;