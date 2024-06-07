export type FooterRowType = {
  items: FooterRowItemType[][];
};

export type FooterRowItemType = {
  link: string;
  heading?: string;
};

export type HeroType = {
  header: string;
  text: string;
  imageSrc: string;
};

export type AboutCardType = {
  items: AboutCardItemType[];
};

export type AboutCardItemType = {
  name: string;
  imageSrc: string;
  title: string;
  desc: string;
};

export type BlogCardType = {
  items: BlogCardItemType[];
};

export type BlogCardItemType = {
  imageSrc: string;
  title: string;
  desc: string;
  date: string;
  duration: string;
};
