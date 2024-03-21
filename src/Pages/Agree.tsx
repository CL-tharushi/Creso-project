import NavBar from "../Components/NavBar/NavBar";
import AgreeForm from "../Components/AgreeForm/AgreeForm";

function Agree() {
  return (
    <div className="flex flex-col justify-between h-full">
      <NavBar />
      <div className="flex item-center justify-center py-6 h-full">
        <AgreeForm />
      </div>
    </div>
  );
}

export default Agree;
