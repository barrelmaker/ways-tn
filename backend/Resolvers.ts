import { manager } from "./data-source";
import { Interest } from "./entity/Interest";
import { Plan } from "./entity/Plan";

const Resolvers = {
  Query: {
    getAllPlans: async () => {
      return await manager.find(Plan);
    },
    getPlan: async (_: any, args: any) => {
      return await manager.find(Plan, { where: { id: args.id } });
    },
    getInterests: async (_: any, args: any) => {
      return await manager.find(Interest, { where: { planId: args.planId } });
    },
  },

  Mutation: {
    addPlan: async (_: any, args: any) => {
      return await manager.save(
        manager.create(Plan, {
          details: args.details,
          user: args.user,
        })
      );
    },
    addInterest: async (_: any, args: any) => {
      return await manager.save(
        manager.create(Interest, {
          planId: Number(args.planId),
          user: args.user,
        })
      );
    },
  },
};

export default Resolvers;
