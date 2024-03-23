import { create } from 'zustand';

type Modal = { open: boolean };

interface ModalState {
  modal: Map<string, Modal>;
  setModal: (modalId: string, modalState: Modal) => void;
  getModalState: (modalId: string) => Modal | undefined;
  getAllModals: () => Map<string, Modal>;
}

const useModalStore = create<ModalState>((set, get) => ({
  modal: new Map<string, Modal>(),
  setModal: (modalId: string, modalState: Modal) => {
    set((state) => {
      const newModal = new Map(state.modal);
      newModal.set(modalId, modalState);
      return { modal: newModal };
    });
  },
  getModalState: (modalId: string) => {
    return get().modal.get(modalId);
  },
  getAllModals: () => {
    return get().modal;
  },
}));

export default useModalStore;
