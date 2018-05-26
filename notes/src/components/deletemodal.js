import React from 'react';

const DeleteModal = () => {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete this?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
      </div>
                    <div class="modal-footer">
                        <button type="button" id="btnone" class="btn btn-danger" data-dismiss="modal">Delete</button>
                        <button type="button" id="btntwo" class="btn btn-info" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;