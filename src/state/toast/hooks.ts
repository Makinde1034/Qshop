import { useAppSelector, useAppDispatch } from '../hooks'
import { toggleToast } from '.'

// hook to easily interact with products state
export const useToastState = () => {
  const dispatch = useAppDispatch()

  const _toggleToast = (payload: any) => dispatch(toggleToast(payload))

  const toastState= useAppSelector((state) => state.toast)
  

  return {toastState, _toggleToast }
}
