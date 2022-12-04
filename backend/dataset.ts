type Plan = { id: number; details: string; user: string };

export const plans: Plan[] = [
  { id: 1, details: "Going to Midnight Market", user: "Cooper Leong" },
  { id: 2, details: "Going to Radio", user: "Coopa Weong" },
  { id: 3, details: "Watching a movie at home", user: "Kupa Linglong" },
];

type Interest = { id: number; planId: number; user: string };

export const interests: Interest[] = [
  { id: 1, planId: 1, user: "Coop 1" },
  { id: 2, planId: 1, user: "Coop 2" },
  { id: 3, planId: 1, user: "Coop 3" },
  { id: 4, planId: 1, user: "Coop 4" },
  { id: 5, planId: 2, user: "Coop 1" },
  { id: 6, planId: 3, user: "Coop 1" },
  { id: 7, planId: 3, user: "Coop 1" },
];
