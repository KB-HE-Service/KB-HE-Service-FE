import { useParams } from "react-router";

const TrainingPage = () => {
  const { id } = useParams();
  return <>TrainingPage {id}</>;
};

export default TrainingPage;
