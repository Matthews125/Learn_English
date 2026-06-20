import { useState, useEffect } from 'react'
import { Brain, Headphones, Mic } from 'lucide-react'

const KEY = 'ielts-tracker-v1'

export const HABITS = [
  { key: 'anki', label: 'Anki (ôn từ)', Icon: Brain },
  { key: 'listening', label: 'Nghe', Icon: Headphones },
  { key: 'speaking', label: 'Nói / Shadowing', Icon: Mic },
]

export const GRAMMAR_TOPICS = [
  'Present simple & continuous',
  'Past simple & continuous',
  'Present perfect (vs past simple)',
  'Past perfect',
  'Future forms (will / going to / present cont.)',
  'Modals (can/must/should/might…)',
  'Conditionals (type 0–3)',
  'Passive voice',
  'Reported speech',
  'Relative clauses',
  'Articles (a / an / the / —)',
  'Countable/uncountable & quantifiers',
  'Comparatives & superlatives',
  'Gerunds & infinitives',
  'Prepositions (time/place/movement)',
  'Phrasal verbs',
  'Linking words / connectors',
  'Question forms & word order',
  'Used to / be used to / get used to',
  'Wish / if only',
]

export const ERROR_TYPES = ['Grammar', 'Vocabulary', 'Speaking', 'Listening', 'Writing', 'Pronunciation']

export function defaultData() {
  return {
    version: 1,
    days: {},        // { 'YYYY-MM-DD': { anki, listening, speaking, minutes, deep, note } }
    mocks: [],       // { id, date, phase, L, R, W, S, source, note }
    progress: { grammarDone: [], ankiWords: 0, ankiGoal: 3000 },
    errors: [],      // { id, date, type, wrong, correct, ref, reviewed }
  }
}

export function useTracker() {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (!raw) return defaultData()
      const parsed = JSON.parse(raw)
      return { ...defaultData(), ...parsed, progress: { ...defaultData().progress, ...(parsed.progress || {}) } }
    } catch {
      return defaultData()
    }
  })
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(data)) } catch { /* quota / private mode */ }
  }, [data])
  return [data, setData]
}

// ---- date helpers (local time) ----
export function fmtDate(d) {
  const tz = d.getTimezoneOffset() * 60000
  return new Date(d.getTime() - tz).toISOString().slice(0, 10)
}
export function todayStr() {
  return fmtDate(new Date())
}

export function isComplete(day) {
  return !!(day && day.anki && day.listening && day.speaking)
}

// Streak: nếu hôm nay chưa xong thì không tính là đứt — đếm lùi từ hôm qua.
export function currentStreak(days) {
  const d = new Date()
  if (!isComplete(days[fmtDate(d)])) d.setDate(d.getDate() - 1)
  let streak = 0
  while (isComplete(days[fmtDate(d)])) {
    streak++
    d.setDate(d.getDate() - 1)
  }
  return streak
}

export function totalMinutes(days) {
  return Object.values(days).reduce((s, x) => s + (Number(x.minutes) || 0), 0)
}

export function overallBand(m) {
  const vals = [m.L, m.R, m.W, m.S].map(Number).filter((v) => !isNaN(v) && v > 0)
  if (vals.length < 4) return null
  const avg = vals.reduce((a, b) => a + b, 0) / 4
  return Math.round(avg * 2) / 2
}

export function sortedMocks(mocks) {
  return [...mocks].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

// ---- export / import ----
export function exportData(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ielts-tracker-${todayStr()}.json`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function parseImport(text) {
  const parsed = JSON.parse(text)
  if (typeof parsed !== 'object' || parsed === null) throw new Error('File không hợp lệ')
  return { ...defaultData(), ...parsed, progress: { ...defaultData().progress, ...(parsed.progress || {}) } }
}
