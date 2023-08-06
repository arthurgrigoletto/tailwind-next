import { ComponentProps } from 'react'

export type InputPrefixProps = ComponentProps<'div'>

function InputPrefix({ children, ...props }: InputPrefixProps) {
  return <div {...props}>{children}</div>
}

export type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

function InputRoot({ children, ...props }: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    >
      {children}
    </div>
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
