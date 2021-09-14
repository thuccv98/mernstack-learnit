import { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { PostContext } from '../../contexts/PostContext';

const AddPostModal = () => {
  // Context
  const { showAddPostModal, setShowAddPostModal } = useContext(PostContext);

  // close dialog
  const closeDialog = () => {
    setShowAddPostModal(false);
  };

  return (
    <Modal show={showAddPostModal} animation={false} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to learn?</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
            />
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              name="description"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Youtube Tutorial URL"
              name="url"
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPostModal;
