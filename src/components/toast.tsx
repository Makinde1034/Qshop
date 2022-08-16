import React from 'react'
import { useToastState } from '../state/toast/hooks'

function Toast() {
  const { toastState } = useToastState()
  return (
    toastState.isToastOpen && (
      <div className="fixed top-20 right-5 p-3 font-semibold  rounded-sm bg-[#09ee90]">{toastState.msg}</div>
    )
  )
}

export default Toast
