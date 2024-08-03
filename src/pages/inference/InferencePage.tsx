import { useParams } from "react-router";

const InferencePage = () => {
  const { id } = useParams();
  return <>InferencePage {id}</>;
};

export default InferencePage;
