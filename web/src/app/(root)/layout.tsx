import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="bg-black py-2 px-3 flex items-center sticky top-0 z-[999]">
        <Image src="../assets/logo.png" height={30} alt="logo" />
        <div className="px-2 flex-1">
          <div className="text-white">王者荣耀</div>
          <div className="text-gray-100 text-xs">团队成就更多</div>
        </div>
        <button className="btn bg-primary">立即下载</button>
      </div>
      <div className="bg-primary pt-3 pb-2">
        <div className="nav nav-inverse jc-around pb-1">
          <div className="nav-item active">
            <Link href="/">首页</Link>
          </div>
          <div className="nav-item">
            <Link href="/">攻略中心</Link>
          </div>
          <div className="nav-item">
            <Link href="/">赛事中心</Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}