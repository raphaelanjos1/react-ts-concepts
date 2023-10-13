type EmbeddedPlaygroundProps =
  | {
      useStackblitz: true;
      stackblitzId: string;
    }
  | {
      useStackblitz?: false;
      codeSandboxId: string;
    };

export const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackblitz) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackblitzId}?embed=1`}
      />
    );
  }

  return <iframe src={`https://codesandbox.io/embed/${props.codeSandboxId}`} />;
};

<>
  <EmbeddedPlayground useStackblitz stackblitzId="my-stackblitz-id" />
  <EmbeddedPlayground codeSandboxId="my-codesandbox-id" />

  <EmbeddedPlayground
    useStackblitz
    // @ts-expect-error useStackblitz true
    codeSandboxId="my-codesandbox-id"
  />

  {/* @ts-expect-error missing useStackblitz */}
  <EmbeddedPlayground stackblitzId="my-stackblitz-id" />
</>;
