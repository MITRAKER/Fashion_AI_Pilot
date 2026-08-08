// Seeds a demo proposal over HTTP with correct UTF-8 (curl mangled the em dash).
const login = await fetch('http://localhost:8787/api/login', {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ username: 'natalie', password: 'pilot' }),
})
const sid = (login.headers.get('set-cookie') || '').match(/sid=([^;]+)/)?.[1]
const state = await (await fetch('http://localhost:8787/api/state', { headers: { cookie: `sid=${sid}` } })).json()

for (const p of state.proposals.filter(x => x.state === 'Open')) {
  await fetch(`http://localhost:8787/api/styles/${p.styleId}/proposals/${p.id}/dismiss`, {
    method: 'POST', headers: { 'content-type': 'application/json', cookie: `sid=${sid}` },
    body: JSON.stringify({ reason: 'Superseded by corrected demo data' }),
  })
}

const r = await fetch('http://localhost:8787/api/styles/DR-1041/proposals', {
  method: 'POST', headers: { 'content-type': 'application/json', cookie: `sid=${sid}` },
  body: JSON.stringify({
    fieldId: 'f-con-hem',
    proposedValue: 'Bias panel hem — 2.5 cm double turn, after 48h hang',
    rationale: 'Factory ST-26-031 reported the 2 cm turn dropped unevenly on bias after wear',
    source: 'factory correction',
  }),
})
const d = await r.json()
console.log(d.proposals.filter(p => p.state === 'Open').map(p => p.proposedValue))
