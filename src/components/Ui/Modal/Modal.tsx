import {  Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IModalProps {
  children: ReactNode;
  title?: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({
  title,
  isOpen,
  closeModal,
  children
}: IModalProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h2"
                className="text-base/7  text-green-800 font-bold"
              >
                {title ? title : ""}
              </DialogTitle>

              <div className="mt-4">
                {children}
            
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
