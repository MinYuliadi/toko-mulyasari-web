import {ChevronDoubleDownIcon} from '@heroicons/react/outline';
import ScanBarcode from '../assets/icon/wa.link_y4k8cq.png';

const TentangKamiPage = () => {
  return (
    <div className="lg:text-3xl flex-col text-justify p-3 sm:px-12 lg:px-24 sm:text-2xl text-gray-700 font-Ubuntu min-h-full font-medium flex w-full justify-center items-center">
      <span>
        Masih dalam tahap Pengembangan, silahkan hubungi Developer untuk info lebih lanjut dengan
        click Link di bawah ini!
      </span>
      <ChevronDoubleDownIcon className="h-10 w-10" />
      <a className="text-indigo-600" href="https://wa.link/y4k8cq">
        Klik disini!
      </a>
      <span>Atau dengan cara Scan barcode di bawah ini!</span>
      <ChevronDoubleDownIcon className="h-10 w-10" />
      <img className="h-fit w-fit" src={ScanBarcode} alt="" />
    </div>
  );
};

export default TentangKamiPage;
