import { pathsData } from '../data/pathsData';

export function usePathsData() {
  // Return the static data directly
  return { data: pathsData, loading: false };
}
