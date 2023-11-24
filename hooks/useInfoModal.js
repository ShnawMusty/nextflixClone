import { create } from "zustand";

const useInfoModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ isOpen: true, movieId}),
  closeModal: (movieId) => set({isOpen: false, movieId})
}))

export default useInfoModal;