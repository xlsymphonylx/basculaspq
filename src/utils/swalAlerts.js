import Swal from "sweetalert2";

const linearAlert = async (title, text, icon = 'success', timeout = 2000, allowOutsideClick = true) => {
    return await Swal.fire({
        title: title,
        html: text,
        icon,
        showConfirmButton: false,
        allowOutsideClick: allowOutsideClick,
        timer: timeout,
    });
}

export {
    linearAlert
}