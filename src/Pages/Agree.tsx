import NavBar from "../Components/NavBar/NavBar";
import AgreeForm from "../Components/AgreeForm/AgreeForm";

function Agree() {
  return (
    <div className="flex items-center flex-col h-screen justify-between">
      <NavBar />
      <div className="flex item-center justify-center mt-6 h-full">
        <AgreeForm />
      </div>
    </div>
  );
}

export default Agree;
