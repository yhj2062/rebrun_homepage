<h2>🚀 GitHub Pages 배포 가이드</h2>

<p>이 프로젝트는 Vite + React 기반이며, GitHub Pages를 통해 정적 웹사이트로 배포됩니다.</p>

<hr/>

<h3>✅ 1. <code>package.json</code> 설정</h3>

<pre><code>"homepage": "https://yhj2062.github.io"</code></pre>

<h3>✅ 2. gh-pages 패키지 설치 (최초 1회만)</h3>

<pre><code>npm install gh-pages --save-dev</code></pre>

<h3>✅ 3. 배포 스크립트 추가</h3>

<p><code>package.json</code>의 <code>"scripts"</code> 항목에 아래 추가:</p>

<pre><code>{
  "scripts": {
    "predeploy": "vite build",
    "deploy": "gh-pages -d dist"
  }
}</code></pre>


포트폴리오 생성 명령어 : npm run generate:portfolio


<h3>✅ 4. Vite 설정 (<code>vite.config.js</code>)</h3>

<pre><code>export default defineConfig({
  base: "/",
  // 또는 레포지토리 이름 기준:
  // base: "/레포지토리이름/"
});</code></pre>

<h3>✅ 5. 배포 실행</h3>

<pre><code>npm run deploy</code></pre>

<p>배포가 완료되면 GitHub Pages에서 사이트 확인 가능:</p>

<p>🔗 <a href="https://yhj2062.github.io" target="_blank">https://yhj2062.github.io</a></p>

<hr/>
<h3>✅ 6. 수정사항 반영 시 순서</h3>

<ol>
  <li>로컬에서 파일 수정 (예: <code>public/portfolio_data.json</code> 또는 이미지 추가)</li>
  <li>수정한 내용을 git에 반영:
    <pre><code>
git add .
git commit -m "포트폴리오 사진 및 데이터 업데이트"
git push
    </code></pre>
  </li>
  <li>배포 실행:
    <pre><code>npm run deploy</code></pre>
  </li>
</ol>

<p>이제 GitHub Pages에 변경사항이 반영됩니다 🎉</p>


<h3>🛠 참고 사항</h3>

<ul>
  <li>변경사항이 보이지 않으면 브라우저에서 <strong>강력 새로고침 (Ctrl + Shift + R)</strong> 하세요.</li>
  <li>GitHub 설정에서 <code>gh-pages</code> 브랜치가 생성되었는지, Pages 설정이 해당 브랜치를 바라보는지 확인하세요.</li>
  <li><code>public/</code> 폴더 안에 정적 리소스를 넣어야 GitHub Pages에서 정상 표시됩니다.</li>
</ul>

