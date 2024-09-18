import { proxy } from "valtio";

import {ModalState} from '@/app/interfaces/Modal.interface';

export const modalState = proxy<ModalState>({
  isOpen: false,
});