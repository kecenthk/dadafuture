import type { TrainingCopy } from "../zh/training";

/** English copy for the training page */
export const trainingCopy: TrainingCopy = {
  meta: {
    title:
      "Overseas + AI Workshop｜Corporate AI Training · Founder IP Bootcamp · Training & Enablement",
    description:
      "DADAFUTURE enablement: Founder IP + Light Physical Business training, corporate AI application training, and the Overseas + AI offline workshop (Session 2, Nov 19, 13:00–17:30, RMB 1,980/person, 20 seats only, includes one 1:1 diagnosis within 30 days). Real practitioners teaching real playbooks.",
  },
  hero: {
    title: "Training & Enablement",
    subtitle: "Real practitioners, real playbooks · See it on site",
    description:
      "Enablement programs and bootcamps: the methods DADAFUTURE validated across RMB 5B+ in hero-product campaigns, passed on to partner companies and partners.",
  },
  modules: {
    ai: {
      title: "AI Content Acquisition & AI Efficiency Training",
      titleEn: "AI Content & Efficiency Training",
      subtitle: "AI-empowered content production and site-wide acquisition efficiency",
      items: [
        {
          no: "01",
          title: "Positioning",
          desc: "AI empowers content production and site-wide acquisition efficiency, helping category innovation, aesthetic strength and scenario strength scale rapidly online.",
        },
        {
          no: "02",
          title: "Training focus",
          desc: "AI batch short-video script generation, spoken copy and hit topics; AI footage editing, digital humans and visual asset efficiency; AI precise keyword deployment, inquiry screening and refined private-domain operations.",
        },
        {
          no: "03",
          title: "Value delivered",
          desc: "Sharply lower content costs, raise daily output capacity and amplify product and IP acquisition at site-wide scale.",
        },
        {
          no: "04",
          title: "Teaching approach",
          desc: "Hands-on deconstruction of mature internal AI workflows, replicated step by step.",
        },
      ],
      photos: [
        {
          src: "/training/ai-training.jpg",
          alt: "AI Agent business loop bootcamp offline class group photo",
          caption: "AI Agent business loop bootcamp · offline class",
        },
      ],
    },
    ip: {
      title: "IP Owner-operator · Light-asset Training",
      titleEn: "IP Owner · Light-asset Training",
      subtitle: "Online plus offline business model · practice guiding practice",
      items: [
        {
          no: "01",
          title: "Positioning",
          desc: "Built on the Little Lily benchmark model, replicating the light-asset IP owner-operator plus home light-store business model.",
        },
        {
          no: "02",
          title: "Training focus",
          desc: "Personal IP business positioning, persona building and track selection; online traffic plus offline micro-store closed loop; short-video and livestream acquisition, private-domain retention and high-ticket conversion across the full chain.",
        },
        {
          no: "03",
          title: "Teaching approach",
          desc: "Practitioners teach practical courses; internal benchmark IPs and operators share hands-on experience and output replicable playbooks.",
        },
        {
          no: "04",
          title: "Study visits",
          desc: "On-site visits to benchmark accounts, benchmark light-asset studios and benchmark livestream rooms.",
        },
      ],
      photos: [
        {
          src: "/training/ip-training.jpg",
          alt: "IP owner-operator light-asset training group photo",
          caption: "IP owner-operator · light-asset training · group photo",
        },
      ],
    },
  },
  salon: {
    latestTemplate: "Latest session · {edition}",
    title: "Overseas + AI Offline Workshop",
    desc: "Only playbooks we are running right now, no industry-trend talk — three speakers, 20 seats, closed-door",
    timeLabel: "Time",
    placeLabel: "Venue",
    seatsLabel: "Seats",
    feeLabel: "Fee",
    feeTemplate: "RMB {price}/person",
    venueNote: "Check in and we'll guide you in",
    images: [
      { src: "/salon/salon-2-invite.png", alt: "Session 2 Overseas + AI Workshop invitation" },
      { src: "/salon/salon-2-speakers.png", alt: "Session 2 speaker lineup" },
      { src: "/salon/salon-2-recap.png", alt: "Previous workshop on site" },
    ],
    speakersTitle: "Three speakers · Only playbooks they are running right now",
    agendaTitle: "Agenda",
    perksTitle: "Take-home kit (RMB 199 export resource pack · 6 items)",
    signupCta: "Reserve / ask about a seat",
    contactPrefix: "Reserve / questions: ",
    contactSuffix: " ({name} · {title}, same number on WeChat)",
  },
};
