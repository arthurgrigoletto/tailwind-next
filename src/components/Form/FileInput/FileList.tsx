'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  if (files.length === 0) {
    return null
  }

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            type={file.type}
            state="error"
          />
        )
      })}
    </div>
  )
}
