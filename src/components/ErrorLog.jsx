import { useState } from 'react'
import { Card, Empty } from './ui.jsx'
import { ERROR_TYPES, todayStr, uid } from '../storage.js'

const blank = () => ({ date: todayStr(), type: 'Grammar', wrong: '', correct: '', ref: '' })

export default function ErrorLog({ data, setData }) {
  const [form, setForm] = useState(blank)

  const add = () => {
    if (!form.wrong.trim()) return
    setData((d) => ({ ...d, errors: [...d.errors, { ...form, id: uid(), reviewed: false }] }))
    setForm(blank())
  }
  const toggle = (id) =>
    setData((d) => ({ ...d, errors: d.errors.map((e) => (e.id === id ? { ...e, reviewed: !e.reviewed } : e)) }))
  const remove = (id) => setData((d) => ({ ...d, errors: d.errors.filter((e) => e.id !== id) }))

  const rows = [...data.errors].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="stack">
      <Card title="Thêm một lỗi">
        <div className="grid2">
          <label className="field"><span>Ngày</span>
            <input type="date" value={form.date} max={todayStr()} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </label>
          <label className="field"><span>Loại</span>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              {ERROR_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
        </div>
        <label className="field"><span>Lỗi của tôi</span>
          <input type="text" value={form.wrong} onChange={(e) => setForm({ ...form, wrong: e.target.value })} placeholder="vd: I have went there" />
        </label>
        <label className="field"><span>Bản đúng</span>
          <input type="text" value={form.correct} onChange={(e) => setForm({ ...form, correct: e.target.value })} placeholder="vd: I have gone there" />
        </label>
        <label className="field"><span>Chủ đề / nguồn</span>
          <input type="text" value={form.ref} onChange={(e) => setForm({ ...form, ref: e.target.value })} placeholder="vd: Present perfect" />
        </label>
        <div className="form-foot"><span /><button className="btn-primary" onClick={add}>+ Thêm</button></div>
      </Card>

      <Card title={`Sổ lỗi (${rows.length})`}>
        {rows.length === 0 ? (
          <Empty>Chưa có lỗi nào. Ghi lại lỗi lặp lại để ưu tiên sửa.</Empty>
        ) : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>Ngày</th><th>Loại</th><th>Lỗi</th><th>Đúng</th><th>Chủ đề</th><th>Đã ôn</th><th></th></tr></thead>
              <tbody>
                {rows.map((e) => (
                  <tr key={e.id} className={e.reviewed ? 'row-muted' : ''}>
                    <td className="nowrap">{e.date}</td>
                    <td><span className="tag">{e.type}</span></td>
                    <td className="strike">{e.wrong}</td>
                    <td className="correct">{e.correct}</td>
                    <td>{e.ref}</td>
                    <td className="center"><input type="checkbox" checked={e.reviewed} onChange={() => toggle(e.id)} /></td>
                    <td><button className="link-danger" onClick={() => remove(e.id)}>xóa</button></td>
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
