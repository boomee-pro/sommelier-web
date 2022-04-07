import { Slide, toast } from "react-toastify";

export default function createToastMessage(type, message) {
  toast(message, {
    type: type,
    theme: "colored",
    autoClose: 1000,
    hideProgressBar: true,
    progress: undefined,
    transition: Slide,
    position: "bottom-right"
  });
}
