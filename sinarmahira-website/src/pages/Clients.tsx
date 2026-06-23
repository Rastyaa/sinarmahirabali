import { useState } from 'react';
import { Search, Building2, MapPin } from 'lucide-react';

interface Client {
  name: string;
  location: string;
}

const clientsData: Client[] = [
  { name: 'VILLA COCO', location: 'JL. DOUBLE SIX' },
  { name: 'VILLA JINENG', location: 'JL. PANTAI BRAWA' },
  { name: 'DELTA SPA', location: 'JL. DEWI SRI' },
  { name: 'VILLA MANA KEBUN', location: 'SENGGIGI, LOMBOK BARAT' },
  { name: 'LIVING ASIA', location: 'LOMBOK' },
  { name: 'SAMAJA VILLA', location: 'JL. KUBU PESISI, SEMINYAK' },
  { name: 'DEUS RESTAURANT', location: 'JL. PANTAI BATUBOLONG' },
  { name: 'WATERCRESS RESTAURANT', location: 'JL. BATUBELIG' },
  { name: 'NAUGHTY NURI\'S WARUNG', location: 'JL. BATUBELIG' },
  { name: 'RADANA HOTEL', location: 'JL. RAYA KUTA' },
  { name: 'BERRY BIZ HOTEL', location: 'JL. SUNSET ROAD' },
  { name: 'LA VILLAIS HOTEL', location: 'JL. LEGIAN' },
  { name: 'NEO HOTEL', location: 'JL. LEGIAN' },
  { name: 'INDONESIA POWER (PLN)', location: 'DENPASAR BALI' },
  { name: 'ELEPHANT RAFTING', location: 'KLUNGKUNG' },
  { name: 'ASAM RATU BAGUS', location: 'KARANGASEM' },
  { name: 'ARISTYA VILLA UBUD', location: 'UBUD' },
  { name: 'THE ROYAL SEGINA HOTEL', location: 'JL. MAHENDRADATA' },
  { name: 'ROFFA GALERY HOTEL', location: 'JL. NAKULA IMAM BONJOL' },
  { name: 'GWK CULTURAL PARK', location: 'JL. ULUWATU, JIMBARAN' },
  { name: 'BALI ROYAL BUKIT VILLA', location: 'JL. PURA GUNUNG PAYUNG' },
  { name: 'KUTA TOWN HOUSE', location: 'JL. POPPIES II, KUTA' },
  { name: 'THE BANJAR HOTEL', location: 'JL. RAYA KUTA' },
  { name: 'HOTEL BATU KARU', location: 'JL. GUNUNG BATU KARU' },
  { name: 'BALI HAI', location: 'NUSA LEMBONGAN' },
  { name: 'HOTEL MAMA GIRI', location: 'NUSA LEMBONGAN' },
  { name: 'KFC BATU KANDIK', location: 'JL. CARGO DENPASAR' },
  { name: 'BLUE LAGOON', location: 'NUSA CENINGAN' },
  { name: 'VILLA PALMETO', location: 'GILI TRAWANGAN, LOMBOK' },
  { name: 'FOURTEEN ROSES', location: 'LEGIAN' },
  { name: 'KUTA PURI BUNGALOW', location: 'JL. POPPIES I KUTA' },
  { name: 'OCEAN FIVE', location: 'GILI AIR, LOMBOK' },
  { name: 'MOTEL MEXICOLA', location: 'PETITENGET' },
  { name: 'PASAR TRADISIONAL KUWUM', location: 'MENGWI' },
  { name: 'PT. BIANGLALA', location: 'UNDIKSHA SINGARAJA' },
  { name: 'PT. BIANGLALA', location: 'RS. SANJIWANI GIANYAR' },
  { name: 'PT. BIANGLALA', location: 'KAMPUS UNUD JIMBARAN' },
  { name: 'PT. TAURUS SEJAHTERA (MEGATAMA)', location: 'GEDUNG BMB BALI' },
  { name: 'TUNAS JAYA NUSANTARA', location: 'HOTEL NOVOTEL BENOA' },
  { name: 'KLINIK NWM', location: 'JL. SUDIRMAN, DENPASAR' },
  { name: 'PLT. GU', location: 'DI SERANGAN, DENPASAR' },
  { name: 'NEOREGEN ANTI AGING', location: 'JL. NAKULA, BADUNG BALI' },
  { name: 'LPD WATURENGONG', location: 'JL. WATURENGONG DENPASAR' },
  { name: 'PT. CEE (BANK BPD)', location: 'BATURITI, TABANAN' },
  { name: 'SUNDARI SPA', location: 'PECATU GRAHA' },
  { name: 'NEW WORLD', location: 'PECATU GRAHA' },
  { name: 'GLASS HOUSE', location: 'NUSA DUA' },
  { name: 'PEMUTIH', location: 'LABUHAN SAIT, NUSA DUA' },
  { name: 'RUMAH SAKIT SARI ASIH', location: 'CIPONDOH, JAKARTA' },
  { name: 'KFC TOHPATI', location: 'JL. GATSU TIMUR DENPASAR' },
  { name: 'HOTEL ANDAZ (HYATT)', location: 'SANUR, DENPASAR BALI' },
  { name: 'HOTEL APURVA KEMPINSKI', location: 'NUSA DUA - BALI' },
  { name: 'ANGKASA PURA PROPERTI', location: 'KUTA - BALI' },
  { name: 'RESTO ALAM VILLA', location: 'BUMBAK CANGGU' },
  { name: 'BALI ZOO', location: 'UBUD GIANYAR' },
  { name: 'SMAN 2', location: 'KUTA SELATAN' },
  { name: 'MATHIS LODGE', location: 'AMED KARANGASEM' },
  { name: 'SAMBANGAN HILLS', location: 'SINGARAJA BALI' },
  { name: 'PURI PAYOGAN', location: 'UBUD GIANYAR' },
  { name: 'KESAMBI RESIDENCE', location: 'KESAMBI DENPASAR BALI' },
  { name: 'DAPUR PRIMA', location: 'GATSU DENPASAR' },
  { name: 'MERITA VILLA', location: 'TEGAL CUPEK KEROBOKAN' },
  { name: 'RESTO PIZZA BAGUS', location: 'UBUD GIANYAR' },
  { name: 'HOLLAND BAKERY', location: 'TENGKU UMAR DENPASAR' },
  { name: 'MAGNITUDE', location: 'PROYEK UBUD' },
  { name: 'THE SAREN', location: 'PANTAI NYANYI' },
  { name: 'CV. BAKTI BUMI BERSERI', location: 'RS BAKTI RAHAYU GATSU' },
  { name: 'HOTEL PADMASARI', location: 'LOVINA SINGARAJA' },
  { name: 'PABRIK AQUA', location: 'MAMBAL BADUNG BALI' },
  { name: 'VILLA SENN', location: 'AIR SANIH SINGARAJA' },
  { name: 'HOTEL BAYU KARTIKA', location: 'BAK KOLAM DI LOVINA' },
  { name: 'PERUM GRAMAPARADISO', location: 'SESETAN DENPASAR' },
  { name: 'PT. ARIA JAYA RAYA', location: 'BIMA LOMBOK NTB' },
  { name: 'RSUD BANGLI', location: 'BANGLI' },
  { name: 'PUSKESMAS ABIANSEMAL', location: 'ABIANSEMAL BADUNG BALI' },
  { name: 'BERATAN INDAH SERASI', location: 'BEDUGUL' },
  { name: 'PT. TUNAS JAYA SANUR', location: 'PROJECT KAWASAN BESAKIH' },
  { name: 'PT. TUNAS JAYA SANUR', location: 'PROJECT SAMIGITA' },
  { name: 'PT. ADHI KARYA', location: 'KAWASAN MANGROVE SANUR' },
  { name: 'PT. ADHI KARYA', location: 'WERDHAPURA SANUR' },
  { name: 'KRISNA OLEH-OLEH', location: 'TUBAN' },
  { name: 'KRISNA OLEH-OLEH', location: 'GIANYAR' },
  { name: 'KRISNA OLEH-OLEH', location: 'SINGARAJA' },
  { name: 'KS KASIH IBU', location: 'TEUKU UMAR DENPASAR' },
  { name: 'RS. BROS', location: 'RENON, DENPASAR' },
  { name: 'RS. BALIMED', location: 'MAHENDRADATA, DENPASAR' },
  { name: 'KLINIK DENTIES (GIGI)', location: 'GATSU SUBROTO, DENPASAR' }
];

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clientsData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const midPoint = Math.ceil(filteredClients.length / 2);
  const leftColClients = filteredClients.slice(0, midPoint);
  const rightColClients = filteredClients.slice(midPoint);

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[60px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            Client Kami
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            PT Sinar Mahira Bali (biosmb) Telah Dipercaya 100+ Bisnis di Indonesia
          </p>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[40px]">
        <div className="relative max-w-[500px] mx-auto">
          <Search className="absolute left-[16px] top-[14px] w-[20px] h-[20px] text-text-muted" />
          <input
            type="text"
            placeholder="Cari nama client atau lokasi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[48px] pl-[48px] pr-[20px] rounded-[16px] bg-white/5 border border-white/10 text-text-primary font-jakarta placeholder-text-muted focus:outline-none focus:border-brand-blue focus:bg-white/10 focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>
      </section>

      {/* Table Section */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[40px]">
        {filteredClients.length === 0 ? (
          <div className="text-center py-[60px] bg-glass rounded-[24px] border border-white/8 hover-glow transition-all duration-300">
            <Building2 className="w-[48px] h-[48px] text-text-muted mx-auto mb-[16px]" />
            <p className="text-[18px] text-text-secondary">Tidak ada client yang cocok dengan pencarian Anda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-start">
            {/* Left Table */}
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-glass hover-glow transition-all duration-300">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-[16px] text-[14px] font-bold text-text-primary font-poppins uppercase tracking-wider w-[50%]">Nama</th>
                    <th className="p-[16px] text-[14px] font-bold text-text-primary font-poppins uppercase tracking-wider w-[50%]">Lokasi</th>
                  </tr>
                </thead>
                <tbody>
                  {leftColClients.map((client, i) => (
                    <tr 
                      key={`left-${i}`}
                      className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-[16px] text-[15px] font-bold text-text-primary font-poppins">
                        {client.name}
                      </td>
                      <td className="p-[16px] text-[14px] text-text-secondary">
                        <div className="flex items-center gap-[6px]">
                          <MapPin className="w-[14px] h-[14px] text-brand-coral shrink-0" />
                          <span>{client.location}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Table */}
            {rightColClients.length > 0 && (
              <div className="overflow-hidden rounded-[24px] border border-white/8 bg-glass hover-glow transition-all duration-300">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-[16px] text-[14px] font-bold text-text-primary font-poppins uppercase tracking-wider w-[50%]">Nama</th>
                      <th className="p-[16px] text-[14px] font-bold text-text-primary font-poppins uppercase tracking-wider w-[50%]">Lokasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rightColClients.map((client, i) => (
                      <tr 
                        key={`right-${i}`}
                        className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-[16px] text-[15px] font-bold text-text-primary font-poppins">
                          {client.name}
                        </td>
                        <td className="p-[16px] text-[14px] text-text-secondary">
                          <div className="flex items-center gap-[6px]">
                            <MapPin className="w-[14px] h-[14px] text-brand-coral shrink-0" />
                            <span>{client.location}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Clients;
