import { links } from "@/libs/data";


export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};


export type ThemeContextProviderProps = {
  children: React.ReactNode
}

export type ThemeContextType = {
  theme: string,
  toggleTheme: () => void
}