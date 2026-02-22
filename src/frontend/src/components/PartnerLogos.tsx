export default function PartnerLogos() {
  const partners = [
    {
      name: 'YouTube',
      image: '/assets/generated/youtube-logo.dim_200x200.png',
      alt: 'YouTube Logo'
    },
    {
      name: 'Bharat Ke Founder',
      image: '/assets/generated/bharat-ke-founder-logo.dim_200x200.png',
      alt: 'Bharat Ke Founder Logo'
    },
    {
      name: 'MX Player',
      image: '/assets/generated/mx-player-logo.dim_200x200.png',
      alt: 'MX Player Logo'
    }
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Featured On</h2>
          <p className="text-muted-foreground">Trusted by leading platforms</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-24 w-32 items-center justify-center rounded-xl bg-card p-4 shadow-sm transition-all hover:scale-110 hover:shadow-md"
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="h-full w-full object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
