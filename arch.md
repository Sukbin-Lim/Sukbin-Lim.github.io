# Sukbin Lim — Personal CV Site · Architecture (`arch.md`)

> **상태:** 방향·결정 단계 (구현 전).
> **이 문서의 범위:** 지금 확정해도 흔들리지 않을 **상위 결정만** 기록한다.
> 섹션 구성·콘텐츠 스키마·페이지 분할·파일 트리 등 **내부 구조는 의도적으로 열어둔다** —
> 실제 논문/콘텐츠를 받은 뒤(§6, §8) 그때 함께 확정한다. (지금 구체화하면 다시 갈아엎을 가능성이 큼.)

---

## 0. 확정된 것 (stable decisions)

| 항목 | 결정 |
|---|---|
| **디자인 방향** | "Bold Modern" (시안 #3) — `design/mockup-bold-modern.html` / `.png` |
| **스택** | **Astro** (정적 사이트 생성기) |
| **호스팅/배포** | `sukbin-lim.github.io` (User Pages, 경로 `/`) → GitHub Actions 빌드·배포 |
| **콘텐츠 원칙** | 콘텐츠는 데이터 파일로 분리(마크업과 분리). *구체 스키마는 미정* |
| **임팩트 전략** | 다이샷 칩 카드 + 하드넘버 캡션 + 네임드 칩 브랜딩 |
| **PDF CV 출력** | **기능 확정** — 웹과 동일 데이터에서 정리된 PDF 생성(단일 원천) + 다운로드 버튼. 상세 §5 |

---

## 1. 목표 & 독자

- **1차 독자(빠르게 훑는 사람):** 칩설계·ML시스템 교수/리쿠르터, 인턴·포닥·산업연구 평가자.
- **핵심 메시지(5초):** "제작된 실리콘(Samsung 4nm/28nm)으로 H100을 이긴 하드웨어 설계자."
- **현 사이트의 문제:** `sproogen/resume-theme`(2022년 이후 방치)에 모든 콘텐츠가 `_config.yml`에 텍스트로 박혀, 두 개의 tape-out 칩이라는 최대 무기가 글에 묻힘.

---

## 2. 디자인 방향 — #3 Bold Modern

레퍼런스 목업: **`design/mockup-bold-modern.html`** (브라우저로 열어 확인). 렌더: `design/mockup-bold-modern.png`.
> 목업은 룩앤필 기준점일 뿐, 섹션 구성은 추후 데이터에 맞춰 조정 가능.

### 지킬 임팩트 원칙
1. **네임드 칩을 1급 개체로** — Adelia·Hawkeye 각각 다이샷 + 큰 칩 이름 + 단일 하드넘버. 이름을 반복해 개인 브랜드로.
2. **하드넘버는 캡션에, 2초 안에** — 항목당 가장 인용 가능한 1개(`2.79× vs H100`, `38.5 TOPS/W`).
3. **above-the-fold 주 비주얼 = 다이샷/비교 막대** — 프로필 사진·스톡 이미지 아님.
4. **전용 Chip Gallery** — 2-카드라도 foundry+node+year 태그 → tape-out 이력 한눈에.
5. **공정 노드 배지**(Samsung 4nm/28nm)를 스펙 칩으로 — 리딩엣지 신뢰 신호.
6. **Selected ~5편 + "full list on Scholar"** — 통짜 나열 대신 큐레이션.
7. **신뢰 배너**(2 chips · 2× JSSC · 4 patents · Best Paper)를 상단에.
8. **짧은 News 피드** — 상승세 신호.

### 안티패턴 (피한다)
resume-theme식 일반 룩 · 칩을 Education 아래 문단으로 · 논문 통짜 번호 나열 · 스톡 이미지 · 내부 용어 먼저(숫자·페이오프 뒤로) · 특허/수상 맨 아래 매장 · 순수 React SPA(색인 리스크).

---

## 3. 스택 결정 — 왜 Astro

사용자 우선순위 = **트렌디** + Actions 빌드는 무부담(푸시당 1회, 공개 저장소 무료)으로 정리됨 → #3 모던 룩에 가장 잘 맞는 **Astro** 채택.

- **지금 가장 핫한 콘텐츠 SSG.** Islands 구조라 결과물은 가벼운 정적 HTML → 로딩 즉각 + SEO/Scholar 색인 안전.
- React/Svelte 컴포넌트 + `.astro`로 **bespoke한 #3 룩** 구현(흔한 템플릿처럼 안 보임). 인터랙티브는 필요한 곳만 island.
- **배포 개요:** `git push` → GitHub Actions가 빌드 → Pages(CDN)에 정적 파일 배포. 방문자는 정적 파일만 받음(서버 연산 0).
- **대안(보류):** 네이티브 Jekyll 재구조화(무 Actions이나 덜 트렌디), al-folio(live BibTeX이나 학계에서 흔한 룩). 두 안 모두 "콘텐츠=데이터 파일" 원칙과 호환 → 향후 전환해도 데이터 재사용 가능.

---

## 4. 디자인 시스템 토큰 (#3 — 시작점, 추후 미세조정 가능)

### 타이포그래피
- **Display:** `Bricolage Grotesque` (700/800) — 헤드라인·칩 이름·섹션 제목
- **Body:** `Hanken Grotesk` (400–700)
- **Mono:** `Martian Mono` (400–600) — 태그·라벨·venue·단위

### 컬러 토큰
```css
--bg:#f0efe9; --card:#ffffff; --ink:#111110; --ink2:#56544c; --faint:#8f8c80;
--blue:#1f37ff;  /* PRIMARY — hero 숫자블록, co-first */
--lime:#d8fb3a;  /* 하드넘버 하이라이트 — metric 배지, 강조 수치 */
--coral:#ff5a2b; /* SECONDARY — 2번째 칩, Best Paper 배지 */
```
**규칙:** blue=주, lime=하드넘버, coral=보조/Best Paper. 한 화면 3색 이상 남발 금지.

### 형태
- 카드/논문행/내비 `border:2px solid ink`, pill/kpi/tag `1.5px`. radius: 카드 24 · hero number 26 · pill 40 · kpi 14.
- 다이샷 자리: CSS floorplan(격자+코어), 칩별 액센트 배경 → **실제 micrograph로 교체 예정.**

---

## 5. PDF Export — 정리된 CV 다운로드 (기능 확정)

웹사이트와 별개로 **깔끔하게 정리된 CV를 PDF로 받는 기능**을 제공한다.

- **단일 원천 원칙:** 웹과 **동일한 데이터**에서 생성 → 웹/PDF 내용이 절대 어긋나지 않음(별도 LaTeX 원천식 drift 없음).
- **기본 채택 방식:** 인쇄 최적화된 `/cv` 뷰 — A4/Letter, 흑백, 내비/토글 제거, `@page`·`break-inside:avoid`로 페이지 분할 제어.
  - **수동:** `/cv` 열고 브라우저 인쇄 → PDF 저장 (추가 인프라 0).
  - **자동(권장 옵션):** 배포 시 CI(headless Chrome/Playwright)가 `/cv`를 렌더해 `public/files/Sukbin_Lim_CV.pdf` 생성 → 사이트 **"Download CV ↓"** 버튼이 항상 최신 PDF 제공. 사용자가 따로 할 일 없음.
- **선택 업그레이드(미정):** LaTeX급 타이포가 꼭 필요하면, 같은 데이터에서 **Typst/RenderCV**로 typeset PDF를 생성하는 파이프라인 추가 가능. 단 별도 템플릿 유지 비용↑ → v1은 인쇄형으로 충분.
- 구체 레이아웃/페이지네이션은 내부 구조와 함께 구현 시 확정(§6).

---

## 6. 의도적으로 열어둔 것 (실제 정보 확보 후 확정) ★

아래는 **지금 확정하지 않는다.** 논문/콘텐츠가 들어오면 그 형태에 맞춰 함께 정한다.

- **섹션 구성·순서, 페이지 분할** (홈에 무엇을, /chips·/publications·/cv를 나눌지 등)
- **콘텐츠 모델 필드·스키마** (논문/칩/특허/수상/뉴스 각 데이터 구조)
- **컴포넌트 분해** (어떤 단위로 쪼갤지)
- **저장소 파일 트리 구체**
- **PDF `/cv` 레이아웃·페이지네이션 디테일** (방식은 §5에 고정)
- **저자 표기 렌더 디테일** (단, 규칙 자체는 §7에 고정)

> 단, "콘텐츠는 데이터 파일로 분리한다"·"PDF는 단일 원천에서 뽑는다"는 **원칙**은 확정(§0, §5). 구체 형태만 보류.

---

## 7. 지켜야 할 사실 (정확성 노트 — 구조와 무관하게 고정)

1. **공동1저자 `*` = JSSC 저널 Adelia 항목에만** (Sukbin Lim\* / Jung-Hoon Kim\*). VLSI 컨퍼런스 Adelia는 Jung-Hoon Kim이 1저자라 `*` 없음.
2. **정식 이메일 1개로 통일** — 현재 불일치: `_config.yml`=`sukbin.lim.4502@gmail.com`, 계정=`xvs4485@gmail.com`. → 확정 필요.
3. **제거 대상(전환 시):** `modern-resume-theme-gh-pages/`(+`.DS_Store`), `images/landscape-trees.jpg`, sproogen 잔재. (`images/profile.jpg`·`favicon.ico` 보존)
4. **수치 표기 통일:** `2.79×`·`2.05×`·`38.5 TOPS/W`·`44.2 FPS`·`13.8×` — 곱셈 기호 `×`(U+00D7).

---

## 8. 다음 단계 입력 (주실 것)

1. **각 논문 데이터** — 제목 · **저자 순서**(본인/공동1저자 표시) · venue · 연도 · 링크 · (선택) 대표 수치/Best Paper/연결 칩/BibTeX. *(이게 들어오면 내부 구조 확정 + 구현 시작)*
2. **칩 다이샷(micrograph) 이미지** (Adelia/Hawkeye) — 임팩트 대폭 상승.
3. **정식 이메일 확정** (§7-2).
4. (선택) ORCID · GitHub 아이디 · 프로필 사진 교체 여부 · 기존 CV PDF 유무 · PDF를 LaTeX급으로 뽑을지(§5 업그레이드).

---

## 9. 로드맵 (상위 단계)

- [x] **Phase 0 — 방향 확정 (이 문서).** 스택·룩·전략·디자인 토큰·PDF 기능 결정, 레퍼런스 목업 보존.
- [ ] **Phase 1 — 구조 확정.** ★논문/콘텐츠 확보 후★ 섹션·스키마·페이지·컴포넌트 분해 결정 (§6).
- [ ] **Phase 2 — 스캐폴드 + 구현.** Astro 프로젝트, 토큰/레이아웃, #3 룩 컴포넌트, 데이터 입력.
- [ ] **Phase 3 — 페이지 확장·PDF 출력·SEO·접근성·배포.**

---

*문서 작성: 방향 단계. 결정 변경 시 이 문서를 단일 원천으로 갱신.*
