import { Flag, Lightbulb, AlertTriangle, ExternalLink } from 'lucide-react'
import { Card } from './ui.jsx'
import {
  META, PRINCIPLES, PHASES, WRITING_LADDER, RESOURCES, DEVICES, WEEKLY, WEEKLY_DAILY, DAILY, CHECKLIST, EXAM_NOTE,
} from '../planData.js'

export default function PlanView() {
  return (
    <div className="stack">
      <Card>
        <p className="goal">{META.goal}</p>
        <ul className="principles">
          {PRINCIPLES.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </Card>

      <Card title="Lộ trình 4 giai đoạn (theo cột mốc)">
        <div className="phases">
          {PHASES.map((ph) => (
            <div className="phase" key={ph.id}>
              <div className="phase-head">
                <h4>{ph.name}</h4>
                <span className="badge">{ph.period}</span>
              </div>
              <p className="phase-focus">{ph.focus}</p>
              <ul>{ph.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              <div className="milestone"><Flag size={14} /><span>{ph.milestone}</span></div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Lộ trình viết — đừng ép 200 từ ngay">
        <p className="goal">Thấy khó viết 200 từ là chuyện bình thường. Leo từng bậc, vững bậc dưới mới lên bậc trên:</p>
        <ol className="ladder">
          {WRITING_LADDER.map((w, i) => (
            <li key={i}>
              <strong>{w.step}</strong>
              <span>{w.detail}</span>
            </li>
          ))}
        </ol>
      </Card>

      <Card title="Tài nguyên (tất cả miễn phí) — bấm vào để mở & học luôn">
        <div className="res-groups">
          {Object.entries(RESOURCES).map(([group, items]) => (
            <div className="res-group" key={group}>
              <h4>{group}</h4>
              <div className="res-items">
                {items.map((r) => (
                  <a className="res-item" key={r.name} href={r.url} target="_blank" rel="noreferrer">
                    <div className="res-item-top">
                      <span className="res-name">{r.name}</span>
                      <span className="res-go"><ExternalLink size={12} /> Mở</span>
                    </div>
                    <span className="res-note">{r.note}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Học trên mọi thiết bị">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Công cụ</th><th>Máy tính</th><th>Điện thoại</th></tr></thead>
            <tbody>
              {DEVICES.map((d, i) => (
                <tr key={i}><td>{d.tool}</td><td>{d.pc}</td><td>{d.mobile}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tip"><Lightbulb size={14} /><span>Tạo 1 tài khoản AnkiWeb (free) → thẻ tự đồng bộ máy tính ↔ điện thoại; ôn dở ở công ty, về nhà học tiếp.</span></p>
      </Card>

      <Card title="Lịch tuần (Giai đoạn 1)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Ngày</th><th>Block học sâu (22h, 60–90′)</th></tr></thead>
            <tbody>
              {WEEKLY.map((w) => (
                <tr key={w.day}><td className="nowrap">{w.day}</td><td>{w.deep}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tip">{WEEKLY_DAILY}</p>
      </Card>

      <Card title="Lịch ngày (theo khung giờ của bạn)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Khung giờ</th><th>Hình thức</th><th>Việc cụ thể</th></tr></thead>
            <tbody>
              {DAILY.map((d, i) => (
                <tr key={i}><td>{d.time}</td><td className="nowrap">{d.kind}</td><td>{d.task}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tip"><AlertTriangle size={14} /><span>22h khá muộn — hôm nào ở công ty rảnh, dời bớt việc học sâu vào ban ngày để ngủ đủ.</span></p>
      </Card>

      <Card title="Checklist Tuần 1 (chi phí 0đ)">
        <ol className="checklist">
          {CHECKLIST.map((c, i) => <li key={i}>{c}</li>)}
        </ol>
      </Card>

      <Card title="Lưu ý loại đề (Academic vs General)">
        <p>{EXAM_NOTE}</p>
      </Card>
    </div>
  )
}
