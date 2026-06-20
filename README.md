# Kế hoạch IELTS 6.5+ — web app + tracker

SPA React + Vite: vừa xem toàn bộ lộ trình tự học (miễn phí, đa thiết bị), vừa là **tracker tương tác** (tick thói quen mỗi ngày, đếm streak, nhập điểm mock, % tiến độ ngữ pháp/Anki, sổ lỗi).

- **Lưu trữ**: `localStorage` trên thiết bị — không cần backend, không tài khoản.
- **Chuyển sang máy khác**: nút **Sao lưu** (xuất JSON) trên máy A → **Khôi phục** (nhập JSON) trên máy B.
- Responsive: dùng tốt trên cả điện thoại lẫn máy tính. Có dark mode tự động.

## Chạy local
```bash
npm install
npm run dev      # mở http://localhost:5173
```

## Build
```bash
npm run build    # ra thư mục dist/
npm run preview  # xem thử bản build
```

## Deploy (free)

### GitHub Pages (deploy bằng nhánh `gh-pages`)
`vite.config.js` đã dùng base tương đối nên chạy đúng ở `https://<user>.github.io/<repo>/`.
Source code ở nhánh `main`, bản build tĩnh ở nhánh `gh-pages`.

**Redeploy** (mỗi khi sửa code) — build rồi đẩy `dist/` lên nhánh `gh-pages`:
```bash
cd /Users/a1234/ielts-plan
npm run build
touch dist/.nojekyll
git worktree add -B gh-pages /tmp/ghp
rm -rf /tmp/ghp/*; cp -R dist/. /tmp/ghp/
git -C /tmp/ghp add -A
git -C /tmp/ghp commit -m "deploy"
git -C /tmp/ghp push -f origin gh-pages
git worktree remove /tmp/ghp
```
Bật Pages 1 lần: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`**.

### Vercel
```bash
npm i -g vercel
vercel           # lần đầu: làm theo hướng dẫn; framework auto-detect = Vite
vercel --prod    # deploy bản chính
```
Hoặc: push repo lên GitHub → vào vercel.com → **Add New Project** → chọn repo → Deploy (không cần cấu hình).

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod   # publish dir: dist (đã cấu hình trong netlify.toml)
```
Hoặc kéo-thả thư mục `dist/` vào https://app.netlify.com/drop.

> Đây là SPA một trang (không dùng router) nên không cần cấu hình rewrite/redirect.

## Cấu trúc
```
src/
  planData.js          # toàn bộ nội dung kế hoạch (sửa ở đây để cập nhật trang Kế hoạch)
  storage.js           # hook localStorage + export/import + hàm tính streak/band
  App.jsx              # layout + tab nav + sao lưu/khôi phục
  components/
    Dashboard.jsx      # streak, hôm nay, band gần nhất, % tiến độ
    PlanView.jsx       # lộ trình, tài nguyên, lịch, checklist
    DailyTracker.jsx   # ghi nhận & lịch sử ngày
    MockLog.jsx        # điểm mock + tính overall
    Progress.jsx       # ngữ pháp lõi + từ vựng Anki
    ErrorLog.jsx       # sổ lỗi
```
