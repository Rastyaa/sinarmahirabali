import { ArrowRight, Droplets, Leaf, ShieldCheck, Factory, Home as HomeIcon, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'IPAL & STP',
    description: 'Sistem Instalasi Pengolahan Air Limbah dan Sewage Treatment Plant modern untuk berbagai skala.',
    icon: <Factory className="w-8 h-8 text-teal-600" />
  },
  {
    title: 'Bio Septic Tank',
    description: 'Solusi sanitasi ramah lingkungan berbahan fiberglass berkualitas tinggi.',
    icon: <Leaf className="w-8 h-8 text-green-500" />
  },
  {
    title: 'Water Treatment',
    description: 'Teknologi pengolahan air bersih untuk kebutuhan komersial dan industri.',
    icon: <Droplets className="w-8 h-8 text-navy-500" />
  },
  {
    title: 'Grease Trap',
    description: 'Perangkap lemak untuk mencegah penyumbatan pipa pada dapur rumah atau restoran.',
    icon: <ShieldCheck className="w-8 h-8 text-teal-500" />
  }
];

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-navy-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-600 to-teal-700 opacity-90 z-0"></div>
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            SOLUSI SANITASI & AIR BERSIH
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Menciptakan Lingkungan <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">Lebih Bersih & Sehat</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200 mx-auto mb-10 leading-relaxed">
            Spesialis pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass untuk masa depan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-navy-700 bg-white hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Lihat Layanan Kami
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-teal-100 to-navy-50 relative group">
                <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-transparent transition duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Water Treatment" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kualitas Terjamin</h4>
                    <p className="text-sm text-gray-500">Standar Industri Tinggi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">Tentang Kami</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                PT. Sinar Mahira Bali
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Adalah perusahaan yang bergerak di bidang pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami menyediakan layanan perencanaan, produksi, pemasangan, dan pemeliharaan IPAL, STP, Bio Septic Tank, Water Treatment, Grease Trap, serta berbagai solusi pendukung lainnya untuk kebutuhan rumah tangga, komersial, dan industri.
              </p>
              <div className="bg-navy-50 border-l-4 border-navy-500 p-6 rounded-r-xl mb-8">
                <p className="text-navy-700 font-medium italic">
                  "Dengan pengalaman dan komitmen terhadap kualitas, kami hadir untuk menciptakan solusi yang efektif, efisien, dan ramah lingkungan."
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 group">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-lightgray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">Layanan Kami</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Solusi Sanitasi Komprehensif</h3>
            <p className="text-lg text-gray-600">Mulai dari skala rumah tangga hingga industri besar, kami memiliki teknologi dan pengalaman untuk menangani kebutuhan pengolahan limbah Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-navy-50 rounded-2xl flex items-center justify-center mb-6 text-navy-600">
                <HomeIcon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Rumah Tangga</h4>
              <p className="text-gray-600">Sistem Bio Septic Tank dan tangki air untuk hunian yang sehat dan bersih.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Komersial</h4>
              <p className="text-gray-600">IPAL & Grease Trap untuk restoran, hotel, rumah sakit, dan gedung perkantoran.</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                <Factory className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Industri</h4>
              <p className="text-gray-600">Sewage Treatment Plant & Water Treatment kapasitas besar standar industri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Meningkatkan Kualitas Sanitasi Anda?</h2>
          <p className="text-xl mb-10 opacity-90">Hubungi tim ahli kami hari ini untuk mendapatkan konsultasi dan penawaran terbaik untuk proyek Anda.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-teal-700 bg-white hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
