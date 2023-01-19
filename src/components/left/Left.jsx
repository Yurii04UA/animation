import range1 from '../../assets/rr1.jpg';
import range2 from '../../assets/rr2.jpg';
import range3 from '../../assets/rr3.jpg';
import './Left.css';

export const Left = () => {
  return (
    <>
      <div className='leftWrapper leftAnimate'>
        <div className="top">
            TOP
        </div>
        <p>
        here image
        </p>
        <div className="bottom">
            BOTTOM
        </div>
    </div>
      <div className='rightWrapper rightAnimate'>
        <div className="top">
            Author
        </div>
        <p>
        Some content
        </p>
        <div className="bottom">
            Tweet text
        </div>
        {/* <img className='leftImg' src={range3} alt="" /> */}
    </div>
    </>
  );
};
