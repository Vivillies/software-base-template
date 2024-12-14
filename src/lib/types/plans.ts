interface PlanStructure {
      name: string;
      priceId: string;
      price: number;
      features: string[];
      recommended: boolean;
}


const plan: PlanStructure = {
      name: "Member",
      priceId: "price_1Psqn0ECflKU8QDVCrN6BGE1",
      price: 24.99,
      features: [
            "Access to the template",
            "Access to unlimited copies",
            "Access to onthly UI component drops",
            "Access to the Discord community server"
      ],
      recommended: false,
}

export {
      plan, type PlanStructure
};