import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import WaysText from "../../components/WaysText";
import { UserContext } from "../../contexts/UserContext";
import AddPlanButton from "./AddPlanButton";
import Plan from "./Plan";

function PlanPage() {
  const theme = useTheme();
  const { name, emoji } = useContext(UserContext);

  const { loading, error, data } = useQuery(gql`
    query {
      getAllPlans {
        id
        details
        user
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const plans = data.getAllPlans;

  return (
    <div style={{ padding: theme.spacing(8) }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: theme.spacing(4),
        }}
      >
        {/* Header */}
        <WaysText variant={"h2"}>{`Ways tn ${name} ${emoji}?`}</WaysText>

        {/* Add Plan Button*/}
        <AddPlanButton />
      </div>

      {/* List of plans */}
      {plans.map((plan, i) => (
        <Plan key={`${i}-${plan}`} plan={plan} />
      ))}
    </div>
  );
}

export default PlanPage;
