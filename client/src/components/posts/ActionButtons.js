import { Button } from 'react-bootstrap';
import playIcon from '../../assets/play-btn.svg';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

const ActionButtons = ({ url, _id }) => {
  const { deletePost } = useContext(PostContext);

  return (
    <>
      <Button className="post-button" href={url} target="_blank">
        <img src={playIcon} alt="playicon" width="32" height="32" />
      </Button>
      <Button className="post-button">
        <img src={editIcon} alt="editicon" width="24" height="24" />
      </Button>
      <Button className="post-button" onClick={deletePost.bind(this, _id)}>
        <img src={deleteIcon} alt="deleteicon" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;
