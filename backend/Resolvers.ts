import { interests, plans } from "./dataset";

const Resolvers = {
  Query: {
    getAllPlans: () => plans,
    getPlan: (_: any, args: any) => {
      //get the object that contains the specified ID.
      return plans.find((plan) => plan.id === args.id);
    },
    getInterests: (_: any, args: any) => {
      //get the object that contains the specified ID.
      return interests.filter((interest) => interest.planId === args.planId);
    },
  },

  Mutation: {
    addPlan: (_: any, args: any) => {
      const newPlan = {
        id: plans.length + 1,
        details: args.details,
        user: args.user,
      };
      plans.push(newPlan);
      return newPlan;
    },
    addInterest: (_: any, args: any) => {
      const newInterest = {
        id: interests.length + 1,
        planId: Number(args.planId),
        user: args.user,
      };
      interests.push(newInterest);
      return newInterest;
    },
  },
};

export default Resolvers;
