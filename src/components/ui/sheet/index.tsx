import React from 'react'
import Button from '../button'
import { X } from 'lucide-react'

type TSheetComponentProps = {
  children: React.ReactNode
  sheet?: boolean
  toggleSheet?: () => void
  // side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Sheet({ children }: TSheetComponentProps) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export function SheetTrigger({ children }: TSheetComponentProps) {
  return <div className="inline-flex items-center justify-center border border-border rounded-lg">{children}</div>
}

export function SheetContent({ children, sheet, toggleSheet }: TSheetComponentProps) {
  return (
    <>
      {sheet && (
        <>
          <div
            className={`fixed inset-0 z-10 bg-black bg-opacity-90 transition-opacity duration-300 ease-in-out ${
              sheet ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleSheet}
          />
          <div
            className={`fixed inset-y-0 right-0 z-10 gap-4 bg-background p-6 transition ease-in-out h-full w-3/4 sm:max-w-sm ${
              sheet ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Button className="absolute right-4 top-4 p-1" variant="outlined" onClick={toggleSheet}>
              <X size={15} />
            </Button>
            {children}
          </div>
        </>
      )}
    </>
  )
}

export function SheetHeader({ children }: TSheetComponentProps) {
  return <div className="flex flex-col space-y-2">{children}</div>
}

export function SheetTitle({ children }: TSheetComponentProps) {
  return <h1 className="text-xl font-semibold">{children}</h1>
}

export function SheetDescription({ children }: TSheetComponentProps) {
  return <p className="">{children}</p>
}

export function SheetFooter({ children }: TSheetComponentProps) {
  return <div className="flex flex-row-reverse">{children}</div>
}

export function SheetClose({ children }: TSheetComponentProps) {
  return <>{children}</>
}
