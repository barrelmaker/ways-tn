import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@mui/material";
import { request } from "graphql-request";
import { useContext } from "react";
import WaysAvatarGroup from "../../components/WaysAvatarGroup";
import WaysAvatarWithDetails from "../../components/WaysAvatarWithDetails";
import WaysButton from "../../components/WaysButton";
import WaysCard from "../../components/WaysCard";
import WaysText from "../../components/WaysText";
import { UserContext } from "../../contexts/UserContext";

export type Plan = {
  id: number;
  details: string;
  user: string;
};

export type User = {
  name: string;
};

interface Props {
  plan: Plan;
}

function Plan({ plan }: Props) {
  const theme = useTheme();
  const { name } = useContext(UserContext);

  const { loading, error, data } = useQuery(gql`
    query {
      getInterests(planId: ${plan.id}) {
        id
        user
      }
    }
  `);

  const addInterestMutation = gql`
    mutation addInterest($planId: ID!, $user: String!) {
      addInterest(planId: $planId, user: $user) {
        id
        user
      }
    }
  `;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const interests = data.getInterests;
  const users = interests.map((i) => i.user);

  return (
    <WaysCard>
      {/* Avatar */}
      <WaysAvatarWithDetails name={plan.user} details={"Planned 1 hour ago"} />

      {/* Plan */}
      <WaysText variant={"h5"}>{plan.details}</WaysText>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Attendees */}
        <WaysAvatarGroup users={users} />

        {/* Button */}
        <WaysButton onClick={handleGoing}>{"Going"}</WaysButton>
      </div>
    </WaysCard>
  );

  async function handleGoing() {
    await request("http://localhost:4000/graphql", addInterestMutation, {
      planId: plan.id,
      user: name,
    });
  }
}

export default Plan;
