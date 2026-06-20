import { Card, Bar } from './ui.jsx'
import { GRAMMAR_TOPICS } from '../storage.js'

export default function Progress({ data, setData }) {
  const done = data.progress.grammarDone

  const toggleTopic = (t) =>
    setData((d) => {
      const set = new Set(d.progress.grammarDone)
      set.has(t) ? set.delete(t) : set.add(t)
      return { ...d, progress: { ...d.progress, grammarDone: [...set] } }
    })

  const setProg = (patch) =>
    setData((d) => ({ ...d, progress: { ...d.progress, ...patch } }))

  return (
    <div className="stack">
      <Card title="Từ vựng (Anki)">
        <div className="grid2">
          <label className="field"><span>Số từ hiện tại</span>
            <input type="number" min="0" value={data.progress.ankiWords}
              onChange={(e) => setProg({ ankiWords: Number(e.target.value) || 0 })} />
          </label>
          <label className="field"><span>Mục tiêu</span>
            <input type="number" min="1" value={data.progress.ankiGoal}
              onChange={(e) => setProg({ ankiGoal: Number(e.target.value) || 1 })} />
          </label>
        </div>
        <Bar value={data.progress.ankiWords} max={data.progress.ankiGoal} color="var(--success)" />
      </Card>

      <Card title="Ngữ pháp lõi B1→B2" right={<span className="muted">{done.length}/{GRAMMAR_TOPICS.length}</span>}>
        <Bar value={done.length} max={GRAMMAR_TOPICS.length} />
        <div className="topic-list">
          {GRAMMAR_TOPICS.map((t) => (
            <button key={t} className={`topic ${done.includes(t) ? 'on' : ''}`} onClick={() => toggleTopic(t)}>
              <span className="topic-check">{done.includes(t) ? '✓' : ''}</span>
              {t}
            </button>
          ))}
        </div>
        <p className="tip">Đánh dấu khi đã học chắc + làm hết bài tập của chủ đề (englishpage.com). Gặp lỗi chủ đề nào → quay lại học lại.</p>
      </Card>
    </div>
  )
}
