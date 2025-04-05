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

<h3>🛠 참고 사항</h3>

<ul>
  <li>변경사항이 보이지 않으면 브라우저에서 <strong>강력 새로고침 (Ctrl + Shift + R)</strong> 하세요.</li>
  <li>GitHub 설정에서 <code>gh-pages</code> 브랜치가 생성되었는지, Pages 설정이 해당 브랜치를 바라보는지 확인하세요.</li>
  <li><code>public/</code> 폴더 안에 정적 리소스를 넣어야 GitHub Pages에서 정상 표시됩니다.</li>
</ul>
