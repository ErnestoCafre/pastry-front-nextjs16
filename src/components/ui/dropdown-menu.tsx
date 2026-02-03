'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// Lightweight dropdown menu without Radix dependency for static export

interface DropdownMenuProps {
  children: React.ReactNode
}

interface DropdownMenuContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue>({
  open: false,
  setOpen: () => {},
})

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const handleClick = () => setOpen(false)
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [open])

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

interface DropdownMenuTriggerProps {
  children: React.ReactNode
  className?: string
}

export function DropdownMenuTrigger({ children, className }: DropdownMenuTriggerProps) {
  const { open, setOpen } = React.useContext(DropdownMenuContext)
  return (
    <button
      className={className}
      onClick={(e) => {
        e.stopPropagation()
        setOpen(!open)
      }}
    >
      {children}
    </button>
  )
}

interface DropdownMenuContentProps {
  children: React.ReactNode
  align?: 'start' | 'end'
  className?: string
}

export function DropdownMenuContent({
  children,
  align = 'start',
  className,
}: DropdownMenuContentProps) {
  const { open } = React.useContext(DropdownMenuContext)
  if (!open) return null
  return (
    <div
      className={cn(
        'absolute top-full mt-2 z-50 min-w-[8rem] overflow-hidden border border-border bg-popover p-1 text-popover-foreground shadow-md',
        align === 'end' ? 'right-0' : 'left-0',
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function DropdownMenuItem({ children, asChild, className }: DropdownMenuItemProps) {
  const { setOpen } = React.useContext(DropdownMenuContext)
  const itemClasses = cn(
    'relative flex cursor-pointer select-none items-center px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      className: cn(itemClasses, (children as React.ReactElement<Record<string, unknown>>).props.className as string),
      onClick: (e: React.MouseEvent) => {
        const childOnClick = (children as React.ReactElement<Record<string, unknown>>).props.onClick as ((e: React.MouseEvent) => void) | undefined
        childOnClick?.(e)
        setOpen(false)
      },
    })
  }

  return (
    <div
      className={itemClasses}
      onClick={() => setOpen(false)}
    >
      {children}
    </div>
  )
}
