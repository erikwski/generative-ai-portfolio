export type VisitorRole = 'developer' | 'recruiter' | 'client';
export type TimeAvailable = 'elevator' | 'coffee' | 'deep-dive';
export type CommunicationStyle = 'formal' | 'creative' | 'technical';

export interface VisitorProfile {
  role: VisitorRole | null;
  timeAvailable: TimeAvailable | null;
  communicationStyle: CommunicationStyle | null;
}

export const EMPTY_PROFILE: VisitorProfile = {
  role: null,
  timeAvailable: null,
  communicationStyle: null,
};
