import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PaymentOptions from './molecules/PaymentOptions';
import  { Button } from "@mui/material"
import toast, { Toaster } from "react-hot-toast";

const FlightPayment = ({open, handleClose, row}) => {
  const onPaymentSuccess = () => {
    toast.success('Reserved Successfully');
    handleClose();
  }

    return (
        <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Payment
        </DialogTitle>
        <DialogContent sx={{
          " & .flight-payment": {
            width: "100%",
            mt: 2
          }
        }}>
        <PaymentOptions onPaymentSuccess={onPaymentSuccess} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Toaster></Toaster>
        </DialogActions>
      </Dialog>
    )
};
export default FlightPayment;