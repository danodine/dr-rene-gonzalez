export type TestimonialVideo = {
  id: string;
  title: string;
  patient: string;
  treatment: string;
  youtubeUrl: string;
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "rinoplastia-1",
    title: "Testimonio Rinoplastia",
    patient: "Paciente 01",
    treatment: "Rinoplastia",
    youtubeUrl: "https://www.youtube.com/watch?v=O2BSqDWaxb8",
  },
  {
    id: "rinoplastia-2",
    title: "Cambio Natural",
    patient: "Paciente 02",
    treatment: "Armonizacion Facial",
    youtubeUrl: "https://www.youtube.com/watch?v=O2BSqDWaxb8",
  },
  {
    id: "rinoplastia-3",
    title: "Resultado Elegante",
    patient: "Paciente 03",
    treatment: "Blefaroplastia",
    youtubeUrl: "https://www.youtube.com/watch?v=O2BSqDWaxb8",
  },
  {
    id: "rinoplastia-4",
    title: "Mi Nueva Confianza",
    patient: "Paciente 04",
    treatment: "Botox Facial",
    youtubeUrl: "https://www.youtube.com/watch?v=O2BSqDWaxb8",
  },
  {
    id: "rinoplastia-5",
    title: "Experiencia Real",
    patient: "Paciente 05",
    treatment: "Bichectomia",
    youtubeUrl: "https://www.youtube.com/watch?v=O2BSqDWaxb8",
  },
];

const getYoutubeId = (url: string) => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.searchParams.get("v")) {
      return parsed.searchParams.get("v") ?? "";
    }

    const parts = parsed.pathname.split("/");
    return parts[parts.length - 1] ?? "";
  } catch {
    return "";
  }
};

export const toEmbedUrl = (url: string) => {
  const id = getYoutubeId(url);
  return `https://www.youtube.com/embed/${id}`;
};

export const toThumbnailUrl = (url: string) => {
  const id = getYoutubeId(url);
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
};

export const pickRandomVideos = (count: number) => {
  const pool = [...testimonialVideos];

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  if (pool.length >= count) {
    return pool.slice(0, count);
  }

  const repeated = [...pool];

  while (repeated.length < count && pool.length > 0) {
    repeated.push(pool[repeated.length % pool.length]);
  }

  return repeated.slice(0, count);
};
