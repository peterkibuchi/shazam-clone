import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const genres = [
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Country", value: "COUNTRY" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Film", value: "FILM_TV" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
  { title: "Latin", value: "LATIN" },
  { title: "Pop", value: "POP" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "Rock", value: "ROCK" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Worldwide", value: "WORLDWIDE" },
];

export const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
