import { gql } from "@apollo/client";
import { request } from "graphql-request";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import WaysButton from "../../components/WaysButton";
import WaysModal from "../../components/WaysModal";
import WaysText from "../../components/WaysText";
import { UserContext } from "../../contexts/UserContext";

const AddPlanButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { name } = useContext(UserContext);

  const addPlanMutation = gql`
    mutation addPlan($details: String!, $user: String!) {
      addPlan(details: $details, user: $user) {
        id
        details
        user
      }
    }
  `;

  return (
    <>
      <WaysButton onClick={handleOpen}>{"Add"}</WaysButton>

      <WaysModal open={isOpen} onClose={handleClose}>
        <WaysText>{"Add Your Plan"}</WaysText>

        <form onSubmit={handleSubmit(handleAddPlan)}>
          <input
            defaultValue="What am I gonna do tn"
            {...register("details")}
          />
          <input type="submit" />
        </form>
      </WaysModal>
    </>
  );

  async function handleAddPlan(data: any) {
    await request("http://localhost:4000/graphql", addPlanMutation, {
      ...data,
      user: name,
    });
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
};

export default AddPlanButton;
