import { useLanguage } from '../context/LanguageContext';
import { getContent } from '../data/content';

export const useContent = () => {
  const { language } = useLanguage();
  return getContent(language);
};
