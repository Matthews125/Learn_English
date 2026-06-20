import { Card, Bar, Stat } from './ui.jsx'
import {
  HABITS, GRAMMAR_TOPICS, todayStr, isComplete, currentStreak,
  totalMinutes, overallBand, sortedMocks,
} from '../storage.js'

export default function Dashboard({ data, setData }) {
  const today = todayStr()
  const day = data.days[today] || {}

  const setToday = (patch) =>
    setData((d) => ({ ...d, days: { ...d.days, [today]: { ...d.days[today], ...patch } } }))

  const streak = currentStreak(data.days)
  const doneDays = Object.values(data.days).filter(isComplete).length
  const hours = (totalMinutes(data.days) / 60).toFixed(1)

  const mocks = sortedMocks(data.mocks)
  const latest = mocks.find((m) => overallBand(m) != null)
  const latestBand = latest ? overallBand(latest) : null
  const bestBand = data.mocks.reduce((b, m) => {
    const o = overallBand(m)
    return o != null && o > b ? o : b
  }, 0)
  const reached = bestBand >= 6.5

  const grammarPct = data.progress.grammarDone.length
  const todayComplete = isComplete(day)

  return (
    <div className="stack">
      <Card>
        <div className="hero">
          <div className="hero-streak">
            <div className="flame">🔥</div>
            <div>
              <div className="hero-num">{streak}</div>
              <div className="hero-cap">ngày liên tiếp</div>
            </div>
          </div>
          <div className="hero-stats">
            <Stat value={doneDays} label="ngày đã hoàn thành" />
            <Stat value={`${hours}h`} label="tổng giờ học sâu" />
            <Stat value={data.mocks.length} label="đề mock đã làm" />
          </div>
        </div>
      </Card>

      <Card title="Hôm nay" right={<span className="muted">{today}</span>}>
        <div className="habit-row">
          {HABITS.map((h) => (
            <button
              key={h.key}
              className={`habit ${day[h.key] ? 'on' : ''}`}
              onClick={() => setToday({ [h.key]: !day[h.key] })}
            >
              <span className="habit-emoji">{h.emoji}</span>
              <span>{h.label}</span>
              <span className="habit-check">{day[h.key] ? '✓' : ''}</span>
            </button>
          ))}
        </div>
        <div className="grid2">
          <label className="field">
            <span>Phút học sâu</span>
            <input
              type="number" min="0" inputMode="numeric"
              value={day.minutes ?? ''}
              onChange={(e) => setToday({ minutes: e.target.value })}
              placeholder="vd: 60"
            />
          </label>
          <label className="field">
            <span>Nội dung block tối</span>
            <input
              type="text"
              value={day.deep ?? ''}
              onChange={(e) => setToday({ deep: e.target.value })}
              placeholder="vd: Ngữ pháp — câu điều kiện"
            />
          </label>
        </div>
        <div className={`day-state ${todayComplete ? 'ok' : ''}`}>
          {todayComplete ? '✓ Hoàn thành đủ 3 thói quen hôm nay — giữ chuỗi nhé!' : 'Tick đủ Anki · Nghe · Nói để tính 1 ngày trọn vẹn.'}
        </div>
      </Card>

      <div className="grid2">
        <Card title="Band mock gần nhất">
          {latestBand != null ? (
            <>
              <div className="band-big" style={{ color: latestBand >= 6.5 ? 'var(--success)' : 'var(--text)' }}>
                {latestBand.toFixed(1)}
              </div>
              <div className="band-skills">
                <span>L {Number(latest.L).toFixed(1)}</span>
                <span>R {Number(latest.R).toFixed(1)}</span>
                <span>W {Number(latest.W).toFixed(1)}</span>
                <span>S {Number(latest.S).toFixed(1)}</span>
              </div>
              <div className={`pill ${reached ? 'pill-ok' : ''}`}>
                {reached ? '🎉 Đã đạt 6.5 — sẵn sàng cho Giai đoạn 4' : `Mục tiêu 6.5 · cao nhất hiện tại: ${bestBand || '—'}`}
              </div>
            </>
          ) : (
            <p className="empty">Chưa có điểm mock. Vào tab “Điểm Mock” để nhập đề đầu tiên (Giai đoạn 0).</p>
          )}
        </Card>

        <Card title="Tiến độ học liệu">
          <div className="prog-line">
            <span>Ngữ pháp lõi</span>
            <span className="muted">{grammarPct}/{GRAMMAR_TOPICS.length} chủ đề</span>
          </div>
          <Bar value={grammarPct} max={GRAMMAR_TOPICS.length} />
          <div className="prog-line">
            <span>Từ vựng Anki</span>
            <span className="muted">{data.progress.ankiWords}/{data.progress.ankiGoal} từ</span>
          </div>
          <Bar value={data.progress.ankiWords} max={data.progress.ankiGoal} color="var(--success)" />
        </Card>
      </div>
    </div>
  )
}
