import useToast from "../../hooks/useToast";

function Test() {
  const { addToast } = useToast();
  return (
    <div>
      <p>test</p>
      <button
        type="button"
        onClick={() =>
          addToast({
            type: "info",
            title: "Title",
            description: "mantap",
          })
        }
      >
        Add Toast
      </button>
    </div>
  );
}

export default Test;
