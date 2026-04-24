export type TestimonialVideo = {
  id: string;
  title: string;
  treatment: string;
  youtubeUrl: string;
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "botox-1",
    title: "Aplicacion de Botox",
    treatment: "Botox",
    youtubeUrl: "https://www.youtube.com/embed/7NGLAnp-GYE",
  },
  {
    id: "mentoplastia-otoplastia-1",
    title: "Mentoplastia y Otoplastia",
    treatment: "Mentoplastia y Otoplastia",
    youtubeUrl: "https://www.youtube.com/embed/IL0Kwbg967Y",
  },
  {
    id: "acido-hialuronico-1",
    title: "Acido Hialuronico",
    treatment: "Acido Hialuronico",
    youtubeUrl: "https://www.youtube.com/embed/MHnb3Jz7Cig",
  },
  {
    id: "procedimiento-1",
    title: "Procedimiento",
    treatment: "Procedimiento Estetico",
    youtubeUrl: "https://www.youtube.com/embed/AR12DbGAZvA",
  },
  {
    id: "rinoplastia-1",
    title: "Rinoplastia",
    treatment: "Rinoplastia",
    youtubeUrl: "https://www.youtube.com/embed/RXzngr2R5hE",
  },
  {
    id: "procedimiento-2",
    title: "Procedimiento",
    treatment: "Procedimiento Estetico",
    youtubeUrl: "https://www.youtube.com/embed/_1U7fKq7ovU",
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
