import { mentorsData } from '../data/mentorsData';

export function useMentorsData() {
  // Return the static data directly
  return { data: mentorsData, loading: false };
}
