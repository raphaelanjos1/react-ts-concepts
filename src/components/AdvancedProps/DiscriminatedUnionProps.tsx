type ModalProps = (
  | { variant: "title"; title: string }
  | { variant: "no-title" }
) & { buttonColor: string };

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
};

export const Test = () => {
  return (
    <div>
      {/* @ts-expect-error lack of props*/}
      <Modal buttonColor="red" />
      <Modal
        buttonColor="red"
        variant="no-title"
        // @ts-expect-error no title prop with title
        title="Oh dear"
      />
      <Modal variant="title" title="Hello" buttonColor="red" />
    </div>
  );
};
