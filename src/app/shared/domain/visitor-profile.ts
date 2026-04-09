export type VisitorRole = 'developer' | 'recruiter' | 'client';
export type TimeAvailable = 'elevator' | 'coffee' | 'deep-dive';
export type CommunicationStyle = 'formal' | 'creative' | 'technical';

export interface VisitorProfile {
  role: VisitorRole;
  timeAvailable: TimeAvailable;
  communicationStyle: CommunicationStyle;
}

export const EMPTY_PROFILE: VisitorProfile = {
  role: 'developer',
  timeAvailable: 'elevator',
  communicationStyle: 'formal',
};
