import { useState } from 'react'
import { Card, Empty } from './ui.jsx'
import { HABITS, todayStr, isComplete } from '../storage.js'

export default function DailyTracker({ data, setData }) {
  const [date, setDate] = useState(todayStr())
  const day = data.days[date] || {}

  const setDay = (patch) =>
    setData((d) => ({ ...d, days: { ...d.days, [date]: { ...d.days[date], ...patch } } }))

  const removeDay = (key) =>
    setData((d) => {
      const days = { ...d.days }
      delete days[key]
      return { ...d, days }
    })

  const rows = Object.entries(data.days).sort((a, b) => (a[0] < b[0] ? 1 : -1))

  return (
    <div className="stack">
      <Card title="Ghi nhận một ngày">
        <label className="field">
          <span>Ngày</span>
          <input type="date" value={date} max={todayStr()} onChange={(e) => setDate(e.target.value)} />
        </label>
        <div className="habit-row">
          {HABITS.map((h) => (
            <button key={h.key} className={`habit ${day[h.key] ? 'on' : ''}`} onClick={() => setDay({ [h.key]: !day[h.key] })}>
              <h.Icon className="habit-emoji" size={18} />
              <span>{h.label}</span>
              <span className="habit-check">{day[h.key] ? '✓' : ''}</span>
            </button>
          ))}
        </div>
        <div className="grid2">
          <label className="field">
            <span>Phút học sâu</span>
            <input type="number" min="0" value={day.minutes ?? ''} onChange={(e) => setDay({ minutes: e.target.value })} placeholder="vd: 60" />
          </label>
          <label className="field">
            <span>Nội dung / ghi chú</span>
            <input type="text" value={day.deep ?? ''} onChange={(e) => setDay({ deep: e.target.value })} placeholder="vd: Ngữ pháp — bị động" />
          </label>
        </div>
      </Card>

      <Card title={`Lịch sử (${rows.length} ngày)`}>
        {rows.length === 0 ? (
          <Empty>Chưa có ngày nào được ghi nhận.</Empty>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Ngày</th>{HABITS.map((h) => <th key={h.key} className="center"><h.Icon size={15} /></th>)}<th>Phút</th><th>Nội dung</th><th></th></tr>
              </thead>
              <tbody>
                {rows.map(([key, v]) => (
                  <tr key={key} className={isComplete(v) ? 'row-ok' : ''}>
                    <td className="nowrap">{key}{isComplete(v) ? ' ✓' : ''}</td>
                    {HABITS.map((h) => <td key={h.key} className="center">{v[h.key] ? '✓' : '·'}</td>)}
                    <td className="center">{v.minutes || '·'}</td>
                    <td>{v.deep || ''}</td>
                    <td><button className="link-danger" onClick={() => removeDay(key)}>xóa</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
