export type VisitorRole = 'tech-peer' | 'recruiter' | 'client';
export type TimeAvailable = 'elevator' | 'coffee' | 'deep-dive';

export interface VisitorProfile {
  role: VisitorRole;
  timeAvailable: TimeAvailable;
}

export const EMPTY_PROFILE: VisitorProfile = {
  role: 'tech-peer',
  timeAvailable: 'elevator',
};
