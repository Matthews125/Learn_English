import { useState } from 'react'
import { Card, Empty } from './ui.jsx'
import { overallBand, sortedMocks, todayStr, uid } from '../storage.js'

const PHASES = ['GĐ0', 'GĐ1', 'GĐ2', 'GĐ3', 'GĐ4']
const SKILLS = [['L', 'Listening'], ['R', 'Reading'], ['W', 'Writing'], ['S', 'Speaking']]
const blank = () => ({ date: todayStr(), phase: 'GĐ0', L: '', R: '', W: '', S: '', source: '', note: '' })

export default function MockLog({ data, setData }) {
  const [form, setForm] = useState(blank)
  const liveOverall = overallBand(form)

  const add = () => {
    if (![form.L, form.R, form.W, form.S].every((v) => v !== '' && !isNaN(Number(v)))) return
    setData((d) => ({ ...d, mocks: [...d.mocks, { ...form, id: uid() }] }))
    setForm(blank())
  }
  const remove = (id) => setData((d) => ({ ...d, mocks: d.mocks.filter((m) => m.id !== id) }))

  const rows = sortedMocks(data.mocks)

  return (
    <div className="stack">
      <Card title="Nhập điểm một đề mock">
        <div className="grid2">
          <label className="field"><span>Ngày</span>
            <input type="date" value={form.date} max={todayStr()} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </label>
          <label className="field"><span>Giai đoạn</span>
            <select value={form.phase} onChange={(e) => setForm({ ...form, phase: e.target.value })}>
              {PHASES.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
        </div>
        <div className="grid4">
          {SKILLS.map(([k, label]) => (
            <label className="field" key={k}><span>{label}</span>
              <input type="number" min="0" max="9" step="0.5" value={form[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder="0–9" />
            </label>
          ))}
        </div>
        <label className="field"><span>Nguồn đề</span>
          <input type="text" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} placeholder="vd: ieltsonlinetests #3" />
        </label>
        <div className="form-foot">
          <div className="overall-preview">
            Overall: <strong style={{ color: liveOverall >= 6.5 ? 'var(--success)' : 'var(--text)' }}>{liveOverall != null ? liveOverall.toFixed(1) : '—'}</strong>
          </div>
          <button className="btn-primary" onClick={add}>+ Thêm</button>
        </div>
      </Card>

      <Card title={`Lịch sử mock (${rows.length})`}>
        {rows.length === 0 ? (
          <Empty>Chưa có đề nào. Làm 1 đề free ở ieltsonlinetests.com để lấy mốc khởi điểm.</Empty>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Ngày</th><th>GĐ</th><th>L</th><th>R</th><th>W</th><th>S</th><th>Overall</th><th>Nguồn</th><th></th></tr>
              </thead>
              <tbody>
                {rows.map((m) => {
                  const o = overallBand(m)
                  return (
                    <tr key={m.id}>
                      <td className="nowrap">{m.date}</td>
                      <td>{m.phase}</td>
                      <td className="center">{Number(m.L).toFixed(1)}</td>
                      <td className="center">{Number(m.R).toFixed(1)}</td>
                      <td className="center">{Number(m.W).toFixed(1)}</td>
                      <td className="center">{Number(m.S).toFixed(1)}</td>
                      <td className="center"><span className={`band ${o >= 6.5 ? 'band-ok' : ''}`}>{o != null ? o.toFixed(1) : '—'}</span></td>
                      <td>{m.source}</td>
                      <td><button className="link-danger" onClick={() => remove(m.id)}>xóa</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
        <p className="tip">Overall = trung bình 4 kỹ năng, làm tròn về 0.5 gần nhất. Đăng ký thi khi mock ổn định ≥ 6.5.</p>
      </Card>
    </div>
  )
}
