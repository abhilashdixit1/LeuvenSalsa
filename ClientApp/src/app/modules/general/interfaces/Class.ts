export interface Class {
  id: number;
  style: string;
  level: number;
  startDate: Date;
  endDate: Date;
  timeslot: string;
  teachers: string;
  roomId: number;
  seriesId: number;
  isPartnerwork: boolean;
  isFull: boolean;
  isBlockedForLeaders: boolean;
  isBlockedForFollowers: boolean;
}
