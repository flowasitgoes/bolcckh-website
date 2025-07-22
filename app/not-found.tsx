import { redirect } from 'next/navigation'

export default function NotFound() {
  // 重定向到即將推出頁面
  redirect('/up-coming')
} 