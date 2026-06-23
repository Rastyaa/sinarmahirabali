import { MapPin, Calendar } from 'lucide-react';
import imgStp from '../assets/IMG_0353.JPG.jpeg';
import imgGreaseTrap from '../assets/IMG_0354.JPG.jpeg';
import imgBioSeptic from '../assets/IMG_0355.JPG.jpeg';
import imgIpalMedis from '../assets/IMG_0356.JPG.jpeg';
import imgWtp from '../assets/IMG_0357.JPG.jpeg';
import imgExtra from '../assets/IMG_0358.JPG.jpeg';

const projects = [
  {
    title: 'Instalasi STP Hotel Bintang 5',
    location: 'Nusa Dua, Bali',
    serviceType: 'STP (Sewage Treatment Plant)',
    description: 'Pembangunan dan instalasi sistem Sewage Treatment Plant (STP) kapasitas besar multi-chamber untuk menyaring dan mengolah limbah cair domestik kawasan hotel premium.',
    year: '2025',
    imageUrl: imgStp
  },
  {
    title: 'Pengadaan IPAL Restoran & Komersial',
    location: 'Seminyak, Bali',
    serviceType: 'Grease Trap & IPAL',
    description: 'Instalasi unit penyaring lemak (Grease Trap) dan pengolahan limbah cair terintegrasi untuk mendukung kebersihan dapur komersial restoran.',
    year: '2025',
    imageUrl: imgGreaseTrap
  },
  {
    title: 'Pemasangan Bio Septic Tank Perumahan',
    location: 'Canggu, Bali',
    serviceType: 'Bio Septic Tank',
    description: 'Pemasangan unit Bio Septic Tank horizontal fiberglass ramah lingkungan tahan bocor untuk menjaga kualitas sanitasi lingkungan perumahan.',
    year: '2024',
    imageUrl: imgBioSeptic
  },
  {
    title: 'Sistem Pengolahan Limbah Medis (IPAL)',
    location: 'Denpasar, Bali',
    serviceType: 'IPAL Medis',
    description: 'Pemasangan tangki bio-filtrasi bulat khusus dengan instalasi pipa klorinasi otomatis untuk memproses air limbah medis rumah sakit.',
    year: '2025',
    imageUrl: imgIpalMedis
  },
  {
    title: 'Pembangunan STP Kawasan Villa',
    location: 'Ubud, Bali',
    serviceType: 'STP (Sewage Treatment Plant)',
    description: 'Konstruksi bak beton penampung dengan tangki STP fiberglass kapasitas menengah untuk pengolahan limbah terpusat di kawasan villa.',
    year: '2024',
    imageUrl: imgWtp
  },
  {
    title: 'Instalasi Bio Septic Tank Vertikal & Pompa',
    location: 'Sanur, Bali',
    serviceType: 'Bio Septic Tank Vertikal',
    description: 'Pemasangan tangki Bio Septic Tank model vertikal kapasitas 1500 liter (merk BIOSMB) lengkap dengan pompa submersible otomatis.',
    year: '2025',
    imageUrl: imgExtra
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            Proyek Kami
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            Bukti nyata dedikasi kami dalam memberikan solusi pengolahan air limbah terbaik untuk berbagai sektor di seluruh Bali.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
          {projects.map((project, i) => (
            <div key={i} className="group bg-glass rounded-[24px] overflow-hidden shadow-modal border border-white/8 flex flex-col hover:shadow-floating transition-all duration-300 hover-glow">
              
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-[24px] right-[24px] bg-glass/90 backdrop-blur-md px-[16px] py-[8px] rounded-full text-[13px] font-extrabold text-brand-coral border border-white/20 shadow-floating">
                  {project.serviceType}
                </div>
              </div>

              <div className="p-[32px] flex flex-col flex-grow">
                <div className="flex items-center justify-between text-text-muted text-[14px] mb-[16px] font-semibold">
                  <div className="flex items-center gap-[8px]">
                    <MapPin className="w-[16px] h-[16px] text-brand-coral" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Calendar className="w-[16px] h-[16px] text-brand-blue" />
                    Tahun {project.year}
                  </div>
                </div>

                <h3 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px] leading-[1.3] group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta flex-grow">
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
