export type DeadlineStatus = "upcoming" | "open" | "expired";

export interface Opportunity {
  id: string;
  title: string;
  donor: string;
  eligibility: string;
  scope: string;
  scopeGroup: string;
  amount: string;
  currency: string;
  deadline: string;
  deadlineDate?: string;
  deadlineStatus: DeadlineStatus;
  sector: string;
  sectorGroups: string[];
  fundType: string;
  fundGroup: string;
  additionalInfo: string;
  strategicScore: number;
  officialUrl: string;
  registeredAt: string;
  registeredDate?: string;
  searchIndex: string;
}
