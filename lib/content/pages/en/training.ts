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
