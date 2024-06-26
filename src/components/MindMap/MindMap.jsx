import { useState, useEffect, useRef } from 'react';
import css from './MindMap.module.css';
import Slider from 'react-slick';
import icon from '../../Image/symbol-defs.svg';

const MindMap = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLinkClick = (event, url) => {

    event.preventDefault();
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="M-Map">
      <p className={css.MingMapP}>Mind map</p>
      {windowWidth >= 768 ? (
        <div className={css.cardGrid}>
          <div className={css.divSlaider} key={1}>
            <p className={css.divSlaiderText}>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <p className={css.divSlaiderTitle}>YAPE DROP</p>
          </div>
          <div className={css.divSlaider} key={2}>
            <p className={css.divSlaiderText}>
              Launch of the 2nd YACHT Collection Releasing the first version
              of the Ape Slam Game
            </p>
            <p className={css.divSlaiderTitle}>New Collection</p>
          </div>
          <div className={css.divSlaider} key={3}>
            <p className={css.divSlaiderText}>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <p className={css.divSlaiderTitle}>Token</p>
          </div>
          <div className={css.divSlaiderFinal} key={4}>
          <a onClick={event =>
                  handleLinkClick(event, 'https://github.com/Ne1rem/ape-nft-softryzen')
                } href="https://github.com/Ne1rem/ape-nft-softryzen" className={css.a}>
              <svg className={css.divSlaiderSvg}>
                <use href={`${icon}#icon-arrow`} />
              </svg>
              <p className={css.divSlaiderTitle}>Learn <br/>more <br/> in mind map</p>
            </a>
          </div>
        </div>
      ) : (
        <div className={css.sliderContainer}>
          <Slider
            ref={slider => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className={css.divSlaider} key={1}>
              <p className={css.divSlaiderText}>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </p>
              <p className={css.divSlaiderTitle}>YAPE DROP</p>
            </div>
            <div className={css.divSlaider} key={2}>
              <p className={css.divSlaiderText}>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </p>
              <p className={css.divSlaiderTitle}>New Collection</p>
            </div>
            <div className={css.divSlaider} key={3}>
              <p className={css.divSlaiderText}>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </p>
              <p className={css.divSlaiderTitle}>Token</p>
            </div>
            <div className={css.divSlaiderFinal} key={4}>
              <a onClick={event =>
                  handleLinkClick(event, 'https://github.com/Ne1rem/ape-nft-softryzen')
                } href="https://github.com/Ne1rem/ape-nft-softryzen" className={css.a}>
                <svg className={css.divSlaiderSvg}>
                  <use href={`${icon}#icon-arrow`} />
                </svg>
                <p className={css.divSlaiderTitle}>Learn more in mind map</p>
              </a>
            </div>
          </Slider>
          <div style={{ textAlign: 'center', paddingTop: '24px' }}>
            <button className={css.buttonNextPrev} onClick={previous}>
              Prev
            </button>
            <button className={css.buttonNextPrev} onClick={next}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindMap;
