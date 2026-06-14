# Sukbin Lim — CV site (Astro prototype)

"Bold Modern" (#3) 룩 + 실제 Adelia 데이터로 만든 Astro 프로토타입. (arch.md 참조)

## 로컬 실행
```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 정적 출력
```

## 구조
- `src/data/` — 콘텐츠(타입화된 데이터 모듈). 논문/칩 추가 = 여기 한 건 입력.
  - `profile.ts` · `chips.ts` · `publications.ts` · `types.ts`
- `src/components/` — NavBar / Hero / CredibilityStrip / SectionHead / ChipCard / PubRow / AuthorList / Badge / Footer
- `src/layouts/Base.astro` — head·폰트·SEO·JSON-LD
- `src/styles/` — `tokens.css`(디자인 토큰) · `global.css`
- `src/pages/index.astro` — 홈

## 저자 표기 규칙
`authors[]`의 `self:true` → 굵게, `equal:true` → 위첨자 `*` + "Equal contribution" 범례.
(JSSC = Sukbin Lim\* 공동1저자 / VLSI = Jung-Hoon Kim 1저자, Sukbin Lim 2저자 무표기.)

## 배포 (준비되면)
`deploy.yml.example` → `.github/workflows/deploy.yml` 로 이동 후, 저장소 Settings → Pages → Source = "GitHub Actions".

## 남은 작업 (full build)
Hawkeye 칩 · 나머지 논문 · 4 KR patents · Awards · News · `/chips`·`/publications`·`/cv` 페이지 · PDF 출력 · 실제 다이샷.
