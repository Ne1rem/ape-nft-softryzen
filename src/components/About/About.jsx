import css from './About.module.css';
import imageX from '../../Image/Images/x.png';
import image from '../../Image/Images/About.png';
// import Slider from 'react-slick';

const About = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   arrows: false,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 0,
  //   cssEase: 'linear',
  // };

  return (
    <div className={css.divAbout}>
      <p className={css.aStoryAbout}>
        a Story that started with{' '}
        <span className={css.span}>one simple ape</span>
      </p>
      <p className={css.whoGotAbout}>
        WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE
        IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
      </p>
      <div className={css.divAboutX}>
        <img src={imageX} className={css.x} alt="x" />
        <p className={css.eachArtworkAbout}>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
          RANDOMLY GENERATED BY USERS
        </p>
      </div>
      <img src={image} className={css.AboutMonkey} alt="MonkeyAbout" />
      {/* <div className={css.sliderContainer}>
        <Slider {...settings}>
          <div className={css.divSlider}>
            <div className={css.divSliderFlex}>
              <p>Destroy stereotypes</p>
              <img src={imageX} alt="X" />
            </div>
          </div>
          <div className={css.divSlider}>
            <div className={css.divSliderFlex}>
              <p>HAVE NO LIMITS</p>
              <img src={imageX} alt="X" />
            </div>
          </div>
          <div className={css.divSlider}>
            <div className={css.divSliderFlex}>
              <p>Break rules</p>
              <img src={imageX} alt="X" />
            </div>
          </div>
        </Slider>
      </div> */}
    </div>
  );
};

export default About;
