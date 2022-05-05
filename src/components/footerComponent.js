import WAIcon from '../assets/icon/wa.png';
import FBIcon from '../assets/icon/fb.png';
import IGIcon from '../assets/icon/ig.png';
import TokpedIcon from '../assets/icon/tokped.png';
import {Link} from 'react-router-dom';

const FooterLayout = () => {
  return (
    <>
      <footer
        className={`min-h-[5rem] flex gap-5 flex-col sm:flex-row justify-between p-12 items-center relative bottom-0 h-fit bg-zinc-800 text-white`}>
        <div className="text-3xl">
          <Link to={`/toko-mulyasari-web/faq-page`}>FAQ</Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          {`Kunjungi kami juga di : `}
          <div className="flex gap-2 justify-center items-center">
            <a href="https://wa.me/c/6285314557239">
              <img className="h-8 w-8" src={WAIcon} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100076311812383">
              <img className="h-8 w-8" src={FBIcon} alt="" />
            </a>
            <a href="https://instagram.com/tokomulyasarii?igshid=YmMyMTA2M2Y=">
              <img className="h-9 w-9" src={IGIcon} alt="" />
            </a>
            <a href="https://www.tokopedia.com/tokomulyasarii">
              <img className="h-10 w-10" src={TokpedIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLayout;
