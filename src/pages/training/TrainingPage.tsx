import { useParams } from "react-router";

import { Loading } from "@/entities";

const TrainingPage = () => {
  const { id } = useParams();
  return (
    <>
      TrainingPage {id}
      <Loading />
    </>
  );
};

export default TrainingPage;
