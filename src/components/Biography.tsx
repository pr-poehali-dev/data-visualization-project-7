interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Us",
    paragraphs: [
      "Wild Moon Tours was born from a simple idea: real adventures don't happen in hotels. We organize hiking tours deep into Russian forests, where the moon is your lantern and the bear is... well, sometimes a neighbor.",
      "Our routes wind through ancient taiga, misty valleys and crystal-clear rivers. Each tour is an immersive experience — campfire evenings, moonlit walks, forest games and competitions that will make even city folk feel alive.",
      "We run our signature event: 'Run from the Bear' — a legendary forest quest where participants must either outrun our trained companion or earn its trust with a snack. Both outcomes are equally epic.",
      "Our guides have spent decades in the wilderness. They know where the best mushrooms grow, which stars to navigate by and how to brew tea that tastes like the forest itself.",
      "Every tour ends with an awards ceremony around the campfire — prizes for the bravest, the funniest and the one who made friends with the bear first.",
    ],
  },
  de: {
    heading: "Über uns",
    paragraphs: [
      "Wild Moon Tours entstand aus einer einfachen Idee: Echte Abenteuer passieren nicht in Hotels. Wir organisieren Wandertouren tief in russische Wälder, wo der Mond deine Laterne ist und der Bär... nun, manchmal ein Nachbar.",
      "Unsere Routen führen durch uralte Taiga, neblige Täler und kristallklare Flüsse. Jede Tour ist ein intensives Erlebnis — Lagerfeuerabende, Mondlichtspazier gänge, Waldspiele und Wettbewerbe.",
      "Unser Signature-Event: 'Lauf vor dem Bären' — ein legendäres Waldabenteuer, bei dem die Teilnehmer entweder vor unserem dressierten Begleiter fliehen oder sein Vertrauen mit einem Snack gewinnen müssen.",
      "Unsere Guides haben Jahrzehnte in der Wildnis verbracht. Sie wissen, wo die besten Pilze wachsen, nach welchen Sternen man navigiert und wie man Tee brüht, der nach dem Wald schmeckt.",
      "Jede Tour endet mit einer Preisverleihung am Lagerfeuer — Preise für den Mutigsten, den Lustigsten und den, der zuerst Freundschaft mit dem Bären schloss.",
    ],
  },
  ru: {
    heading: "О нас",
    paragraphs: [
      "Wild Moon Tours родился из простой идеи: настоящие приключения не случаются в отелях. Мы организуем туры в глубь русских лесов, где луна — твой фонарь, а медведь... ну, иногда сосед.",
      "Наши маршруты петляют через древнюю тайгу, туманные долины и хрустально чистые реки. Каждый тур — это погружение с головой: вечера у костра, лунные прогулки, лесные игры и конкурсы, которые заставят даже закоренелого горожанина почувствовать себя живым.",
      "Наш фирменный аттракцион: «Убеги от медведя» — легендарный лесной квест, где участники должны либо удрать от нашего дрессированного компаньона, либо завоевать его доверие вкусняшкой. Оба исхода одинаково эпичны.",
      "Наши гиды провели десятилетия в дикой природе. Они знают, где растут лучшие грибы, по каким звёздам ориентироваться и как заварить чай, который пахнет самим лесом.",
      "Каждый тур заканчивается церемонией награждения у костра — призы за смелость, за лучшую шутку и за того, кто первым подружился с медведем.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}