import { Menu } from "../footer/Menu";
import { Intro } from "../footer/Intro";
import { Contacts } from "../footer/Contacts";

export const Footer = () => {
  return (
    <footer className="flex justify-between gap-2 border-t-2 border-dark-teal bg-neutral-800 text-white w-full h-64 mt-auto">
      <Intro />
      <Menu />
      <Contacts />
    </footer>
  );
};