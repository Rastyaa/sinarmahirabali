import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Instalasi STP Hotel Bintang 5',
    location: 'Nusa Dua, Bali',
    serviceType: 'STP (Sewage Treatment Plant)',
    description: 'Pembangunan dan instalasi sistem pengolahan limbah cair kapasitas 150 m3/hari untuk memenuhi standar baku mutu hotel premium.',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Pengadaan IPAL Rumah Sakit Umum',
    location: 'Denpasar, Bali',
    serviceType: 'IPAL Medis',
    description: 'Solusi IPAL terintegrasi untuk menangani limbah infeksius dan domestik rumah sakit dengan sistem klorinasi otomatis.',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Pemasangan Bio Septic Tank Perumahan',
    location: 'Canggu, Bali',
    serviceType: 'Bio Septic Tank',
    description: 'Instalasi 50 unit Bio Septic Tank berbahan fiberglass tahan bocor untuk kawasan perumahan elit guna menjaga kualitas air tanah.',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Sistem Water Treatment Pabrik F&B',
    location: 'Gianyar, Bali',
    serviceType: 'Water Treatment Plant',
    description: 'Perancangan sistem reverse osmosis (RO) dan filtrasi multi-tahap untuk kebutuhan air bersih produksi pabrik makanan dan minuman.',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200'
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col w-full bg-surface-light font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-brand-blue pt-[160px] pb-[80px] px-[16px] md:px-[32px]">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2]">
            Proyek Kami
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-white/80 leading-[32px]">
            Bukti nyata dedikasi kami dalam memberikan solusi pengolahan air limbah terbaik untuk berbagai sektor di seluruh Bali.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white rounded-[24px] overflow-hidden shadow-raised border border-border-subtle flex flex-col hover:shadow-floating transition-shadow">
              
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-[24px] right-[24px] bg-white px-[16px] py-[8px] rounded-full text-[14px] font-bold text-brand-coral shadow-md">
                  {project.serviceType}
                </div>
              </div>

              <div className="p-[32px] flex flex-col flex-grow">
                <div className="flex items-center justify-between text-text-muted text-[14px] mb-[16px] font-medium">
                  <div className="flex items-center gap-[8px]">
                    <MapPin className="w-[16px] h-[16px]" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Calendar className="w-[16px] h-[16px]" />
                    Tahun {project.year}
                  </div>
                </div>

                <h3 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px] leading-[1.3] group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mb-[24px] flex-grow">
                  {project.description}
                </p>

                <button className="flex items-center gap-[8px] text-brand-blue font-bold hover:text-brand-coral transition-colors mt-auto self-start">
                  Lihat Detail Proyek
                  <ArrowRight className="w-[16px] h-[16px]" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
