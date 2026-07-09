export type TestimonialVideo = {
  id: string;
  title: string;
  treatment: string;
  youtubeUrl: string;
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "1",
    title: "Resultados de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/xIGjoSBDYMI",
  },
  {
    id: "2",
    title: "Resultados de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/Kt1ta_xTnRM",
  },
  {
    id: "3",
    title: "Cambio radical de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/z-vtfoyOEmE",
  },
  {
    id: "4",
    title: "Transformación de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/FTnnc9wWgQ0",
  },
  {
    id: "5",
    title: "Resultados de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/WPtomyUnOyY?feature=share",
  },
  {
    id: "6",
    title: "Rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/nmH7XUkwsJ0",
  },
  {
    id: "7",
    title: "Resultado final de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/vqvRc1bnq7k",
  },
  {
    id: "8",
    title: "Transformación de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/JouQROpQxtU",
  },
  {
    id: "9",
    title: "Antes y después - Rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://youtu.be/QQK0Prscyws",
  },
  {
    id: "10",
    title: "Testimonio - Cambio de rinoplastia",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/IL0Kwbg967Y?feature=share",
  },
  {
    id: "11",
    title: "Dr. René González - Información",
    treatment: "Cirugía Estética Corporal",
    youtubeUrl: "https://www.youtube.com/shorts/nK3KuAjkyXk?feature=share",
  },
  {
    id: "12",
    title: "Dr. René González - Botox",
    treatment: "Medicina Estética Facial",
    youtubeUrl: "https://www.youtube.com/shorts/KnxP1ZQiNDw?feature=share",
  },
  {
    id: "13",
    title: "Ácido hialurónico",
    treatment: "Hidratación y calidad de la piel",
    youtubeUrl: "https://www.youtube.com/shorts/MHnb3Jz7Cig?feature=share",
  },
  {
    id: "14",
    title: "Ácido hialurónico",
    treatment: "Hidratación y calidad de la piel",
    youtubeUrl: "https://www.youtube.com/shorts/vsLQvvVyp-s?feature=share",
  },
  {
    id: "15",
    title: "Procedimiento - Consulta",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/jv8vsd0nqZQ?feature=share",
  },
  {
    id: "16",
    title: "Bichectomía",
    treatment: "Cirugía Estética Facial",
    youtubeUrl: "https://www.youtube.com/shorts/IeNa2OBreJ0?feature=share",
  },
  {
    id: "17",
    title: "Rinoplastia antes y después",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/RXzngr2R5hE?feature=share",
  },
  {
    id: "19",
    title: "Otoplastia",
    treatment: "Cirugía Estética Facial",
    youtubeUrl: "https://www.youtube.com/shorts/Hcjj0zPudz4?feature=share",
  },
  {
    id: "21",
    title: "Rinoplastia antes y después",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/_1U7fKq7ovU?feature=share",
  },
  {
    id: "22",
    title: "Cirugía de nariz y mentón",
    treatment: "Cirugía Estética",
    youtubeUrl: "https://www.youtube.com/shorts/O2BSqDWaxb8?feature=share",
  },
  {
    id: "23",
    title: "Láser CO2 fraccionado",
    treatment: "Medicina Estética Facial",
    youtubeUrl: "https://youtube.com/shorts/pwId4yid57U?feature=share",
  },
  {
    id: "24",
    title: "Procedimiento con bótox",
    treatment: "Medicina Estética Facial",
    youtubeUrl: "https://youtube.com/shorts/YMIBq5L2hQM?feature=share",
  },
  {
    id: "25",
    title: "Rinoplastia en Mujeres",
    treatment: "Rinoplastia",
    youtubeUrl: "https://youtube.com/shorts/xheK87gz5sY?feature=share",
  },
  {
    id: "26",
    title: "Rinoplastia en Hombres",
    treatment: "Rinoplastia",
    youtubeUrl: "https://youtube.com/shorts/UkwwfyKk1IU?feature=share",
  },
];

const getYoutubeId = (url: string) => {
  const allowedHosts = new Set([
    "youtu.be",
    "www.youtu.be",
    "youtube.com",
    "www.youtube.com",
    "youtube-nocookie.com",
    "www.youtube-nocookie.com",
  ]);

  try {
    const parsed = new URL(url);

    if (!allowedHosts.has(parsed.hostname)) {
      return "";
    }

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

const getSafeYoutubeId = (url: string) => {
  const id = getYoutubeId(url);
  return /^[A-Za-z0-9_-]{6,}$/.test(id) ? id : "z-vtfoyOEmE";
};

export const toEmbedUrl = (url: string) => {
  const id = getSafeYoutubeId(url);
  return `https://www.youtube-nocookie.com/embed/${id}`;
};

export const toThumbnailUrl = (url: string) => {
  const id = getSafeYoutubeId(url);
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
