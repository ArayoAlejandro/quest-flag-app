export const Modal = ({ children, setIsOpen }: { children: JSX.Element, setIsOpen: (state: boolean) => void }) => {
  return (
    <div className="modal__game" onClick={() => { setIsOpen(false) }}>
        {children}
    </div>
  )
}
