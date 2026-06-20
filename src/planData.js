// Toàn bộ nội dung kế hoạch dưới dạng dữ liệu — sửa ở đây là cập nhật trang Kế hoạch.

export const META = {
  title: 'Kế hoạch học tiếng Anh → IELTS 6.5+',
  subtitle: 'Bản 100% miễn phí · học mọi thiết bị · lộ trình theo cột mốc',
  goal: 'Từ B1 yếu → IELTS 6.5+ (B2 vững). Học chắc nền rồi mới thi — không đặt hạn cứng.',
}

export const PRINCIPLES = [
  'Đều đặn quan trọng hơn cường độ — 60–90′ học sâu/ngày + học vụn là đủ.',
  'Xây nền trước, luyện đề sau — đề thật để dành Giai đoạn 3.',
  'Nạp input khổng lồ + ép output (nói/viết) mỗi ngày.',
  'Mỗi từ/cấu trúc mới phải được gặp lại (Anki) và được dùng — để không quên như lần trước.',
]

export const PHASES = [
  {
    id: 0, name: 'Giai đoạn 0 — Đo trình độ gốc', period: 'Tuần 1',
    focus: 'Lấy mốc khởi điểm để theo dõi tiến bộ.',
    bullets: [
      'Làm 1 đề mock free (ieltsonlinetests.com / Road to IELTS Free) → ghi band 4 kỹ năng vào tab Điểm Mock.',
      'Viết 1 đoạn ~150 từ trên Write & Improve → lấy mức CEFR.',
    ],
    milestone: 'Có số liệu khởi điểm để 2–3 tháng sau đo lại.',
  },
  {
    id: 1, name: 'Giai đoạn 1 — Xây lại nền', period: '≈ Tháng 1–3',
    focus: 'Lấy lại ngữ pháp + từ vựng lõi + nghe vào tai.',
    bullets: [
      'Ngữ pháp B1→B2 theo englishpage.com + perfect-english-grammar.com + BBC/British Council.',
      'Anki 10–15 từ/ngày, mục tiêu ~1500 từ.',
      '6 Minute English mỗi ngày + shadowing.',
    ],
    milestone: 'Cột mốc A: nghe 6ME không cần transcript · Write&Improve B1+→B2 · xong các chủ đề ngữ pháp lõi · Anki ~1500 từ.',
  },
  {
    id: 2, name: 'Giai đoạn 2 — Lên B2 thật sự', period: '≈ Tháng 3–6',
    focus: 'Nói trôi hơn, viết có cấu trúc.',
    bullets: [
      'Input khó dần (TED, podcast dài), chủ đề học thuật.',
      'Viết đoạn → bài ngắn trên Write & Improve + AI sửa.',
      'Mỗi ngày 1 câu hỏi IELTS Part 1/2: ghi âm + nghe lại + AI sửa.',
    ],
    milestone: 'Cột mốc B: mock ≈ 5.5–6.0 · Write&Improve ổn định B2 · nói 2 phút ít khựng.',
  },
  {
    id: 3, name: 'Giai đoạn 3 — Luyện chiến thuật IELTS', period: '≈ Tháng 6–9',
    focus: 'Cày đề + kỹ thuật phòng thi.',
    bullets: [
      'Writing: dàn bài Task 2 (ielts-simon, IELTS Liz), 2–3 bài/tuần, AI chấm.',
      'Speaking: trọn bộ Part 1–2–3 với AI đóng vai giám khảo.',
      'Mỗi tuần 1 mock đầy đủ → ghi sổ lỗi.',
    ],
    milestone: 'Cột mốc C: mock ổn định ≥ 6.5 cả 4 kỹ năng (Writing & Speaking ≥ 6.0).',
  },
  {
    id: 4, name: 'Giai đoạn 4 — Tinh chỉnh & thi', period: 'Khi đạt Cột mốc C',
    focus: 'Cày mock dày, sửa lỗi lặp lại, đăng ký thi.',
    bullets: [
      '2–3 tuần mock dày + sửa lỗi lặp lại.',
      'Quyết định Academic vs General.',
      'Đăng ký thi.',
    ],
    milestone: 'Thi khi mock ổn định ≥ 6.5 hai lần liên tiếp.',
  },
]

