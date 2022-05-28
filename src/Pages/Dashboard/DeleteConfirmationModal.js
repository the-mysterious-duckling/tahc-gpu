import React from 'react';
import toast from 'react-hot-toast';

const DeleteConfirmationModal = ({ bookingDelete, refetch, setBookingDelete }) => {
    const { email } = bookingDelete
    const handleDelete = () => {
        fetch(`https://tahc-server-v-01.herokuapp.com/deletebooking/${email}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                toast.success('Booking deleted')
                refetch()
                setBookingDelete(null)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to cancel the booking for {bookingDelete.itemName}?</h3>
                    <p className="py-4">This is an irreversible action</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error'>Cancel Booking</button>
                        <label for="delete-confirmation-modal" className="btn">Keep Booking</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;