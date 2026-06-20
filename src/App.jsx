import { useRef, useState } from 'react'
import { META } from './planData.js'
import { useTracker, exportData, parseImport } from './storage.js'
import Dashboard from './components/Dashboard.jsx'
import PlanView from './components/PlanView.jsx'
import DailyTracker from './components/DailyTracker.jsx'
import MockLog from './components/MockLog.jsx'
import Progress from './components/Progress.jsx'
import ErrorLog from './components/ErrorLog.jsx'

const TABS = [
  { id: 'dashboard', label: 'Tổng quan', icon: '📊' },
  { id: 'plan', label: 'Kế hoạch', icon: '🗺️' },
  { id: 'daily', label: 'Theo dõi', icon: '✅' },
  { id: 'mock', label: 'Điểm Mock', icon: '🎯' },
  { id: 'progress', label: 'Tiến độ', icon: '📈' },
  { id: 'errors', label: 'Sổ lỗi', icon: '📝' },
]

export default function App() {
  const [data, setData] = useTracker()
  const [tab, setTab] = useState('dashboard')
  const fileRef = useRef(null)

  const onImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        setData(parseImport(String(reader.result)))
        alert('Đã nhập dữ liệu thành công.')
      } catch {
        alert('File không hợp lệ.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">📘</span>
          <div>
            <h1>{META.title}</h1>
            <p>{META.subtitle}</p>
          </div>
        </div>
        <div className="actions">
          <button className="btn-ghost" onClick={() => exportData(data)}>⬇ Sao lưu</button>
          <button className="btn-ghost" onClick={() => fileRef.current?.click()}>⬆ Khôi phục</button>
          <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={onImport} />
        </div>
      </header>

      <nav className="tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            <span className="tab-icon">{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>

      <main className="content">
        {tab === 'dashboard' && <Dashboard data={data} setData={setData} />}
        {tab === 'plan' && <PlanView />}
        {tab === 'daily' && <DailyTracker data={data} setData={setData} />}
        {tab === 'mock' && <MockLog data={data} setData={setData} />}
        {tab === 'progress' && <Progress data={data} setData={setData} />}
        {tab === 'errors' && <ErrorLog data={data} setData={setData} />}
      </main>

      <footer className="foot">
        Dữ liệu lưu ngay trên thiết bị này (localStorage). Dùng <b>Sao lưu/Khôi phục</b> để chuyển sang máy khác.
      </footer>
    </div>
  )
}
