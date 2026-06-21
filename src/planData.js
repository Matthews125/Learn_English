// Toàn bộ nội dung kế hoạch dưới dạng dữ liệu — sửa ở đây là cập nhật trang Kế hoạch.

export const META = {
  title: 'Tiếng Anh: Giao tiếp lưu loát → IELTS 6.5+',
  subtitle: 'Ưu tiên nói lưu loát trước · IELTS sau · 100% miễn phí · đa thiết bị',
  goal: 'Mục tiêu trước mắt: GIAO TIẾP lưu loát, rõ ràng, tự tin. Vững rồi mới chuyển sang luyện IELTS 6.5+. Cùng một nền tảng (ngữ pháp · từ vựng · nghe · nói) — chỉ khác thứ tự ưu tiên.',
}

export const PRINCIPLES = [
  'Ưu tiên số 1: NÓI mỗi ngày — mục tiêu trước mắt là giao tiếp lưu loát; IELTS để sau.',
  'Ngữ pháp phải CÀY BÀI TẬP (không chỉ đọc lý thuyết) — sai đâu sửa đó, đó là cách nhớ lâu.',
  'Viết theo bậc thang: câu → câu nối → đoạn nhỏ → đoạn đủ → bài 200 từ. Đừng ép 200 từ khi chưa vững.',
  'Đều đặn hơn cường độ; nạp input nhiều + ép output (nói/viết) mỗi ngày.',
]

export const PHASES = [
  {
    id: 0, name: 'Giai đoạn 0 — Đo trình độ gốc', period: 'Tuần 1',
    focus: 'Biết điểm xuất phát để theo dõi.',
    bullets: [
      'Ghi âm nói 1 phút về bản thân + viết 5 câu → xem mình kẹt ở đâu (nói hay ngữ pháp).',
      'Làm 1 đề mock free để biết band tham khảo (chưa cần lo điểm).',
    ],
    milestone: 'Biết rõ mình yếu/mạnh ở đâu.',
  },
  {
    id: 1, name: 'Giai đoạn 1 — Nền tảng + bắt đầu nói', period: '≈ Tháng 1–3',
    focus: 'Lấy lại ngữ pháp (CÀY BÀI TẬP) + từ vựng + nghe nhiều + nói mỗi ngày.',
    bullets: [
      'Ngữ pháp: mỗi ngày 1 chủ đề + LÀM BÀI TẬP (test-english.com, englishpage.com, agendaweb).',
      'Anki 10–15 từ/ngày; 6 Minute English + shadowing mỗi ngày.',
      'Nói mỗi ngày với AI: bắt đầu từ câu ngắn về chủ đề quen, không sợ sai.',
    ],
    milestone: 'Cột mốc A: nói được 4–5 câu liền mạch về chủ đề quen; bài tập ngữ pháp cơ bản (thì, mạo từ, câu đơn/ghép) đúng > 80%.',
  },
  {
    id: 2, name: 'Giai đoạn 2 — GIAO TIẾP LƯU LOÁT (mục tiêu trước mắt)', period: '≈ Tháng 3–6',
    focus: 'Nói trôi, ít khựng, tự tin về nhiều chủ đề đời thường; viết được đoạn ngắn có cấu trúc.',
    bullets: [
      'Nói hằng ngày: hội thoại dài hơn với AI, kể chuyện, nêu ý kiến — giảm dần thời gian “nghĩ”.',
      'Viết theo bậc thang (xem khung “Lộ trình viết”): từ 3–4 câu → 1 đoạn hoàn chỉnh.',
      'Ngữ pháp nâng dần: câu điều kiện, bị động, mệnh đề quan hệ + bài tập.',
    ],
    milestone: 'CỘT MỐC CHÍNH: giao tiếp lưu loát, rõ ràng, tự tin về chủ đề đời thường mà không phải dừng nghĩ lâu. Đạt rồi mới chuyển sang IELTS.',
  },
  {
    id: 3, name: 'Giai đoạn 3 — Chuyển sang IELTS', period: 'Sau khi đã lưu loát',
    focus: 'Giờ mới học chiến thuật thi + viết essay 200+ từ (lúc này dễ hơn nhiều vì nền đã chắc).',
    bullets: [
      'Học format 4 kỹ năng; viết Task 2 theo dàn bài (ielts-simon, IELTS Liz) + AI chấm.',
      'Speaking Part 1–2–3 với AI đóng vai giám khảo.',
      'Mỗi tuần 1 mock đầy đủ → ghi sổ lỗi.',
    ],
    milestone: 'Cột mốc C: mock ổn định ≥ 6.5 cả 4 kỹ năng (Writing & Speaking ≥ 6.0).',
  },
  {
    id: 4, name: 'Giai đoạn 4 — Tinh chỉnh & thi', period: 'Khi mock ≥ 6.5',
    focus: 'Cày mock dày, sửa lỗi lặp lại, đăng ký thi.',
    bullets: [
      '2–3 tuần mock dày + sửa lỗi lặp lại.',
      'Quyết định Academic vs General.',
      'Đăng ký thi.',
    ],
    milestone: 'Thi khi mock ổn định ≥ 6.5 hai lần liên tiếp.',
  },
]

export const WRITING_LADDER = [
  { step: 'Bậc 1 — Câu chắc', detail: 'Mỗi ngày viết 5–10 câu đơn đúng ngữ pháp (chủ ngữ + động từ + bổ ngữ). Dán vào Write & Improve hoặc nhờ AI sửa.' },
  { step: 'Bậc 2 — Nối câu', detail: 'Dùng and / but / because / so / although để ghép thành câu ghép & câu phức. Viết 5 câu nối mỗi ngày.' },
  { step: 'Bậc 3 — Đoạn mini (3–4 câu)', detail: '1 câu chủ đề → 2 câu giải thích/ví dụ → (1 câu kết). Mỗi ngày 1 đoạn nhỏ.' },
  { step: 'Bậc 4 — Đoạn đủ (~100 từ)', detail: 'Topic sentence + 3 ý hỗ trợ có ví dụ + câu kết. Dùng linking words: firstly, for example, however, in conclusion.' },
  { step: 'Bậc 5 — Bài ~200 từ', detail: 'Khi bậc 4 đã mượt: mở bài – 2 đoạn thân – kết bài. Lúc này (Giai đoạn 3) viết 200 từ không còn đáng sợ.' },
]

export const RESOURCES = {
  'Ngữ pháp': [
    { name: 'englishpage.com', url: 'https://www.englishpage.com', note: 'Bài giảng + bài tập tự chấm (xương sống thay sách)' },
    { name: 'perfect-english-grammar.com', url: 'https://www.perfect-english-grammar.com', note: 'Giải thích ngắn + bài tập + PDF free' },
    { name: 'British Council — Grammar', url: 'https://learnenglish.britishcouncil.org/grammar', note: 'Theo cấp độ' },
    { name: 'BBC Learning English — Grammar', url: 'https://www.bbc.co.uk/learningenglish', note: 'Video ngắn' },
    { name: 'test-english.com', url: 'https://test-english.com', note: 'Ngữ pháp A1–C1 + bài tập có giải thích (rất hợp cày)' },
    { name: 'agendaweb.org', url: 'https://agendaweb.org/grammar-exercises.html', note: 'Kho bài tập ngữ pháp khổng lồ theo chủ đề' },
    { name: 'english-grammar.at', url: 'https://www.english-grammar.at', note: 'Worksheet/bài tập PDF tải về làm' },
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
    { name: 'ChatGPT', url: 'https://chat.openai.com', note: 'AI luyện hội thoại hằng ngày + sửa lỗi (free)' },
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
