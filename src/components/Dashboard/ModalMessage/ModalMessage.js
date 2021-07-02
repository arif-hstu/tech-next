import React from 'react';

const ModalContent = ({ status, closeModal }) => {
    return (
        <div className="ModalContent">
            <div style={{ textAlign: "center" }} className="infoHolder">
                <h3>
                    {
                        status.type === 'delete' &&
                        'Your Post Deleted Successfully!'
                    }
                    {
                        status.type === 'update' &&
                        'Your Post Updated Successfully!'
                    }
                </h3>
                <button
                    style={{
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    className="btnPrimary" onClick={closeModal}>
                    {
                        status.type === 'delete' &&
                        'Delete More!'
                    }
                    {
                        status.type === 'update' &&
                        'Update More!'
                    }
                </button>
            </div>
        </div>
    );
};

export default ModalContent; 