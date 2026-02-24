export default function VideoSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Watch Our Story</h2>
          <p className="text-muted-foreground">Discover the journey of Zayora</p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/6sx2KLvPRXw"
              title="Zayora Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
