import Swal from "sweetalert2";

const linearAlert = async (title, text, icon = 'success', timeout = 4000, allowOutsideClick = true) => {
    return await Swal.fire({
        title: title,
        html: text,
        icon,
        showConfirmButton: false,
        allowOutsideClick: allowOutsideClick,
        timer: timeout,
    });
}
const linearToast = async (title, icon = 'success', timeout = 2000,) => {
    return await Swal.fire({
        title: title,
        icon,
        showConfirmButton: false,
        timer: timeout,
        toast: true, position: 'top-right',
    });
}
export {
    linearAlert, linearToast
}