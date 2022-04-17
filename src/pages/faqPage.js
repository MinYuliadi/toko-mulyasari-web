import FaqLayoutComponent from '../components/faqLayoutComponent';
import FaqComponent from '../components/faqComponent';

const FaqPage = () => {
  return (
    <FaqLayoutComponent>
      <FaqComponent
        Question="1. Bagaimana cara membeli di Website Toko Mulyasari ?"
        Answer="Silahkan isi formulir pembelian terlebih dahulu sebelum memasukan belanjaan ke dalam keranjang. Jika memasukan belanjaan kedalam keranjang terlebih dahulu tanpa mengisi formulir pembelanjaan, maka belanjaan tidak akan dimasukan kedalam keranjang dan ditolak otomatis oleh Sistem Website Kami."
      />
      <FaqComponent
        Question="2. Apakah aman mengisikan data kita di Website Toko Mulyasari ?"
        Answer="Semua data konsumen yang di masukan pada formulir pembelian tidak kami simpan pada database Server, melainkan kita hanya menyimpannya pada Cookie browser di masing masing perangkat."
      />
      <FaqComponent
        Question="3. Lantas untuk apa Toko Mulyasari mengharuskan kita mengisi formulir tersebut ?"
        Answer="Data yang dimasukan pada formulir pembelian membantu Admin untuk mengetahui Nomor Whatsapp konsumen beserta Alamatnya, supaya Admin dapat langsung menghubungi konsumen ketika konsumen sudah checkout dan langsung bisa memperkirakan biaya ongkos pengiriman."
      />
      <FaqComponent
        Question="4. Bagaimana cara membayar Product yang di beli di Toko Mulyasari ?"
        Answer="Untuk pembayaran dilakukan via CoD(Cash on Delivery), dimana konsumen membayar ketika barang sudah sampai dilokasi alamat yang telah di cantumkan pada formulir pembelian dan pengantaran dilakukan langsung oleh tim Toko Mulyasari."
      />
      <FaqComponent
        Question="5. Bagaimana alur transaksi di Toko Mulyasari ?"
        Answer="Ketika konsumen selesai Checkout, website Toko Mulyasari akan mengirimkan pesan otomatis melalui Bot Telegram yang dimana isi pesan tersebut berupa data Konsumen yang di masukan pada formulir pembelian beserta informasi product yang akan di beli oleh konsumen. Setelah itu, Admin akan langsung menghubungi konsumen via Whatsapp untuk mengkonfirmasi transaksi yang dilakukan pada Website Toko Mulyasari dan menginformasikan tentang ketersediaan barang, juga admin akan mengkonfirmasi alamat yang diberikan oleh konsumen pada web Toko Mulyasari. Jika alamat dirasa kurang jelas, Admin akan meminta share lokasi pada aplikasi Whatsapp untuk memperjelas tim Toko Mulyasari dalam pengantaran barang."
      />
    </FaqLayoutComponent>
  );
};

export default FaqPage;
