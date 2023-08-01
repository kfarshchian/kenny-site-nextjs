import React from 'react';
import {  Modal, Box } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '15vp',
    bgcolor: 'background.paper',
    border: '2px solid #4F758B',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    color: '#4F758B'
  };

const Modal = () => {

     // Modal JS
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 9000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
 <Modal  open={open} onClose={handleClose}
aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
      <Box sx={style}>
        <h2 id="modal-H2">$5,000 Closing Guarantee</h2>
        <Typography sx={{padding: '10px'}}>If we don't close your loan on time, we will pay you $2,500 and the seller $2,500 (restrictions apply).</Typography>
        <Button id="modal-button" href="/closing-guarantee" sx={{color: 'black', backgroundColor: 'none'}}><ThumbUpOffAltIcon id="thumb"/>Learn More</Button>
      </Box>
    </Modal>
        </>
    )
}

export default Modal;