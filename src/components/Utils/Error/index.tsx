import React, { useEffect, useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";

import "./index.scss";

interface IAppProps {
  error: string | null;
  clearError: () => void;
}

const ErrorMessage: React.FunctionComponent<IAppProps> = ({
  error,
  clearError,
}) => {
  const [open, setOpen] = useState(false);

  const handleClearState = () => {
    setOpen(false);
    clearError();
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  return (
    <Modal
      className="error-message"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>
        <Icon name="exclamation triangle" size="big" />
        {error}
      </Modal.Header>
      <Modal.Content>
        <Button onClick={handleClearState}>Try again</Button>
      </Modal.Content>
    </Modal>
  );
};
export default ErrorMessage;
