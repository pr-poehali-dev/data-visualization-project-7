interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Upcoming Tours",
    learnMore: "Book Now",
  },
  de: {
    heading: "Kommende Touren",
    learnMore: "Jetzt buchen",
  },
  ru: {
    heading: "Ближайшие туры",
    learnMore: "Записаться",
  },
}

const concerts = {
  en: [
    {
      date: "10.05.2026",
      time: "21:00",
      title: "Full Moon Night Hike",
      venue: "Karelian Taiga, Lake Ladoga shore",
      location: "Karelia",
    },
    {
      date: "24.05.2026",
      time: "20:00",
      title: "Run from the Bear — Forest Quest",
      venue: "Valdai National Park",
      location: "Novgorod Region",
    },
    {
      date: "14.06.2026",
      time: "19:00",
      title: "Summer Solstice Bonfire Trek",
      venue: "Altai Mountains, Katun River",
      location: "Altai",
    },
  ],
  de: [
    {
      date: "10.05.2026",
      time: "21:00",
      title: "Vollmond-Nachtwanderung",
      venue: "Karelische Taiga, Ladogasee-Ufer",
      location: "Karelien",
    },
    {
      date: "24.05.2026",
      time: "20:00",
      title: "Lauf vor dem Bären — Waldquest",
      venue: "Waldai-Nationalpark",
      location: "Region Nowgorod",
    },
    {
      date: "14.06.2026",
      time: "19:00",
      title: "Sommersonnenwende-Lagerfeuer-Trek",
      venue: "Altai-Gebirge, Katun-Fluss",
      location: "Altai",
    },
  ],
  ru: [
    {
      date: "10 мая 2026",
      time: "21:00",
      title: "Ночной поход при полной луне",
      venue: "Карельская тайга, берег Ладоги",
      location: "Карелия",
    },
    {
      date: "24 мая 2026",
      time: "20:00",
      title: "Убеги от медведя — лесной квест",
      venue: "Валдайский национальный парк",
      location: "Новгородская область",
    },
    {
      date: "14 июня 2026",
      time: "19:00",
      title: "Поход на летнее солнцестояние",
      venue: "Горный Алтай, река Катунь",
      location: "Алтай",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}