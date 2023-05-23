import { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { IConfirmationDialog } from "./Models/IConfirmationDialog";
import "./Styles/ConfirmationDialog.scss";

const ConfirmationDialog = ({ refresh, setRefresh, id, request, text, isDelete = false }: IConfirmationDialog) => {
    const newSwal = Swal.mixin({
        customClass: {
            confirmButton: "dialogButton confirmButton",
            cancelButton: "dialogButton cancelButton",
            denyButton: "dialogButton denyButton"
        },
        buttonsStyling: false,
    });

    newSwal
        .fire({
            title: 'Are You Sure?',
            text: '',
            showCancelButton: true,
            confirmButtonText: text,
            cancelButtonText: 'Cancel',
            denyButtonText: text,
            showDenyButton: isDelete,
            showConfirmButton: !isDelete,
            reverseButtons: true,
        })
        .then(async (result) => {
            if (result.isDenied || result.isConfirmed) {
                await request(id).then((response) => {
                    newSwal.fire(`${text}d`, response.data.message ?? "updated successfully", "success");
                    setRefresh(!refresh);
                }).catch((error) => {
                    newSwal.fire('An error has occurred', `Could not ${text} it`, "warning");
                })
            }
        });
};

export default ConfirmationDialog;