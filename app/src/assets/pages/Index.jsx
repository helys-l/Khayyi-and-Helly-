import Video from '../videos/video.mp4';
import FotoBusem from '../images/foto_busem.jpg';
import FotoKotaLama from '../images/foto_kotalama.jpg';
import FotoBunbin from '../images/foto_bunbin.jpg';
import FotoSepeda from '../images/sepedah.png';
import FotoBaee from '../images/baeee.png';
import FotoPrincess from '../images/gambar_princess.png';
import FotoHelly from '../images/foto_hely.png';
import FotoPangeran from '../images/gambar_pangeran.png';
import LogoWa from '../images/logo_wa.jpg';
import LogoIg from '../images/ig_logo.png';
import LogoTele from '../images/tele_logo.png';
import Logo from '../images/logo.jpg';
import Hati from '../images/hati.png';

const KhayyiHelyy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 font-sans text-pink-900 selection:bg-pink-300 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between px-8 py-3">
        <div
          className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-pink-300 shadow-sm"
          style={{ backgroundImage: `url(${Logo})` }}
          aria-label="Logo"
        ></div>
        <h1 className="flex-grow text-center text-4xl font-dancing-script tracking-wide drop-shadow-md select-none">
          Khayyi dan Helyy
        </h1>
        <ul className="hidden sm:flex space-x-8 font-medium text-lg">
          {['beranda', 'tentang_kami', 'kontak'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-pink-600 transition-colors duration-300 capitalize"
              >
                {id.replace('_', ' ')}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Video */}
        <section
          id="beranda"
          className="rounded-3xl overflow-hidden shadow-lg aspect-video mb-14 border-8 border-pink-300"
          aria-label="Hero video"
        >
          <video
            className="w-full h-full object-cover"
            src={Video}
            autoPlay
            muted
            loop
            playsInline
          />
        </section>

        {/* Stories Grid */}
        <section className="grid gap-10 grid-cols-1 md:grid-cols-3 mb-20">
          {[{
            title: 'Manipulator',
            img: FotoBusem,
            text: 'Foto tersebut diambil ketika sepasang kekasih tersebut berhasil mengalahkan final bos, dengan mengelabuhi sang pengawas. Sehingga mereka diberi gelar "Sang Manipultor".',
          }, {
            title: 'Cinta dan Malam',
            img: FotoKotaLama,
            text: 'Malam itu penuh makna—terlalu indah untuk dilupakan, namun terlalu menyakitkan untuk diulang. Maaf, untuk segala luka yang mungkin tertinggal. Terima kasih, atas kenangan yang kamu berikan.',
          }, {
            title: 'Capek Euyy',
            img: FotoBunbin,
            text: 'Sebuah perjalanan yang panjang di bunbin Surabaya, sepasang pasangan yang sedang menikmati jalan-jalan, satu kata untuk ini, "capek euyy". Dua kata deng, tetapi sangat menyenangkan.',
          }].map(({ title, img, text }, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              tabIndex={0}
              aria-label={`Cerita ${title}`}
            >
              <h2 className="font-dancing-script text-3xl mb-3 text-pink-700">{title}</h2>
              <p className="text-pink-800 mb-5 font-serif text-sm md:text-base">{text}</p>
              <img
                src={img}
                alt={title}
                className="rounded-xl object-cover w-full max-h-60 shadow-md"
                loading="lazy"
              />
            </article>
          ))}
        </section>

        {/* About Us Interactive Section */}
        <section
          id="tentang_kami"
          className="flex justify-end mb-20"
          aria-label="About us section"
        >
          <div className="relative group w-64 max-w-[260px] aspect-square rounded-full cursor-pointer shadow-2xl transition-all duration-700">
            <img
              src={FotoSepeda}
              alt="Sepeda"
              className="w-full h-full object-cover rounded-full group-hover:translate-x-[-55vw] transition-transform duration-700"
            />
            
          </div>
        </section>

        {/* Couple Photo Hover Reveal */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20" aria-label="Couple photos">
          {[{
            base: FotoBaee,
            overlay: FotoPrincess,
          }, {
            base: FotoHelly,
            overlay: FotoPangeran,
          }].map(({ base, overlay }, i) => (
            <div
              key={i}
              className="relative rounded-[20vw] h-[70vw] sm:h-[50vw] shadow-2xl overflow-hidden cursor-pointer group"
              style={{ backgroundImage: `url(${base})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div
                className="absolute inset-0 rounded-[18vw] bg-pink-300 transform translate-x-0 group-hover:translate-x-full transition-transform duration-[900ms]"
                style={{ backgroundImage: `url(${overlay})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-hidden="true"
              ></div>
            </div>
          ))}
        </section>

        {/* Romantic Quote Flip Card */}
        <section
          className="relative max-w-4xl mx-auto h-[50vw] sm:h-[30vw] perspective-1000 rounded-[20vw] shadow-2xl mb-20"
          aria-label="Romantic quote flip card"
        >
          <div className="absolute inset-0 backface-hidden rounded-[20vw] bg-white flex flex-col items-center justify-center p-8">
            <p className="text-center text-pink-700 font-serif text-xs sm:text-xl leading-relaxed">
              Helyy jatuh cinta pada Khayyi sejak pandangan pertama, terpesona oleh sikapnya yang lembut...
            </p>
            <a
              href="https://docs.google.com/document/d/17flvypZ-D20dTRckUgy4r-NcPns2zRmS/export?format=docx"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 text-pink-700 underline font-semibold hover:text-pink-500 transition"
            >
              Baca selengkapnya..
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="kontak"
          className="bg-pink-300 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-xl py-12 shadow-inner"
          aria-label="Contact section"
        >
          <div className="flex justify-center items-center gap-12 flex-wrap max-w-xl mx-auto">
            {[{
              href: 'https://wa.me/6285755436736',
              logo: LogoWa,
              alt: 'WhatsApp',
            }, {
              href: 'https://www.instagram.com/16reasons?igsh=b3lsb3FvcGJhNjVh',
              logo: LogoIg,
              alt: 'Instagram',
            }, {
              href: 'https://t.me/@NXCKdeep',
              logo: LogoTele,
              alt: 'Telegram',
            }].map(({ href, logo, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 sm:w-24 hover:scale-110 transition-transform duration-300"
                aria-label={`Link ke ${alt}`}
              >
                <img src={logo} alt={alt} className="w-full rounded-xl shadow-lg" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default KhayyiHelyy;