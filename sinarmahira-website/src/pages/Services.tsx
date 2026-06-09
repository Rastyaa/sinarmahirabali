import { Factory, Leaf, Droplets, ShieldCheck, Settings, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'IPAL (Instalasi Pengolahan Air Limbah)',
    slug: 'ipal',
    description: 'Sistem pengolahan air limbah domestik dan medis yang dirancang khusus untuk memenuhi standar baku mutu lingkungan.',
    icon: <Factory className="w-[32px] h-[32px] text-brand-coral" />
  },
  {
    title: 'STP (Sewage Treatment Plant)',
    slug: 'stp',
    description: 'Solusi pengolahan limbah cair skala besar untuk hotel, apartemen, dan kawasan industri dengan efisiensi tinggi.',
    icon: <Settings className="w-[32px] h-[32px] text-brand-coral" />
  },
  {
    title: 'Bio Septic Tank',
    slug: 'bio-septic-tank',
    description: 'Tangki septik modern berbahan fiberglass yang dilengkapi sistem filtrasi biologis untuk mencegah pencemaran air tanah.',
    icon: <Leaf className="w-[32px] h-[32px] text-brand-coral" />
  },
  {
    title: 'Water Treatment Plant',
    slug: 'water-treatment',
    description: 'Teknologi penjernihan air mutakhir yang mengubah air kotor atau payau menjadi air bersih siap pakai.',
    icon: <Droplets className="w-[32px] h-[32px] text-brand-coral" />
  },
  {
    title: 'Grease Trap',
    slug: 'grease-trap',
    description: 'Perangkap lemak untuk dapur rumah sakit, restoran, atau industri makanan guna mencegah penyumbatan pipa.',
    icon: <ShieldCheck className="w-[32px] h-[32px] text-brand-coral" />
  },
  {
    title: 'Custom & Maintenance Service',
    slug: 'maintenance',
    description: 'Layanan kustomisasi tangki fiberglass dan perawatan rutin sistem sanitasi untuk memastikan operasional optimal.',
    icon: <Wrench className="w-[32px] h-[32px] text-brand-coral" />
  }
];

const Services = () => {
  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            Layanan Kami
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            Solusi komprehensif pengolahan air limbah dan sanitasi untuk kebutuhan rumah tangga, komersial, hingga skala industri besar.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-[80px] md:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-[24px] border-l-[4px] border-l-brand-coral shadow-raised p-[32px] md:p-[48px] hover:shadow-floating transition-shadow flex flex-col h-full"
              >
                <div className="flex flex-col md:flex-row gap-[24px] items-start flex-grow">
                  <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary mb-[16px] leading-[1.3] font-poppins group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mb-[24px] flex-grow">
                      {service.description}
                    </p>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-[8px] text-brand-blue font-bold font-jakarta text-[16px] hover:text-brand-coral transition-colors mt-auto"
                    >
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-[20px] h-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] bg-surface-light border-t border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="bg-transparent border border-white/10 rounded-[24px] shadow-floating p-[48px] md:p-[80px] text-center text-text-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-coral"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins tracking-[-0.02em]">
              Butuh Konsultasi untuk Proyek Anda?
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta max-w-[600px] mx-auto leading-[32px]">
              Tim tenaga ahli kami siap melakukan survey dan memberikan penawaran solusi terbaik sesuai standar kebutuhan lingkungan Anda.
            </p>
            <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[56px] px-[40px] rounded-[16px] font-jakarta text-[18px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors">
              Hubungi Konsultan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