export const RESOURCES = {
  'Ngữ pháp': [
    { name: 'englishpage.com', url: 'https://www.englishpage.com', note: 'Bài giảng + bài tập tự chấm (xương sống thay sách)' },
    { name: 'perfect-english-grammar.com', url: 'https://www.perfect-english-grammar.com', note: 'Giải thích ngắn + bài tập + PDF free' },
    { name: 'British Council — Grammar', url: 'https://learnenglish.britishcouncil.org/grammar', note: 'Theo cấp độ' },
    { name: 'BBC Learning English — Grammar', url: 'https://www.bbc.co.uk/learningenglish', note: 'Video ngắn' },
  ],
  'Từ vựng': [
    { name: 'Anki (+ AnkiWeb free)', url: 'https://apps.ankiweb.net', note: 'SRS, đồng bộ máy tính ↔ điện thoại' },
    { name: 'Quizlet', url: 'https://quizlet.com', note: 'Thay thế nếu thích app gọn' },
    { name: 'Oxford 3000/5000', url: 'https://www.oxfordlearnersdictionaries.com/about/wordlists', note: 'Danh sách từ lõi' },
  ],
  'Nghe': [
    { name: 'BBC 6 Minute English', url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english', note: 'Chuẩn B1→B2' },
    { name: 'VOA Learning English', url: 'https://learningenglish.voanews.com', note: 'Tin đọc chậm + text + audio' },
    { name: 'ELLLO', url: 'https://www.elllo.org', note: 'Nghe phân cấp A1–C2 + quiz' },
    { name: 'British Council — Listening', url: 'https://learnenglish.britishcouncil.org/skills/listening', note: 'Theo cấp độ + bài tập' },
    { name: 'TED / TED-Ed', url: 'https://www.ted.com', note: 'Bỏ dần phụ đề' },
  ],
  'Đọc': [
    { name: 'News in Levels', url: 'https://www.newsinlevels.com', note: '1 tin viết ở 3 cấp độ' },
    { name: 'Breaking News English', url: 'https://breakingnewsenglish.com', note: '7 cấp độ + ~26 bài tập' },
    { name: 'British Council — Reading', url: 'https://learnenglish.britishcouncil.org/skills/reading', note: 'Graded A1–C1' },
    { name: 'Project Gutenberg', url: 'https://www.gutenberg.org', note: 'Sách free (khi đã B1+)' },
  ],
  'Speaking': [
    { name: 'ChatGPT', url: 'https://chat.openai.com', note: 'AI đóng vai giám khảo (free)' },
    { name: 'Claude', url: 'https://claude.ai', note: 'AI luyện hội thoại + sửa lỗi (free)' },
    { name: 'Google Gemini', url: 'https://gemini.google.com', note: 'AI free' },
    { name: 'YouGlish', url: 'https://youglish.com', note: 'Nghe phát âm từ trong video thật' },
  ],
  'Writing': [
    { name: 'Write & Improve (Cambridge)', url: 'https://writeandimprove.com', note: 'Chấm CEFR + chỉ lỗi tức thì' },
    { name: 'ielts-simon.com', url: 'https://www.ielts-simon.com', note: 'Dàn bài & bài mẫu' },
    { name: 'IELTS Liz', url: 'https://ieltsliz.com', note: 'Hướng dẫn Task 1 & 2' },
    { name: 'Grammarly', url: 'https://www.grammarly.com', note: 'Bắt lỗi cơ bản (free)' },
  ],
  'Đề / Mock': [
    { name: 'IELTS Online Tests', url: 'https://ieltsonlinetests.com', note: 'Mock free, chấm tự động L/R' },
    { name: 'Road to IELTS (Free)', url: 'https://www.britishcouncil.org/exam/ielts/prepare', note: 'Sample test + video (British Council)' },
  ],
}

export const DEVICES = [
  { tool: 'Web (BBC, VOA, ELLLO, news, Write&Improve, ielts-simon/liz, YouGlish, ieltsonlinetests…)', pc: 'Trình duyệt', mobile: 'Trình duyệt / app BBC LE' },
  { tool: 'Anki (quan trọng nhất)', pc: 'Anki desktop (free)', mobile: 'Android: AnkiDroid · iPhone: ankiweb.net trên trình duyệt' },
  { tool: 'AI luyện nói / sửa bài', pc: 'Web (free)', mobile: 'App / web (free)' },
  { tool: 'Shadowing / chữa đề', pc: 'YouTube web', mobile: 'YouTube app' },
  { tool: 'Grammarly', pc: 'Web / tiện ích', mobile: 'Bàn phím Grammarly (free)' },
]

export const WEEKLY = [
  { day: 'Thứ 2', deep: 'Ngữ pháp: 1 chủ đề englishpage.com + bài tập tự chấm' },
  { day: 'Thứ 3', deep: 'Nghe chuyên sâu: chép chính tả + shadowing 1 bài' },
  { day: 'Thứ 4', deep: 'Writing: viết 1 đoạn → Write & Improve + ôn ngữ pháp' },
  { day: 'Thứ 5', deep: 'Speaking với AI: hội thoại + ghi âm & nghe lại' },
  { day: 'Thứ 6', deep: 'Reading chuyên sâu: 1 bài + đào từ vựng vào Anki' },
  { day: 'Thứ 7', deep: 'Buổi dài: ôn Anki cả tuần + xem 1 phim/series có phụ đề Anh' },
  { day: 'Chủ nhật', deep: 'Nhẹ/bù: nói tự do với AI + nghỉ ngơi' },
]
export const WEEKLY_DAILY = 'Đan vào giờ rảnh mỗi ngày: Anki 15′ · Nghe thụ động 30′+ · Nói/shadowing 10′'

export const DAILY = [
  { time: 'Sáng / di chuyển / ăn sáng', kind: 'Thụ động ~20′', task: 'Nghe 6 Minute English (lần 1 lấy ý)' },
  { time: 'Giờ rảnh ở công ty', kind: 'Học vụn ~30–40′', task: 'Anki 15′ + đọc 1 bài News in Levels/Breaking News + 1 bài tập ngữ pháp' },
  { time: 'Ăn trưa / nghỉ', kind: 'Nhẹ ~15′', task: 'YouGlish/phát âm hoặc 1 video ngắn tiếng Anh' },
  { time: 'Tập thể dục', kind: 'Thụ động ~20–30′', task: 'Shadowing (lặp theo audio) — vừa tập vừa nói' },
  { time: 'Ăn tối / tắm', kind: 'Thụ động ~15′', task: 'Nghe lại bài sáng (lần 2, có transcript)' },
  { time: '22h trở đi', kind: 'Học sâu 60–90′', task: 'Theo lịch tuần (ngữ pháp / nghe / viết / nói / đọc)' },
]

export const CHECKLIST = [
  'Tạo tài khoản AnkiWeb (free) → cài Anki máy tính + AnkiDroid (Android) hoặc dùng ankiweb.net (iPhone).',
  'Bookmark ngữ pháp: englishpage.com, perfect-english-grammar.com, British Council.',
  'Tạo tài khoản Write & Improve → viết bài đầu lấy mốc CEFR.',
  'Làm 1 đề mock free → ghi band khởi điểm vào tab Điểm Mock.',
  'Bookmark: 6 Minute English, VOA, ELLLO, Breaking News, News in Levels, YouGlish.',
  'Đăng nhập 1 app AI free (ChatGPT/Claude/Gemini) trên điện thoại để luyện nói.',
  'Bắt đầu tick thói quen mỗi ngày ở tab Theo dõi.',
]

export const EXAM_NOTE =
  'Listening & Speaking giống nhau cho cả Academic & General. Khác nhau ở Reading & Writing Task 1 (Academic: tả biểu đồ/bảng/quy trình; General: viết thư). Khuyến nghị luyện Academic trước; đổi sang General chỉ mất ~1–2 tuần cho Task 1.'
